var jam = {
    "packages": [
        {
            "name": "jquery",
            "location": "javascripts/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jquery-ui",
            "location": "javascripts/jquery-ui",
            "main": "dist/jquery-ui.min.js"
        },
        {
            "name": "sammy",
            "location": "javascripts/sammy",
            "main": "sammy.js"
        }
    ],
    "version": "0.2.17",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "jquery",
            "location": "javascripts/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jquery-ui",
            "location": "javascripts/jquery-ui",
            "main": "dist/jquery-ui.min.js"
        },
        {
            "name": "sammy",
            "location": "javascripts/sammy",
            "main": "sammy.js"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "jquery",
            "location": "javascripts/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "jquery-ui",
            "location": "javascripts/jquery-ui",
            "main": "dist/jquery-ui.min.js"
        },
        {
            "name": "sammy",
            "location": "javascripts/sammy",
            "main": "sammy.js"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}