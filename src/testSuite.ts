import {LogIn} from "./logIn";
import {TestPageStart} from "./testPageStart";
import {firefox, chromium} from 'playwright';

const defaultUrlPrefix = 'http://localhost:8080';

let urlPrefix = process.argv.filter((val) => val.indexOf('--urlPrefix=') > -1)[0];
if (!urlPrefix) {
    urlPrefix = defaultUrlPrefix;
} else {
    urlPrefix = urlPrefix.substring(urlPrefix.indexOf('=')+1);
}

(async () => {
    try {
        const chromiumBrowser = await chromium.launch();
        const pageUserTaskListChromium = await chromiumBrowser.newPage();
        await pageUserTaskListChromium.goto(urlPrefix + '/bonita/apps/userApp/task-list/');
        LogIn.logIn(pageUserTaskListChromium, 'walter.bates', 'bpm');
        TestPageStart.testPageStart(pageUserTaskListChromium);

        const firefoxBrowser = await firefox.launch();
        const pageUserTaskListFirefox = await firefoxBrowser.newPage();
        await pageUserTaskListFirefox.goto(urlPrefix + '/bonita/apps/userApp/task-list/');

        LogIn.logIn(pageUserTaskListFirefox, 'walter.bates', 'bpm');
        TestPageStart.testPageStart(pageUserTaskListFirefox);

        await chromiumBrowser.close();
        await firefoxBrowser.close();
    } catch (error) {
        console.log('error', error);
        return ;
    }
})();

