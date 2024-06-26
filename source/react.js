const react = {
	extends: "./index.js",
	parserOptions: {
		ecmaFeatures: { jsx: true }
	},
	plugins: ["react", "react-hooks"],
	rules: {
		"react/boolean-prop-naming": "error",
		"react/button-has-type": ["error", {
			button: true,
			reset: true,
			submit: true
		}],
		"react/default-props-match-prop-types": ["error", {
			allowRequiredDefaults: false
		}],
		"react/destructuring-assignment": "off",
		"react/display-name": "off",
		"react/forbid-component-props": "off",
		"react/forbid-dom-props": "off",
		"react/forbid-elements": "off",
		"react/forbid-foreign-prop-types": "off",
		"react/forbid-prop-types": "off",
		"react/function-component-definition": ["error", {
			namedComponents: "arrow-function",
			unnamedComponents: "arrow-function"
		}],
		"react/hook-use-state": "off",
		"react/iframe-missing-sandbox": "error",
		"react/jsx-boolean-value": ["error", "always"],
		"react/jsx-child-element-spacing": "off",
		"react/jsx-closing-bracket-location": "off",
		"react/jsx-closing-tag-location": "off",
		"react/jsx-curly-brace-presence": ["error", {
			children: "ignore",
			propElementValues: "always",
			props: "never"
		}],
		"react/jsx-curly-newline": ["error", "never"],
		"react/jsx-curly-spacing": ["error", {
			allowMultiline: false,
			attributes: true,
			children: true,
			spacing: { objectLiterals: "never" },
			when: "never"
		}],
		"react/jsx-equals-spacing": ["error", "never"],
		"react/jsx-filename-extension": ["error", {
			allow: "always",
			extensions: [".js"]
		}],
		"react/jsx-first-prop-new-line": "off",
		"react/jsx-fragments": ["error", "element"],
		"react/jsx-handler-names": "off",
		"react/jsx-indent": ["error", "tab", { checkAttributes: true }],
		"react/jsx-indent-props": ["error", {
			ignoreTernaryOperator: true,
			indentMode: "tab"
		}],
		"react/jsx-key": ["error", {
			checkFragmentShorthand: true,
			checkKeyMustBeforeSpread: false,
			warnOnDuplicates: true
		}],
		"react/jsx-max-depth": "off",
		"react/jsx-max-props-per-line": "off",
		"react/jsx-newline": ["error", {
			allowMultilines: false,
			prevent: true
		}],
		"react/jsx-no-bind": ["error", {
			allowArrowFunctions: false,
			allowBind: false,
			allowFunctions: false,
			ignoreDOMComponents: false,
			ignoreRefs: false
		}],
		"react/jsx-no-comment-textnodes": "error",
		"react/jsx-no-constructed-context-values": "error",
		"react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
		"react/jsx-no-leaked-render": ["error", {
			validStrategies: ["coerce"]
		}],
		"react/jsx-no-literals": ["error", {
			ignoreProps: false,
			noAttributeStrings: false,
			noStrings: false
		}],
		"react/jsx-no-script-url": "error",
		"react/jsx-no-target-blank": ["error", {
			allowReferrer: false,
			enforceDynamicLinks: "always",
			forms: true,
			links: true,
			warnOnSpreadAttributes: false
		}],
		"react/jsx-no-undef": "error",
		"react/jsx-no-useless-fragment": ["error", {
			allowExpressions: false
		}],
		"react/jsx-one-expression-per-line": ["error", { allow: "none" }],
		"react/jsx-pascal-case": ["error", {
			allowAllCaps: false,
			allowLeadingUnderscore: false,
			allowNamespace: false,
			ignore: []
		}],
		"react/jsx-props-no-multi-spaces": "error",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-sort-props": ["error", {
			callbacksLast: false,
			ignoreCase: false,
			locale: "auto",
			multiline: "ignore",
			noSortAlphabetically: false,
			reservedFirst: false,
			shorthandFirst: false,
			shorthandLast: false
		}],
		"react/jsx-tag-spacing": ["error", {
			afterOpening: "never",
			beforeClosing: "never",
			beforeSelfClosing: "always",
			closingSlash: "never"
		}],
		"react/jsx-uses-react": "off",
		"react/jsx-uses-vars": "error",
		"react/jsx-wrap-multilines": "off",
		"react/no-access-state-in-setstate": "error",
		"react/no-adjacent-inline-elements": "error",
		"react/no-array-index-key": "off",
		"react/no-arrow-function-lifecycle": "error",
		"react/no-children-prop": ["error", {
			allowFunctions: false
		}],
		"react/no-danger": "off",
		"react/no-danger-with-children": "error",
		"react/no-deprecated": "error",
		"react/no-did-mount-set-state": "error",
		"react/no-did-update-set-state": "error",
		"react/no-direct-mutation-state": "error",
		"react/no-find-dom-node": "error",
		"react/no-invalid-html-attribute": "error",
		"react/no-is-mounted": "error",
		"react/no-multi-comp": ["error", { ignoreStateless: false }],
		"react/no-namespace": "error",
		"react/no-object-type-as-default-prop": "error",
		"react/no-redundant-should-component-update": "error",
		"react/no-render-return-value": "error",
		"react/no-set-state": "off",
		"react/no-string-refs": "error",
		"react/no-this-in-sfc": "error",
		"react/no-typos": "error",
		"react/no-unescaped-entities": "error",
		"react/no-unknown-property": "error",
		"react/no-unsafe": "error",
		"react/no-unstable-nested-components": ["error", {
			allowAsProps: false
		}],
		"react/no-unused-class-component-methods": "error",
		"react/no-unused-prop-types": ["error", {
			customValidators: [],
			ignore: [],
			skipShapeProps: true
		}],
		"react/no-unused-state": "error",
		"react/no-will-update-set-state": "error",
		"react/prefer-es6-class": ["error", "always"],
		"react/prefer-exact-props": "off",
		"react/prefer-read-only-props": "off",
		"react/prefer-stateless-function": "off",
		"react/prop-types": ["error", {
			customValidators: [],
			ignore: [],
			skipUndeclared: true
		}],
		"react/react-in-jsx-scope": "off",
		"react/require-default-props": ["error", {
			classes: "defaultProps",
			forbidDefaultForRequired: true,
			functions: "ignore"
		}],
		"react/require-optimization": "off",
		"react/require-render-return": "error",
		"react/self-closing-comp": ["error", {
			component: true,
			html: true
		}],
		"react/sort-comp": ["error", {
			groups: {
				rendering: ["/^render.+$/", "render"]
			},
			order: [
				"static-variables",
				"instance-variables",
				"lifecycle",
				"everything-else",
				"rendering"
			]
		}],
		"react/sort-default-props": ["error", { ignoreCase: false }],
		"react/sort-prop-types": ["error", {
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
			sortShapeProp: true
		}],
		"react/state-in-constructor": ["error", "never"],
		"react/static-property-placement": ["error", "static public field"],
		"react/style-prop-object": "error",
		"react/void-dom-elements-no-children": "error",
		"react-hooks/exhaustive-deps": "error",
		"react-hooks/rules-of-hooks": "error"
	},
	settings: {
		react: { version: "detect" }
	}
};

module.exports = react;
