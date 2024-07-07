const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const fs = require("fs");
const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'tsconfig.paths.json'), 'utf8'));

const aliases = Object.entries(json.compilerOptions.paths).reduce((acc, [key, value]) => {
    const aliasKey = key.replace('/*', '');
    acc[aliasKey] = path.resolve(__dirname, value[0].replace('/*', ''));
    return acc;
}, {});

module.exports = override(
    addWebpackAlias(aliases)
);
