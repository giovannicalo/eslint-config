module.exports = {
	env: {
		browser: true,
		commonjs: true,
		jquery: true
	},
	extends: "./index.js",
	rules: {
		"no-console": 1,
		"no-restricted-imports": [2, "fs"],
		"no-restricted-modules": [2, "fs"]
	}
};
