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
    api.use("tlt:infinite-gallery@0.1.1");
    api.addFiles(["infinite.gallery.angular.js"], "client");
});
