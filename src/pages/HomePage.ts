import { Page } from '@playwright/test'; 

export class homePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}