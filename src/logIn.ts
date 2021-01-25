import {Page} from "playwright";

class LogIn {
    static logIn(page: Page, userName: string, password: string): void {
        (async () => {
            await page.fill('#username', userName);
            await page.fill('#password', password);
            await page.click('input[type="submit"]');
        })();
    }
}

export {LogIn};

