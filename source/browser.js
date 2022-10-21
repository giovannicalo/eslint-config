const browser = {
	env: { browser: true },
	extends: "./index.js",
	overrides: [{
		env: { node: true },
		files: ["scripts/**/*.js", "webpack.config.js"]
	}],
	rules: {
		"import/no-nodejs-modules": 2,
		"no-console": 1
	}
};

module.exports = browser;
