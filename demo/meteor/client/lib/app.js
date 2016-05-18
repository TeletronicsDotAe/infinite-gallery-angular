angular.module('demo',[
  'angular-meteor',
  'tltInfiniteGallery'
]);

function onReady() {
  angular.bootstrap(document, ['demo']);
}

angular.element(document).ready(onReady);

