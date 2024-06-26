const node = {
	env: { node: true },
	extends: "./index.js",
	plugins: ["node"],
	rules: {
		"node/callback-return": "off",
		"node/exports-style": ["error", "module.exports", {
			allowBatchAssign: false
		}],
		"node/file-extension-in-import": ["error", "never"],
		"node/global-require": "warn",
		"node/handle-callback-err": "off",
		"node/no-callback-literal": "off",
		"node/no-deprecated-api": "error",
		"node/no-exports-assign": "error",
		"node/no-extraneous-import": "error",
		"node/no-extraneous-require": "error",
		"node/no-missing-import": "error",
		"node/no-missing-require": "error",
		"node/no-mixed-requires": "off",
		"node/no-new-require": "error",
		"node/no-path-concat": "error",
		"node/no-process-env": "off",
		"node/no-process-exit": "off",
		"node/no-restricted-import": "off",
		"node/no-restricted-require": "off",
		"node/no-sync": ["warn", {
			allowAtRootLevel: true
		}],
		"node/no-unpublished-bin": "error",
		"node/no-unpublished-import": "error",
		"node/no-unpublished-require": "error",
		"node/no-unsupported-features/es-builtins": "error",
		"node/no-unsupported-features/es-syntax": "error",
		"node/no-unsupported-features/node-builtins": "error",
		"node/prefer-global/buffer": ["error", "always"],
		"node/prefer-global/console": ["error", "always"],
		"node/prefer-global/process": ["error", "always"],
		"node/prefer-global/text-decoder": ["error", "always"],
		"node/prefer-global/text-encoder": ["error", "always"],
		"node/prefer-global/url": ["error", "always"],
		"node/prefer-global/url-search-params": ["error", "always"],
		"node/prefer-promises/dns": "error",
		"node/prefer-promises/fs": "error",
		"node/process-exit-as-throw": "off",
		"node/shebang": "off"
	}
};

module.exports = node;
