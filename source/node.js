const node = {
	env: { node: true },
	extends: "./index.js",
	plugins: ["node"],
	rules: {
		"node/callback-return": 0,
		"node/exports-style": [2, "module.exports", {
			allowBatchAssign: false
		}],
		"node/file-extension-in-import": [2, "never"],
		"node/global-require": 1,
		"node/handle-callback-err": 0,
		"node/no-callback-literal": 0,
		"node/no-deprecated-api": 2,
		"node/no-exports-assign": 2,
		"node/no-extraneous-import": 2,
		"node/no-extraneous-require": 2,
		"node/no-missing-import": 2,
		"node/no-missing-require": 2,
		"node/no-mixed-requires": 0,
		"node/no-new-require": 2,
		"node/no-path-concat": 2,
		"node/no-process-env": 0,
		"node/no-process-exit": 0,
		"node/no-restricted-import": 0,
		"node/no-restricted-require": 0,
		"node/no-sync": [1, {
			allowAtRootLevel: true
		}],
		"node/no-unpublished-bin": 2,
		"node/no-unpublished-import": 2,
		"node/no-unpublished-require": 2,
		"node/no-unsupported-features/es-builtins": 2,
		"node/no-unsupported-features/es-syntax": 2,
		"node/no-unsupported-features/node-builtins": 2,
		"node/prefer-global/buffer": [2, "always"],
		"node/prefer-global/console": [2, "always"],
		"node/prefer-global/process": [2, "always"],
		"node/prefer-global/text-decoder": [2, "always"],
		"node/prefer-global/text-encoder": [2, "always"],
		"node/prefer-global/url": [2, "always"],
		"node/prefer-global/url-search-params": [2, "always"],
		"node/prefer-promises/dns": 2,
		"node/prefer-promises/fs": 2,
		"node/process-exit-as-throw": 0,
		"node/shebang": 0
	}
};

module.exports = node;
