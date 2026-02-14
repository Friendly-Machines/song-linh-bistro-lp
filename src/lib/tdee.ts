export type Goal = 'lose' | 'gain' | 'maintain';
export type Gender = 'male' | 'female';
export type Rate = 'slow' | 'normal' | 'fast';

export const ACTIVITY_MULTIPLIERS = [1.2, 1.375, 1.55, 1.725, 1.9];
export const RATE_DEFICITS: Record<Rate, number> = { slow: 0.1, normal: 0.2, fast: 0.3 };

export function calculateBMR(gender: Gender, weight: number, height: number, age: number): number {
  if (gender === 'male') {
    return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  }
  return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
}

export function calculateTDEE(bmr: number, activityLevel: number): number {
  return bmr * ACTIVITY_MULTIPLIERS[activityLevel - 1];
}

export function calculateGoalCalories(
  tdee: number,
  goal: Goal,
  rate: Rate,
): number {
  if (goal === 'maintain') return tdee;
  const deficitPercent = RATE_DEFICITS[rate];
  const dailyDelta = tdee * deficitPercent;
  return goal === 'lose' ? tdee - dailyDelta : tdee + dailyDelta;
}

export function calculateDaysToGoal(
  tdee: number,
  rate: Rate,
  currentWeight: number,
  targetWeight: number,
): number {
  const weightDiff = Math.abs(targetWeight - currentWeight);
  if (weightDiff === 0) return 0;
  const dailyDelta = tdee * RATE_DEFICITS[rate];
  if (dailyDelta <= 0) return 0;
  const totalCals = weightDiff * 7700;
  return Math.ceil(totalCals / dailyDelta);
}
