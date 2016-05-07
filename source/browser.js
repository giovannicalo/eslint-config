module.exports = {
	env: {
		browser: true,
		commonjs: true,
		jquery: true
	},
	extends: "./index.js",
	rules: {
		"import/no-nodejs-modules": 2,
		"no-console": 1
	}
};
