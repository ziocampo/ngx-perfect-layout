# NgxPerfectLayout

The perfect layout for your Angular app: responsiveness, eye candy and many other features.

## Why?

Because in each project based on the Angular framework I was copy/pasting the wheel, changing small details every time. Elder projects would not benefit from the enhancements made in new ones. A general frustration arose.

## Features

### Developer friendly

Just import the module in your app.module.ts

```typescript
import { NgxPerfectLayoutModule } from '@ziocampo/ngx-perfect-layout';

imports: [
    NgxPerfectLayoutModule,
]
```

Then use the component in any page you want:

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

🔥 You could even use it on the app.component.tml itself, putting the ```router-outlet``` inside the ```ngx-perfect-page-content```.

```html
<ngx-perfect-main-layout>
    <ngx-perfect-page-content>
        <router-outlet></router-outlet>
    </ngx-perfect-page-content>
    <ngx-perfect-page-footer>
        This is the footer content
    </ngx-perfect-page-footer>
</ngx-perfect-main-layout>
```

### A decent layout, optimized for responsiveness

Layout automatically adapts to many resolutions, from large panels to small ones.

Snap points are the ones that come with the [@angular/flex-layout](https://www.npmjs.com/package/@angular/flex-layout) package.

![Layout image 1](images/layout1.png "Layout image 1")

![Layout image 2](images/layout2.png "Layout image 2")

### A nice "wait" animation

Just by toggling a bool option you can display a nice wait animation.

```html
[showWaitingAnimation]="true"
```

![Wait animation image 1](images/wait1.png "Wait animation image 1")

### Support for your own themes or for the standard ones

NgxPerfectLayout supports standard Angular themes (Indigo Pink etc.) as well as custom ones you can craft manually or at [Material Theme Generator](https://materialtheme.arcsine.dev/)

To provide a list of custom themes just import them as usual in your ```styles.scss``` and declare a list of ```Theme``` objects:

```typescript
import { Theme } from '@ziocampo/ngx-perfect-layout';

public themes: Theme[] = [{
    displayName: "Blue tango",
    name: "blue-tango-theme"
}, {
    displayName: "Coffee",
    name: "coffee-theme"
}, {
    displayName: "Relax",
    name: "relax-theme"
}];
```

then assign it to the ```themes``` parameter:

```html
[themes]="themes"
```

The themes will be displayed in a ```mat-select``` within the app drawer and applied upon the ```(selectionChange)```.

![With standard theme image 1](images/themes-menu1.png "With standard theme image 1")

### Menu from angular routes, the easy way

When you define your routes, just add a ```data``` element of type ```RouteData```

```typescript
import { RouteData } from '@ziocampo/ngx-perfect-layout';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home", 
    component: HomePageComponent,
    data:{
      displayName: "Home",
      iconClass: "la-home"
    } as RouteData
  },
  {
    path: "no-options", 
    component: NoOptionsPageComponent,
    data:{
      displayName: "No options",
      iconClass: "la-broom"
    } as RouteData
  }
];

```

then pass your routes to the ```menu``` parameter. Routes containing a ```RouteData``` element with a ```displayName``` will be shown as navigation.

## Options

| Option                 | Meaning                                                                                                   | Type    | Default value |
|------------------------|-----------------------------------------------------------------------------------------------------------|---------|---------------|
| title                  | The title of the page. If provided the page will display an H1 tag with the title.                        | string  | undefined     |
| routes                 | A Routes object.                                                                                          | Routes  | undefined     |
| themes                 | An array of Theme objects. If provided there will be a select in the drawer to allow switching the theme. | Theme[] | []            |
| showWaitingAnimation   | If set to true a nice wait animation will be shown.                                                       | boolean | false         |
| useBackgroundAnimation | If set to true a nice animated background will be shown on the drawer.                                    | boolean | false         |
