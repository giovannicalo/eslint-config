module.exports = {
	env: { browser: true },
	extends: "./index.js",
	overrides: [{
		env: { node: true },
		files: ["webpack.config.js"]
	}],
	rules: {
		"import/no-nodejs-modules": 2,
		"no-console": 1
	}
};
