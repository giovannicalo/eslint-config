const jest = {
	env: { jest: true },
	files: ["*.spec.js"],
	rules: {
		"jest/consistent-test-it": ["error", {
			fn: "it",
			withinDescribe: "it"
		}],
		"jest/expect-expect": ["error", {
			assertFunctionNames: ["expect"]
		}],
		"jest/max-expects": "off",
		"jest/max-nested-describe": "off",
		"jest/no-alias-methods": "error",
		"jest/no-commented-out-tests": "error",
		"jest/no-conditional-expect": "error",
		"jest/no-conditional-in-test": "error",
		"jest/no-confusing-set-timeout": "error",
		"jest/no-deprecated-functions": "error",
		"jest/no-disabled-tests": "error",
		"jest/no-done-callback": "error",
		"jest/no-duplicate-hooks": "error",
		"jest/no-export": "error",
		"jest/no-focused-tests": "error",
		"jest/no-hooks": "off",
		"jest/no-identical-title": "error",
		"jest/no-interpolation-in-snapshots": "error",
		"jest/no-jasmine-globals": "error",
		"jest/no-large-snapshots": "off",
		"jest/no-mocks-import": "error",
		"jest/no-restricted-jest-methods": "off",
		"jest/no-restricted-matchers": "off",
		"jest/no-standalone-expect": ["error", {
			additionalTestBlockFunctions: []
		}],
		"jest/no-test-prefixes": "error",
		"jest/no-test-return-statement": "error",
		"jest/no-untyped-mock-factory": "off",
		"jest/prefer-called-with": "error",
		"jest/prefer-comparison-matcher": "error",
		"jest/prefer-each": "error",
		"jest/prefer-equality-matcher": "error",
		"jest/prefer-expect-assertions": "off",
		"jest/prefer-expect-resolves": "error",
		"jest/prefer-hooks-in-order": "off",
		"jest/prefer-hooks-on-top": "error",
		"jest/prefer-lowercase-title": ["error", {
			allowedPrefixes: [],
			ignore: ["describe"],
			ignoreTopLevelDescribe: true
		}],
		"jest/prefer-mock-promise-shorthand": "error",
		"jest/prefer-snapshot-hint": "off",
		"jest/prefer-spy-on": "error",
		"jest/prefer-strict-equal": "off",
		"jest/prefer-to-be": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-todo": "error",
		"jest/require-hook": ["error", {
			allowedFunctionCalls: []
		}],
		"jest/require-to-throw-message": "error",
		"jest/require-top-level-describe": "off",
		"jest/unbound-method": "off",
		"jest/valid-describe-callback": "error",
		"jest/valid-expect": ["error", {
			alwaysAwait: false,
			asyncMatchers: [],
			maxArgs: 1,
			minArgs: 1
		}],
		"jest/valid-expect-in-promise": "error",
		"jest/valid-title": ["error", {
			disallowedWords: [],
			ignoreSpaces: false,
			ignoreTypeOfDescribeName: false,
			mustMatch: {
				it: "^should"
			},
			mustNotMatch: {}
		}]
	}
};

module.exports = jest;
