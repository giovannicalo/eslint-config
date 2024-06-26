const browser = {
	env: { browser: true },
	extends: "./index.js",
	overrides: [{
		env: { node: true },
		files: ["scripts/**/*.js", "webpack.config.js"]
	}],
	rules: {
		"import/no-nodejs-modules": "error",
		"no-console": "warn"
	}
};

module.exports = browser;
