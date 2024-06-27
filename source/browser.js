const { browser: globals } = require("globals");

const scaffoldingFiles = require("./scaffolding-files");

const browser = {
	ignores: scaffoldingFiles,
	languageOptions: { globals },
	rules: {
		"import/no-nodejs-modules": "error",
		"no-console": "warn"
	}
};

module.exports = browser;
