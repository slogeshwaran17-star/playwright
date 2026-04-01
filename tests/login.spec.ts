import { test, expect } from '@playwright/test';
import { login } from './helper';

test.describe('Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

  test('Valid login redirects to dashboard', async ({ page }) => {
    await login(page, 'student', 'Password123');
    await expect(page).toHaveURL(/logged-in-successfully/);
  });
  test('Invalid username', async ({ page }) => {
    await login(page, 'sgtfudent', 'Password123');
    await expect(page.locator('#error')).toHaveText("Your username is invalid!");

  });  
  });