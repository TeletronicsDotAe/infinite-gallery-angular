"use strict";

(function() {
    angular
        .module("tltInfiniteGallery", [])
        .directive("tltInfiniteGallery", ["tltInfiniteGalleryConfig", directive])
        .provider("tltInfiniteGalleryConfig", config);

    function directive(config) {
        return {
            restrict: 'A',
            scope: {
                imageProvider: "=imageProvider",
                fetchAhead: "=fetchAhead",
                columnWidth: "=columnWidth",
                minImageWidthHeightToDisplayIt: "=minImageWidthHeightToDisplayIt"
            },
            link: function(scope, element) {
                var tltInfiniteGallery = new TLTInfiniteGallery(element, scope.imageProvider, scope.fetchAhead, scope.columnWidth, scope.minImageWidthHeightToDisplayIt);
            }
        }
    }

    function config() {
        this.$get = function() {
            return {}
        };
    };

})();
