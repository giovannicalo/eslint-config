module.exports = {
	env: { es6: true },
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			globalReturn: false,
			impliedStrict: true,
			jsx: false
		},
		ecmaVersion: 8,
		sourceType: "module"
	},
	plugins: ["babel", "import", "promise", "unicorn"],
	rules: {
		"accessor-pairs": [2, {
			getWithoutSet: false,
			setWithoutGet: true
		}],
		"array-bracket-spacing": [2, "never", {
			arraysInArrays: false,
			objectsInArrays: false,
			singleValue: false
		}],
		"array-callback-return": 2,
		"arrow-body-style": [2, "always"],
		"arrow-parens": [2, "always"],
		"arrow-spacing": [2, {
			after: true,
			before: true
		}],
		"babel/new-cap": 0,
		"babel/no-await-in-loop": 2,
		"babel/no-invalid-this": 2,
		"babel/object-curly-spacing": [2, "always", {
			arraysInObjects: true,
			objectsInObjects: true
		}],
		"block-scoped-var": 2,
		"block-spacing": [2, "always"],
		"brace-style": [2, "1tbs", { allowSingleLine: false }],
		"callback-return": 0,
		camelcase: [2, { properties: "always" }],
		"capitalized-comments": [2, "always", {
			ignoreConsecutiveComments: false,
			ignoreInlineComments: false
		}],
		"class-methods-use-this": 2,
		"comma-dangle": [2, "never"],
		"comma-spacing": [2, {
			after: true,
			before: false
		}],
		"comma-style": [2, "last", {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false
			}
		}],
		complexity: 0,
		"computed-property-spacing": [2, "never"],
		"consistent-return": [2, {
			treatUndefinedAsUnspecified: false
		}],
		"consistent-this": [2, "self"],
		"constructor-super": 2,
		curly: [2, "all"],
		"default-case": 0,
		"dot-location": [2, "property"],
		"dot-notation": [2, { allowKeywords: true }],
		"eol-last": [2, "always"],
		eqeqeq: [2, "always"],
		"func-call-spacing": [2, "never"],
		"func-name-matching": [2, "always", {
			includeCommonJSModuleExports: false
		}],
		"func-names": [2, "never"],
		"func-style": [1, "expression", {
			allowArrowFunctions: true
		}],
		"generator-star-spacing": [2, {
			after: true,
			before: true
		}],
		"global-require": 0,
		"guard-for-in": 1,
		"handle-callback-err": 0,
		"id-blacklist": 0,
		"id-length": [1, {
			max: 30,
			min: 1,
			properties: "always"
		}],
		"id-match": 0,
		"import/default": 2,
		"import/export": 2,
		"import/extensions": [2, "never"],
		"import/first": [2, "absolute-first"],
		"import/max-dependencies": 0,
		"import/named": 2,
		"import/namespace": [2, { allowComputed: true }],
		"import/newline-after-import": 2,
		"import/no-absolute-path": 2,
		"import/no-amd": 2,
		"import/no-commonjs": 0,
		"import/no-deprecated": 0,
		"import/no-duplicates": 2,
		"import/no-dynamic-require": 0,
		"import/no-extraneous-dependencies": [2, {
			devDependencies: true,
			optionalDependencies: true,
			peerDependencies: true
		}],
		"import/no-internal-modules": 0,
		"import/no-mutable-exports": 2,
		"import/no-named-as-default": 0,
		"import/no-named-as-default-member": 0,
		"import/no-named-default": 2,
		"import/no-namespace": 0,
		"import/no-nodejs-modules": 0,
		"import/no-restricted-paths": 0,
		"import/no-unassigned-import": 1,
		"import/no-unresolved": [2, {
			amd: false,
			caseSensitive: true,
			commonjs: true
		}],
		"import/no-webpack-loader-syntax": 2,
		"import/order": [2, {
			groups: [
				"builtin",
				"external",
				["index", "internal", "parent", "sibling"]
			],
			"newlines-between": "always"
		}],
		"import/prefer-default-export": 2,
		"import/unambiguous": 0,
		indent: [2, "tab", {
			ArrayExpression: 1,
			CallExpression: {
				arguments: 1
			},
			FunctionDeclaration: {
				body: 1,
				parameters: 1
			},
			FunctionExpression: {
				body: 1,
				parameters: 1
			},
			MemberExpression: 1,
			ObjectExpression: 1,
			SwitchCase: 1,
			VariableDeclarator: 0,
			outerIIFEBody: 1
		}],
		"init-declarations": [2, "always"],
		"jsx-quotes": [2, "prefer-double"],
		"key-spacing": [2, {
			afterColon: true,
			beforeColon: false,
			mode: "strict"
		}],
		"keyword-spacing": [2, {
			after: true,
			before: true
		}],
		"line-comment-position": 0,
		"linebreak-style": [2, "unix"],
		"lines-around-comment": 0,
		"lines-around-directive": 0,
		"max-depth": 0,
		"max-len": 0,
		"max-lines": 0,
		"max-nested-callbacks": 0,
		"max-params": 0,
		"max-statements": 0,
		"max-statements-per-line": [2, { max: 1 }],
		"multiline-ternary": [2, "never"],
		"new-cap": [2, {
			capIsNew: false,
			newIsCap: true,
			properties: true
		}],
		"new-parens": 2,
		"newline-after-var": 0,
		"newline-before-return": 0,
		"newline-per-chained-call": 0,
		"no-alert": 2,
		"no-array-constructor": 2,
		"no-await-in-loop": 2,
		"no-bitwise": 0,
		"no-caller": 2,
		"no-case-declarations": 2,
		"no-catch-shadow": 0,
		"no-class-assign": 2,
		"no-cond-assign": [2, "always"],
		"no-confusing-arrow": 0,
		"no-console": 0,
		"no-const-assign": 2,
		"no-constant-condition": [2, { checkLoops: true }],
		"no-continue": 0,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-delete-var": 2,
		"no-div-regex": 0,
		"no-dupe-args": 2,
		"no-dupe-class-members": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-duplicate-imports": [2, { includeExports: true }],
		"no-else-return": 0,
		"no-empty": [2, { allowEmptyCatch: false }],
		"no-empty-character-class": 2,
		"no-empty-function": 2,
		"no-empty-pattern": 2,
		"no-eq-null": 2,
		"no-eval": [2, { allowIndirect: false }],
		"no-ex-assign": 2,
		"no-extend-native": 2,
		"no-extra-bind": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-label": 2,
		"no-extra-parens": [2, "all", {
			conditionalAssign: true,
			nestedBinaryExpressions: true,
			returnAssign: true
		}],
		"no-extra-semi": 2,
		"no-fallthrough": 1,
		"no-floating-decimal": 2,
		"no-func-assign": 2,
		"no-global-assign": 2,
		"no-implicit-coercion": 0,
		"no-implicit-globals": 2,
		"no-implied-eval": 2,
		"no-inline-comments": 0,
		"no-inner-declarations": [2, "both"],
		"no-invalid-regexp": 2,
		"no-invalid-this": 0,
		"no-irregular-whitespace": [2, {
			skipComments: false,
			skipRegExps: false,
			skipStrings: false,
			skipTemplates: false
		}],
		"no-iterator": 2,
		"no-label-var": 2,
		"no-labels": [2, {
			allowLoop: false,
			allowSwitch: false
		}],
		"no-lone-blocks": 2,
		"no-lonely-if": 2,
		"no-loop-func": 2,
		"no-magic-numbers": 0,
		"no-mixed-operators": 0,
		"no-mixed-requires": 0,
		"no-mixed-spaces-and-tabs": 2,
		"no-multi-spaces": [2, {
			exceptions: { Property: false }
		}],
		"no-multi-str": 2,
		"no-multiple-empty-lines": [2, {
			max: 1,
			maxBOF: 0,
			maxEOF: 1
		}],
		"no-negated-condition": 0,
		"no-nested-ternary": 0,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-object": 2,
		"no-new-require": 2,
		"no-new-symbol": 2,
		"no-new-wrappers": 2,
		"no-obj-calls": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-param-reassign": [1, { props: true }],
		"no-path-concat": 2,
		"no-plusplus": 0,
		"no-process-env": 0,
		"no-process-exit": 0,
		"no-proto": 2,
		"no-prototype-builtins": 0,
		"no-redeclare": [2, { builtinGlobals: false }],
		"no-regex-spaces": 2,
		"no-restricted-globals": 0,
		"no-restricted-imports": 0,
		"no-restricted-modules": 0,
		"no-restricted-properties": 0,
		"no-restricted-syntax": 0,
		"no-return-assign": [2, "always"],
		"no-return-await": 2,
		"no-script-url": 2,
		"no-self-assign": [2, { props: true }],
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-shadow": 0,
		"no-shadow-restricted-names": 2,
		"no-sparse-arrays": 2,
		"no-sync": 0,
		"no-tabs": 0,
		"no-template-curly-in-string": 2,
		"no-ternary": 0,
		"no-this-before-super": 2,
		"no-throw-literal": 2,
		"no-trailing-spaces": [2, { skipBlankLines: false }],
		"no-undef": [2, { typeof: true }],
		"no-undef-init": 2,
		"no-undefined": 2,
		"no-underscore-dangle": 0,
		"no-unexpected-multiline": 2,
		"no-unmodified-loop-condition": 2,
		"no-unneeded-ternary": [2, { defaultAssignment: false }],
		"no-unreachable": 2,
		"no-unsafe-finally": 2,
		"no-unsafe-negation": 2,
		"no-unused-expressions": [2, {
			allowShortCircuit: true,
			allowTernary: true
		}],
		"no-unused-labels": 2,
		"no-unused-vars": [2, {
			args: "after-used",
			caughtErrors: "none",
			vars: "all"
		}],
		"no-use-before-define": [2, {
			classes: true,
			functions: false
		}],
		"no-useless-call": 2,
		"no-useless-computed-key": 2,
		"no-useless-concat": 2,
		"no-useless-constructor": 2,
		"no-useless-escape": 2,
		"no-useless-rename": [2, {
			ignoreDestructuring: false,
			ignoreExport: false,
			ignoreImport: false
		}],
		"no-useless-return": 2,
		"no-var": 1,
		"no-void": 0,
		"no-warning-comments": [1, {
			location: "start",
			terms: ["fixme", "todo"]
		}],
		"no-whitespace-before-property": 2,
		"no-with": 2,
		"object-curly-newline": 0,
		"object-curly-spacing": 0,
		"object-property-newline": [2, {
			allowMultiplePropertiesPerLine: true
		}],
		"object-shorthand": [2, "always", {
			avoidExplicitReturnArrows: true,
			avoidQuotes: false,
			ignoreConstructors: false
		}],
		"one-var": [2, "never"],
		"one-var-declaration-per-line": 0,
		"operator-assignment": [2, "always"],
		"operator-linebreak": [2, "none"],
		"padded-blocks": [2, {
			blocks: "never",
			classes: "always",
			switches: "never"
		}],
		"prefer-arrow-callback": [2, {
			allowNamedFunctions: false,
			allowUnboundThis: true
		}],
		"prefer-const": [2, {
			destructuring: "any",
			ignoreReadBeforeAssign: false
		}],
		"prefer-destructuring": [2, {
			array: true,
			object: true
		}, { enforceForRenamedProperties: true }],
		"prefer-numeric-literals": 2,
		"prefer-rest-params": 2,
		"prefer-spread": 2,
		"prefer-template": 2,
		"promise/always-return": 2,
		"promise/avoid-new": 0,
		"promise/catch-or-return": 2,
		"promise/no-callback-in-promise": 0,
		"promise/no-native": 0,
		"promise/no-nesting": 0,
		"promise/no-promise-in-callback": 0,
		"promise/no-return-wrap": 2,
		"promise/param-names": 2,
		"quote-props": [2, "as-needed"],
		quotes: [2, "double", { avoidEscape: false }],
		radix: [2, "as-needed"],
		"require-await": 2,
		"require-jsdoc": [1, {
			require: {
				ArrowFunctionExpression: true,
				ClassDeclaration: true,
				FunctionDeclaration: true,
				MethodDefinition: true
			}
		}],
		"require-yield": 2,
		"rest-spread-spacing": [2, "never"],
		semi: [2, "always"],
		"semi-spacing": [2, {
			after: true,
			before: false
		}],
		"sort-imports": 0,
		"sort-keys": [2, "asc", {
			caseSensitive: true,
			natural: true
		}],
		"sort-vars": [2, { ignoreCase: false }],
		"space-before-blocks": [2, "always"],
		"space-before-function-paren": [2, {
			anonymous: "never",
			asyncArrow: "always",
			named: "never"
		}],
		"space-in-parens": [2, "never"],
		"space-infix-ops": [2, { int32Hint: false }],
		"space-unary-ops": [2, {
			nonwords: false,
			words: true
		}],
		"spaced-comment": [2, "always"],
		strict: [2, "global"],
		"symbol-description": 2,
		"template-curly-spacing": [2, "never"],
		"unicode-bom": [2, "never"],
		"unicorn/catch-error-name": [2, { name: "error" }],
		"unicorn/explicit-length-check": 0,
		"unicorn/filename-case": [2, { case: "kebabCase" }],
		"unicorn/no-abusive-eslint-disable": 2,
		"unicorn/no-process-exit": 0,
		"unicorn/throw-new-error": 2,
		"use-isnan": 2,
		"valid-jsdoc": [2, {
			matchDescription: "[A-Z].*",
			prefer: {
				arg: "param",
				argument: "param",
				return: "returns"
			},
			preferType: {
				boolean: "Boolean",
				function: "Function",
				number: "Number",
				object: "Object",
				string: "String"
			},
			requireParamDescription: true,
			requireReturn: true,
			requireReturnDescription: true,
			requireReturnType: true
		}],
		"valid-typeof": [2, { requireStringLiterals: true }],
		"vars-on-top": 0,
		"wrap-iife": [2, "inside", { functionPrototypeMethods: true }],
		"wrap-regex": 0,
		"yield-star-spacing": [2, {
			after: true,
			before: true
		}],
		yoda: [2, "never", {
			exceptRange: false,
			onlyEquality: false
		}]
	}
};
