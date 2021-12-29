# WeatherDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.0.

Deployed at(Work under progress): https://snehanjanchatterjee.github.io/Weather-Dashboard/

## To upload project

https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line

## Deployment to Github Pages

Process: https://angular.io/guide/deployment

## API

https://openweathermap.org/api

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

<!-- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. -->

Run `ng build --output-path docs --base-href /Weather-Dashboard/` in Command Prompt to build the project. The build artifacts will be stored in the `docs/` directory. Use the `--prod` flag for a production build.

When the build is complete, make a copy of docs/index.html and name it docs/404.html

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Dependencies

<ol>
    <li> Angular CLI v9.0.0 </li>
    <li> Bootstrap v5.1.0 </li>
    <li> Angular Material UI </li>
    <li> Font Awesome v4.7.0 </li>
    <li> Charts: https://xieziyu.github.io/ngx-echarts/#/welcome 
        <ul>
            <li>Installation:
                <ol>
                    <li>v4.9.0<code>npm install echarts@4 -S</code></li>
                    <li>v5.2.2<code>npm install ngx-echarts@5 -S</code></li>
                    <li><code>npm install resize-observer-polyfill -D</code></li>
                </ol>
            </li>
        </ul>
    </li>
    <li> Weather Icons: https://openweathermap.org/weather-conditions </li>
    <li> i18n-iso-countries
        <ul>
            <li>Installation: https://stackoverflow.com/questions/52600104/how-to-use-i18n-iso-countries-in-angular-6 </li>
        </ul>
    </li>
    <li> Animated Icons:
        <ul>
            <li>Lord Icon</li>
            <li>Installation: <code>npm install lord-icon-element lottie-web</code>
        </ul>
    </li>
    <li> Loading Spinner:
        <ul>
            <li>ngx-spinner@9.0.2</li>
            <li>Installation: <code>npm install ngx-spinner@9 --save</code>
            <li>Guide: https://www.npmjs.com/package/ngx-spinner
        </ul>
    </li>
    <li> Toast Messages:
        <ul>
            <li>ngx-toastr@12.1.0</li>
            <li>ngx-toastr@12.1.0 Installation: <code>npm install ngx-toastr@12.1.0 --save</code>
            <li>@angular/animations@9.0.7 Installation: <code>npm install @angular/animations --save</code>
            <li>Guide: https://www.npmjs.com/package/ngx-toastr/v/12.1.0
        </ul>
    </li>
    <li> dotenv
        <ul>
            <li><code>npm i -D yargs dotenv</code></li>
        </ul>
    </li>
</ol>
