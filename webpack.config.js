const path = require('path');

module.exports = {
    mode: 'development', //production
    entry: {
        main: path.resolve(__dirname, 'assets/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        clean: true,
    },
}