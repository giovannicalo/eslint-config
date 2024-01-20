const jest = {
	env: { jest: true },
	files: ["*.spec.js"],
	rules: {
		"jest/consistent-test-it": [2, {
			fn: "it",
			withinDescribe: "it"
		}],
		"jest/expect-expect": [2, {
			assertFunctionNames: ["expect"]
		}],
		"jest/max-expects": 0,
		"jest/max-nested-describe": 0,
		"jest/no-alias-methods": 2,
		"jest/no-commented-out-tests": 2,
		"jest/no-conditional-expect": 2,
		"jest/no-conditional-in-test": 2,
		"jest/no-confusing-set-timeout": 2,
		"jest/no-deprecated-functions": 2,
		"jest/no-disabled-tests": 2,
		"jest/no-done-callback": 2,
		"jest/no-duplicate-hooks": 2,
		"jest/no-export": 2,
		"jest/no-focused-tests": 2,
		"jest/no-hooks": 0,
		"jest/no-identical-title": 2,
		"jest/no-interpolation-in-snapshots": 2,
		"jest/no-jasmine-globals": 2,
		"jest/no-large-snapshots": 0,
		"jest/no-mocks-import": 2,
		"jest/no-restricted-jest-methods": 0,
		"jest/no-restricted-matchers": 0,
		"jest/no-standalone-expect": [2, {
			additionalTestBlockFunctions: []
		}],
		"jest/no-test-prefixes": 2,
		"jest/no-test-return-statement": 2,
		"jest/no-untyped-mock-factory": 0,
		"jest/prefer-called-with": 2,
		"jest/prefer-comparison-matcher": 2,
		"jest/prefer-each": 2,
		"jest/prefer-equality-matcher": 2,
		"jest/prefer-expect-assertions": 0,
		"jest/prefer-expect-resolves": 2,
		"jest/prefer-hooks-in-order": 0,
		"jest/prefer-hooks-on-top": 2,
		"jest/prefer-lowercase-title": [2, {
			allowedPrefixes: [],
			ignore: ["describe"],
			ignoreTopLevelDescribe: true
		}],
		"jest/prefer-mock-promise-shorthand": 2,
		"jest/prefer-snapshot-hint": 0,
		"jest/prefer-spy-on": 2,
		"jest/prefer-strict-equal": 0,
		"jest/prefer-to-be": 2,
		"jest/prefer-to-contain": 2,
		"jest/prefer-to-have-length": 2,
		"jest/prefer-todo": 2,
		"jest/require-hook": [2, {
			allowedFunctionCalls: []
		}],
		"jest/require-to-throw-message": 2,
		"jest/require-top-level-describe": 0,
		"jest/unbound-method": 0,
		"jest/valid-describe-callback": 2,
		"jest/valid-expect": [2, {
			alwaysAwait: false,
			asyncMatchers: [],
			maxArgs: 1,
			minArgs: 1
		}],
		"jest/valid-expect-in-promise": 2,
		"jest/valid-title": [2, {
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
