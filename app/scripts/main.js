(function (requirejs) {
    "use strict";

    // -- DEV RequireJS config --
    requirejs.config({
        // Packages = top-level folders; loads a contained file named "main.js"
        baseUrl: "scripts",
        packages: ["controllers"],
        shim: {
            "jquery": { "exports": "$" },
            "angular": {
                exports: "angular"
            },
            "angular-resource": {
                deps: ["angular"]
            },
            "angular-cookies": {
                deps: ["angular"]
            },
            "angular-route": {
                deps: ["angular"]
            },
            "angular-sanitize": {
                deps: ["angular"]
            },
            "bootstrap": {
                deps: ["jquery"]
            }
        },
        paths: {
            "jquery": "/bower_components/jquery/jquery",
            "angular": "/bower_components/angular/angular",
            "angular-cookies": "/bower_components/angular-cookies/angular-cookies",
            "angular-resource": "/bower_components/angular-resource/angular-resource",
            "angular-route": "/bower_components/angular-route/angular-route",
            "angular-sanitize": "/bower_components/angular-sanitize/angular-sanitize",
            "bootstrap": "/bower_components/sass-bootstrap/dist/js/bootstrap"
        },
        name: "main"
    });

    requirejs.onError = function (err) {
        console.log(err);
    };

    // Load the app. This is kept minimal so it doesn't need much updating.
    require(["angular", "angular-cookies", "angular-route","angular-resource", "angular-sanitize", "jquery", "bootstrap", "./app"], function (angular) {
        angular.bootstrap(document, ["score-app"]);
    });
})(requirejs);
