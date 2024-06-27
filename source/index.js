const browser = require("./browser");
const jest = require("./jest");
const main = require("./main");
const node = require("./node");
const react = require("./react");
const scaffolding = require("./scaffolding");

const common = [
	{
		ignores: [
			"build",
			"coverage",
			"dist"
		]
	},
	main,
	scaffolding,
	jest
];

module.exports = common;

module.exports.browser = [...common, browser];

module.exports.node = [...common, node];

module.exports.react = [...common, browser, react];
