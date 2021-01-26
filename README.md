# Performance tests for the new Bonita Applications

This repository was created in order to execute performance tests on the new Bonita Applications.
It uses [playwright](https://github.com/microsoft/playwright), a library that lets you use the browser tools to get informations about the performance metrics, which can be found [here](https://web.dev/metrics/).

## Dependencies

This was coded using npm version 10.17.0. It is unknown if it works for other versions of npm. 
If you have a different version of npm, but still want to use 10.17.0, you can look into the [Node version manager](https://github.com/nvm-sh/nvm).
This tool will let you have multiple versions of npm installed in the same time, with the possibility to switch between different versions easily.

Don't forget to run ```npm install``` (or ```npm i```) to install the other dependencies required for this project.

## Launching the tests:
You can run ```npm test``` that will launch a firefox and a chromium browser with the performance tests. By default, it will use a platform that is on ```http://localhost:8080```.

To launch the tests with a specific endpoint, you can do ```npm test -- --urlPrefix=<your endpoint>```.

## The code

The typescript code is located in the src folder. The transpiled javascript code will be in a ```dist/``` directory at the root of the project after you run ```npm test``` at least once.

The main entry point for the tests is the ```src/testSuite.ts``` file. 
