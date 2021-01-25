import {LogIn} from "./logIn";
import {TestPageStart} from "./testPageStart";
import { firefox, chromium } from 'playwright';

(async () => {
    const chromiumBrowser = await chromium.launch();
    const pageUserTaskListChromium = await chromiumBrowser.newPage();
    await pageUserTaskListChromium.goto('http://localhost:8080/bonita/apps/userApp/task-list/');
    LogIn.logIn(pageUserTaskListChromium, 'walter.bates', 'bpm');
    TestPageStart.testPageStart(pageUserTaskListChromium);

    const firefoxBrowser = await firefox.launch();
    const pageUserTaskListFirefox = await firefoxBrowser.newPage();
    await pageUserTaskListFirefox.goto('http://localhost:8080/bonita/apps/userApp/task-list/');

    LogIn.logIn(pageUserTaskListFirefox, 'walter.bates', 'bpm');
    TestPageStart.testPageStart(pageUserTaskListFirefox);

    await chromiumBrowser.close();
    await firefoxBrowser.close();
})();

