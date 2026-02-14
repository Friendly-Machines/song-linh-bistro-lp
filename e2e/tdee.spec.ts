import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('#tdee').scrollIntoViewIfNeeded();
});

test('calculates TDEE with default values and shows results', async ({ page }) => {
  // Defaults: 25yo male, 170cm, 70kg, activity 3, weight goal 5, normal rate
  // Need to set a valid weight goal (lower than 70 for "lose fat" default)
  const weightGoalInput = page.locator('#tdee input[inputmode="numeric"]').last();
  await weightGoalInput.click();
  await weightGoalInput.fill('65');
  await weightGoalInput.blur();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();

  // Results should be visible
  await expect(page.getByText('EAT THIS MANY CALORIES PER DAY')).toBeVisible();
  await expect(page.getByText('YOU BURN', { exact: true })).toBeVisible();
  await expect(page.getByText('AT REST YOU BURN')).toBeVisible();
  await expect(page.getByText('Estimated time to lose')).toBeVisible();
});

test('shows validation error when weight goal contradicts lose fat goal', async ({ page }) => {
  // Default goal is "Lose fat", default weight is 70
  // Set weight goal to 80 (higher than current = invalid for losing)
  const weightGoalInput = page.locator('#tdee input[inputmode="numeric"]').last();
  await weightGoalInput.click();
  await weightGoalInput.fill('80');
  await weightGoalInput.blur();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();

  await expect(page.getByText('Target weight must be less than your current weight to lose fat')).toBeVisible();
  // Should NOT show results
  await expect(page.getByText('EAT THIS MANY CALORIES PER DAY')).not.toBeVisible();
});

test('shows validation error when weight goal contradicts gain muscle goal', async ({ page }) => {
  // Switch to "Gain muscle"
  await page.locator('#tdee').getByText('Lose fat').click();
  await page.getByText('Gain muscle').click();

  // Default weight is 70, set target to 60 (lower = invalid for gaining)
  const weightGoalInput = page.locator('#tdee input[inputmode="numeric"]').last();
  await weightGoalInput.click();
  await weightGoalInput.fill('60');
  await weightGoalInput.blur();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();

  await expect(page.getByText('Target weight must be greater than your current weight to gain muscle')).toBeVisible();
});

test('validation error clears when user changes goal', async ({ page }) => {
  // Trigger the lose error first
  const weightGoalInput = page.locator('#tdee input[inputmode="numeric"]').last();
  await weightGoalInput.click();
  await weightGoalInput.fill('80');
  await weightGoalInput.blur();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();
  await expect(page.getByText('Target weight must be less than your current weight')).toBeVisible();

  // Change goal to "Gain muscle" — error should clear
  await page.getByRole('button', { name: 'Lose fat' }).click();
  await page.getByText('Gain muscle').click();

  await expect(page.getByText('Target weight must be less than your current weight')).not.toBeVisible();
});

test('recalculate button goes back to input form', async ({ page }) => {
  const weightGoalInput = page.locator('#tdee input[inputmode="numeric"]').last();
  await weightGoalInput.click();
  await weightGoalInput.fill('65');
  await weightGoalInput.blur();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();
  await expect(page.getByText('EAT THIS MANY CALORIES PER DAY')).toBeVisible();

  await page.getByText('Recalculate').click();
  await expect(page.getByText('CALCULATE TDEE NOW')).toBeVisible();
});

test('maintain goal hides weight goal field and skips timeline', async ({ page }) => {
  // Switch to "Maintain"
  await page.locator('#tdee').getByText('Lose fat').click();
  await page.getByText('Maintain').click();

  // Weight goal and rate fields should not be visible
  await expect(page.getByText('WEIGHT GOAL')).not.toBeVisible();
  await expect(page.getByText('RATE OF CHANGE')).not.toBeVisible();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();

  // Results visible but no timeline
  await expect(page.getByText('EAT THIS MANY CALORIES PER DAY')).toBeVisible();
  await expect(page.getByText('Estimated time to lose')).not.toBeVisible();
  await expect(page.getByText('Estimated time to gain')).not.toBeVisible();
});

test('verifies calorie numbers for a known input', async ({ page }) => {
  // Set up: 34yo male, 185cm, 85kg, activity 4, goal lose to 80kg, fast rate
  // Expected: BMR=1922, TDEE=3315, goal cal=2321

  const ageInput = page.locator('#tdee-age');
  await ageInput.click();
  await ageInput.fill('34');
  await ageInput.blur();

  const heightInput = page.locator('#tdee-height');
  await heightInput.click();
  await heightInput.fill('185');
  await heightInput.blur();

  const weightInput = page.locator('#tdee-weight');
  await weightInput.click();
  await weightInput.fill('85');
  await weightInput.blur();

  // Activity level 4
  await page.locator('#tdee button').filter({ hasText: '4' }).click();

  // Weight goal: 80
  const weightGoalInput = page.locator('#tdee input[inputmode="numeric"]').last();
  await weightGoalInput.click();
  await weightGoalInput.fill('80');
  await weightGoalInput.blur();

  // Rate: Fast
  await page.getByText('Normal').click();
  await page.getByRole('button', { name: 'Fast' }).click();

  await page.getByRole('button', { name: 'CALCULATE TDEE NOW' }).click();

  // Verify the key numbers
  await expect(page.getByText('2321')).toBeVisible();
  await expect(page.getByText('3315')).toBeVisible();
  await expect(page.getByText('1922')).toBeVisible();
});
