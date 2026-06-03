import { type Page, expect } from '@playwright/test';
import { EXPECTED_VALUES } from '@/data/expected-values';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getCurrentUrl(): Promise<string> {
    return this.page.url();
  }

  async getPageTitle(): Promise<string> {
    const pageTitle = await this.page.title();
    return pageTitle;
  }

  async getExpectedPageTitle(): Promise<string> {
    const expectedPageTitle = EXPECTED_VALUES.homePage.title;
    return expectedPageTitle;
  }

  async goto(path = '/'): Promise<void> {
    await this.page.goto(path);
  }

  async checkPageTitle() {
    const pageTitle = await this.getPageTitle();
    const expectedPageTitle = await this.getExpectedPageTitle();
    expect(pageTitle).toBe(expectedPageTitle);
  }
}
