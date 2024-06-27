const plugin = require("eslint-plugin-n");
const { node: globals } = require("globals");

const node = {
	languageOptions: { globals },
	name: "giovanni/node",
	plugins: { n: plugin },
	rules: {
		"n/callback-return": "off",
		"n/exports-style": ["error", "module.exports", {
			allowBatchAssign: false
		}],
		"n/file-extension-in-import": ["error", "never", {}],
		"n/global-require": "error",
		"n/handle-callback-err": "off",
		"n/hashbang": "off",
		"n/no-callback-literal": "off",
		"n/no-deprecated-api": "error",
		"n/no-exports-assign": "error",
		"n/no-extraneous-import": "error",
		"n/no-extraneous-require": "error",
		"n/no-missing-import": "error",
		"n/no-missing-require": "error",
		"n/no-mixed-requires": "off",
		"n/no-new-require": "error",
		"n/no-path-concat": "error",
		"n/no-process-env": "off",
		"n/no-process-exit": "off",
		"n/no-restricted-import": "off",
		"n/no-restricted-require": "off",
		"n/no-sync": "off",
		"n/no-unpublished-bin": "error",
		"n/no-unpublished-import": "error",
		"n/no-unpublished-require": "error",
		"n/no-unsupported-features/es-builtins": "error",
		"n/no-unsupported-features/es-syntax": "error",
		"n/no-unsupported-features/node-builtins": "error",
		"n/prefer-global/buffer": ["error", "always"],
		"n/prefer-global/console": ["error", "always"],
		"n/prefer-global/process": ["error", "always"],
		"n/prefer-global/text-decoder": ["error", "always"],
		"n/prefer-global/text-encoder": ["error", "always"],
		"n/prefer-global/url": ["error", "always"],
		"n/prefer-global/url-search-params": ["error", "always"],
		"n/prefer-node-protocol": "off",
		"n/prefer-promises/dns": "error",
		"n/prefer-promises/fs": "error",
		"n/process-exit-as-throw": "off"
	}
};

module.exports = node;
