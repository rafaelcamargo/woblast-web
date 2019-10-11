# Woblast
> An experimental project to get started with HG Brasil Finance API and ChartJS

[![CircleCI](https://circleci.com/gh/rafaelcamargo/woblast-web/tree/master.svg?style=svg)](https://circleci.com/gh/rafaelcamargo/woblast-web/tree/master)
[![codecov](https://codecov.io/gh/rafaelcamargo/woblast-web/branch/master/graph/badge.svg)](https://codecov.io/gh/rafaelcamargo/woblast-web)

## Contributing

1. Install [Node](https://nodejs.org/en/). Download the "Recommend for Most Users" version.

2. Clone the repo:
``` bash
git clone git@github.com:rafaelcamargo/woblast-web.git
```

3. Go to the project directory
``` bash
cd woblast-web
```

4. Install the project dependencies
``` bash
npm install
```

5. If you want just to build the project, run:
``` bash
npm run build
```

6. If you want to serve the application, run:
``` bash
npm run start
```

7. In order to consume API locally, use another terminal tab to run:
``` bash
npm run api
```

The app will be running on `http://localhost:9000`.

## Tests

1. Ensure that all code that you have added is covered with unit tests:
``` bash
npm run test
```

2. You can optionally generate coverage report after running tests:
``` bash
npm run test -- --coverage
```
