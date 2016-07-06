SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "src/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "app": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "bootstrap": "github:twbs/bootstrap@4.0.0-alpha.2"
  },
  packages: {
    "github:twbs/bootstrap@4.0.0-alpha.2": {
      "map": {
        "jquery": "npm:jquery@2.2.4",
        "tether": "github:HubSpot/tether@1.3.2"
      }
    }
  }
});
