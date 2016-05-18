# infinite-gallery-angular

Exposing [infinite-gallery](https://github.com/TeletronicsDotAe/infinite-gallery) as angular directive

## Usage

To use the component, essentially add a `<div tlt-infinite-gallery image-provider="xxx" fetch-ahead="xxx" column-width="xxx" min-image-width-height-to-display-it="xxx">`-tag to your angular-compiled HTML. For details on the values for the tag-attributes see the README for [infinite-gallery](https://github.com/TeletronicsDotAe/infinite-gallery). It is important that there is a global variable `angular` available, so that the component can successfully perform a `angular.module("tltInfiniteGallery", []).directive(...)`. Afterwards in your app.js you need to grap the installed module by `angular.module('myapp',[ ..., 'tltInfiniteGallery']);`.

See [demo](demo) for demonstrations of using the componenet

This component also comes as a ["raw" (none-angular) component](https://github.com/TeletronicsDotAe/infinite-gallery)

Bower
* Dependency: tlt.infinite-gallery-angular
* Use `bower info tlt.infinite-gallery-angular` to list available versions

NPM
* Dependency: @tlt/infinite-gallery-angular
* Use `npm view @tlt/infinite-gallery-angular` to list available versions

*Note* the npm releases currently do not work

Meteor
* See [atmospherejs.com](https://atmospherejs.com/tlt/infinite-gallery-angular)

