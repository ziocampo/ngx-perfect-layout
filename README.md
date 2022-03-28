# NgxPerfectLayout

The perfect layout for your Angular app: responsiveness, eye candy and many other features.

## Why?

Because in each project based on the Angular framework I was copy/pasting the wheel, changing small details every time. Elder projects would not benefit from the enhancements made in new ones. A general frustration arose.

## Features

### Developer friendly

Just import the module in the app.module.ts

```typescript
import { NgxPerfectLayoutModule } from '@ziocampo/ngx-perfect-layout';

imports: [
    NgxPerfectLayoutModule,
]
```

Then use the component in any page you want

```html
<ngx-perfect-main-layout>
    <ngx-perfect-page-content>
        This is the page content.
    </ngx-perfect-page-content>
    <ngx-perfect-page-footer>
        This is the footer content
    </ngx-perfect-page-footer>
</ngx-perfect-main-layout>
```

For more details refer to the showcase project.

### A good layout, optimized for responsiveness



### A nice "wait" indicato
### Support for your own themes

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
