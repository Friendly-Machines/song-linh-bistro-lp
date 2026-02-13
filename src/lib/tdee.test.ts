import { describe, it, expect } from 'vitest';
import {
  calculateBMR,
  calculateTDEE,
  calculateGoalCalories,
  calculateDaysToGoal,
} from './tdee';

describe('calculateBMR', () => {
  it('calculates male BMR correctly (Harris-Benedict revised)', () => {
    // 34yo male, 90kg, 185cm
    const bmr = calculateBMR('male', 90, 185, 34);
    // 88.362 + 13.397*90 + 4.799*185 - 5.677*34 = 1988.909
    expect(bmr).toBeCloseTo(1988.9, 0);
  });

  it('calculates female BMR correctly', () => {
    // 28yo female, 60kg, 165cm
    const bmr = calculateBMR('female', 60, 165, 28);
    // 447.593 + 9.247*60 + 3.098*165 - 4.33*28 = 1392.683
    expect(bmr).toBeCloseTo(1392.7, 0);
  });

  it('higher weight = higher BMR', () => {
    const light = calculateBMR('male', 60, 175, 30);
    const heavy = calculateBMR('male', 90, 175, 30);
    expect(heavy).toBeGreaterThan(light);
  });

  it('older age = lower BMR', () => {
    const young = calculateBMR('male', 80, 175, 25);
    const old = calculateBMR('male', 80, 175, 55);
    expect(young).toBeGreaterThan(old);
  });
});

describe('calculateTDEE', () => {
  it('sedentary (level 1) uses 1.2 multiplier', () => {
    const bmr = 2000;
    expect(calculateTDEE(bmr, 1)).toBeCloseTo(2400);
  });

  it('moderate (level 3) uses 1.55 multiplier', () => {
    const bmr = 2000;
    expect(calculateTDEE(bmr, 3)).toBeCloseTo(3100);
  });

  it('very active (level 5) uses 1.9 multiplier', () => {
    const bmr = 2000;
    expect(calculateTDEE(bmr, 5)).toBeCloseTo(3800);
  });

  it('higher activity = higher TDEE', () => {
    const bmr = 1800;
    expect(calculateTDEE(bmr, 5)).toBeGreaterThan(calculateTDEE(bmr, 1));
  });
});

describe('calculateGoalCalories', () => {
  const tdee = 3000;

  it('maintain returns TDEE unchanged', () => {
    expect(calculateGoalCalories(tdee, 'maintain', 'normal')).toBe(3000);
  });

  it('lose at normal rate = 20% deficit', () => {
    // 3000 - 3000*0.2 = 2400
    expect(calculateGoalCalories(tdee, 'lose', 'normal')).toBeCloseTo(2400);
  });

  it('gain at normal rate = 20% surplus', () => {
    // 3000 + 3000*0.2 = 3600
    expect(calculateGoalCalories(tdee, 'gain', 'normal')).toBeCloseTo(3600);
  });

  it('slow rate has smaller deficit than fast', () => {
    const slow = calculateGoalCalories(tdee, 'lose', 'slow');
    const fast = calculateGoalCalories(tdee, 'lose', 'fast');
    // slow deficit is less, so slow calories > fast calories
    expect(slow).toBeGreaterThan(fast);
  });

  it('lose calories are always less than TDEE', () => {
    expect(calculateGoalCalories(tdee, 'lose', 'slow')).toBeLessThan(tdee);
    expect(calculateGoalCalories(tdee, 'lose', 'normal')).toBeLessThan(tdee);
    expect(calculateGoalCalories(tdee, 'lose', 'fast')).toBeLessThan(tdee);
  });

  it('gain calories are always more than TDEE', () => {
    expect(calculateGoalCalories(tdee, 'gain', 'slow')).toBeGreaterThan(tdee);
    expect(calculateGoalCalories(tdee, 'gain', 'normal')).toBeGreaterThan(tdee);
    expect(calculateGoalCalories(tdee, 'gain', 'fast')).toBeGreaterThan(tdee);
  });
});

describe('calculateDaysToGoal', () => {
  it('returns 0 when current weight equals target weight', () => {
    expect(calculateDaysToGoal(3000, 'normal', 80, 80)).toBe(0);
  });

  it('losing 5kg at normal rate takes roughly 9 weeks', () => {
    // TDEE=3083, normal rate=20%, daily deficit=616.6 cal
    // 5kg * 7700 = 38500 cal / 616.6 = ~62 days = ~9 weeks
    const days = calculateDaysToGoal(3083, 'normal', 90, 85);
    expect(days).toBeGreaterThan(55);
    expect(days).toBeLessThan(70);
  });

  it('losing 10kg takes roughly twice as long as 5kg', () => {
    const days5 = calculateDaysToGoal(3000, 'normal', 85, 80);
    const days10 = calculateDaysToGoal(3000, 'normal', 90, 80);
    const ratio = days10 / days5;
    expect(ratio).toBeGreaterThan(1.9);
    expect(ratio).toBeLessThan(2.1);
  });

  it('fast rate is quicker than slow rate', () => {
    const slow = calculateDaysToGoal(3000, 'slow', 90, 80);
    const fast = calculateDaysToGoal(3000, 'fast', 90, 80);
    expect(fast).toBeLessThan(slow);
  });

  it('works for weight gain too (direction doesnt matter)', () => {
    const days = calculateDaysToGoal(3000, 'normal', 60, 65);
    expect(days).toBeGreaterThan(0);
    // Same diff as losing 5kg
    const daysLose = calculateDaysToGoal(3000, 'normal', 65, 60);
    expect(days).toBe(daysLose);
  });
});

describe('full scenario: 34yo male 90kg 185cm losing to 85kg', () => {
  it('produces realistic results', () => {
    const bmr = calculateBMR('male', 90, 185, 34);
    const tdee = calculateTDEE(bmr, 3); // moderate activity
    const goalCal = calculateGoalCalories(tdee, 'lose', 'normal');
    const days = calculateDaysToGoal(tdee, 'normal', 90, 85);

    // BMR should be ~1989
    expect(Math.round(bmr)).toBe(1989);
    // TDEE should be ~3083
    expect(Math.round(tdee)).toBe(3083);
    // Goal calories (20% deficit) should be ~2466
    expect(Math.round(goalCal)).toBe(2466);
    // ~63 days to lose 5kg
    expect(days).toBe(63);
  });
});
