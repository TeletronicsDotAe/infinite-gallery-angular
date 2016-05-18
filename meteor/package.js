"use strict";

var description = getFromPackageJson(description)
					.replace("@tlt/", "tlt:");
if (description.length > 100) description = description.substring(0, 100);

Package.describe({
    name: "tlt:infinite-gallery-angular",
    version: getFromPackageJson(version),
    summary: description,
    git: getFromPackageJson(repository.url)
});

Package.onUse(function(api) {
    api.versionsFrom("1.2.0.2");
    api.use("angular@1.0.9");
    api.use("tlt:infinite-gallery@0.3.0");
    api.addFiles(["dist/infinite.gallery.angular.js"], "client");
});
