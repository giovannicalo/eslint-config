module.exports = {
	extends: "./index.js",
	parserOptions: {
		ecmaFeatures: { jsx: true }
	},
	plugins: ["react", "react-hooks"],
	rules: {
		"react/boolean-prop-naming": 2,
		"react/button-has-type": [2, {
			button: true,
			reset: true,
			submit: true
		}],
		"react/default-props-match-prop-types": [2, {
			allowRequiredDefaults: false
		}],
		"react/destructuring-assignment": 0,
		"react/display-name": 0,
		"react/forbid-component-props": 0,
		"react/forbid-dom-props": 0,
		"react/forbid-elements": 0,
		"react/forbid-foreign-prop-types": 0,
		"react/forbid-prop-types": 0,
		"react/function-component-definition": [2, {
			namedComponents: "arrow-function",
			unnamedComponents: "arrow-function"
		}],
		"react/jsx-boolean-value": [2, "always"],
		"react/jsx-child-element-spacing": 0,
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-closing-tag-location": 0,
		"react/jsx-curly-brace-presence": [2, {
			children: "ignore",
			props: "never"
		}],
		"react/jsx-curly-newline": [2, "never"],
		"react/jsx-curly-spacing": [2, {
			allowMultiline: false,
			attributes: true,
			children: true,
			spacing: { objectLiterals: "never" },
			when: "never"
		}],
		"react/jsx-equals-spacing": [2, "never"],
		"react/jsx-filename-extension": [2, { extensions: [".js"] }],
		"react/jsx-first-prop-new-line": 0,
		"react/jsx-fragments": [2, "element"],
		"react/jsx-handler-names": 0,
		"react/jsx-indent": [2, "tab", { checkAttributes: true }],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-key": 2,
		"react/jsx-max-depth": 0,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-no-bind": [2, {
			allowArrowFunctions: false,
			allowBind: false,
			allowFunctions: false,
			ignoreDOMComponents: false,
			ignoreRefs: false
		}],
		"react/jsx-no-comment-textnodes": 2,
		"react/jsx-no-duplicate-props": [2, { ignoreCase: false }],
		"react/jsx-no-literals": [2, {
			ignoreProps: false,
			noStrings: false
		}],
		"react/jsx-no-script-url": 2,
		"react/jsx-no-target-blank": [2, {
			allowReferrer: false,
			enforceDynamicLinks: "always"
		}],
		"react/jsx-no-undef": 2,
		"react/jsx-no-useless-fragment": 2,
		"react/jsx-one-expression-per-line": [2, { allow: "none" }],
		"react/jsx-pascal-case": [2, { allowAllCaps: false }],
		"react/jsx-props-no-multi-spaces": 2,
		"react/jsx-props-no-spreading": 0,
		"react/jsx-sort-default-props": [2, { ignoreCase: false }],
		"react/jsx-sort-props": [2, {
			callbacksLast: false,
			ignoreCase: false,
			noSortAlphabetically: false,
			reservedFirst: false,
			shorthandFirst: false,
			shorthandLast: false
		}],
		"react/jsx-tag-spacing": [2, {
			afterOpening: "never",
			beforeClosing: "never",
			beforeSelfClosing: "always",
			closingSlash: "never"
		}],
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/jsx-wrap-multilines": 0,
		"react/no-access-state-in-setstate": 2,
		"react/no-adjacent-inline-elements": 2,
		"react/no-array-index-key": 0,
		"react/no-children-prop": 2,
		"react/no-danger": 0,
		"react/no-danger-with-children": 2,
		"react/no-deprecated": 2,
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		"react/no-direct-mutation-state": 2,
		"react/no-find-dom-node": 2,
		"react/no-is-mounted": 2,
		"react/no-multi-comp": [2, { ignoreStateless: false }],
		"react/no-redundant-should-component-update": 2,
		"react/no-render-return-value": 2,
		"react/no-set-state": 0,
		"react/no-string-refs": 2,
		"react/no-this-in-sfc": 2,
		"react/no-typos": 2,
		"react/no-unescaped-entities": 2,
		"react/no-unknown-property": 2,
		"react/no-unsafe": 2,
		"react/no-unused-prop-types": [2, {
			customValidators: [],
			skipShapeProps: true
		}],
		"react/no-unused-state": 2,
		"react/no-will-update-set-state": 2,
		"react/prefer-es6-class": [2, "always"],
		"react/prefer-read-only-props": 0,
		"react/prefer-stateless-function": 0,
		"react/prop-types": [2, {
			customValidators: [],
			ignore: [],
			skipUndeclared: false
		}],
		"react/react-in-jsx-scope": 2,
		"react/require-default-props": [2, {
			forbidDefaultForRequired: true,
			ignoreFunctionalComponents: false
		}],
		"react/require-optimization": 0,
		"react/require-render-return": 2,
		"react/self-closing-comp": [2, {
			component: true,
			html: true
		}],
		"react/sort-comp": [2, {
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
		"react/sort-prop-types": [2, {
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false,
			sortShapeProp: true
		}],
		"react/state-in-constructor": [2, "never"],
		"react/static-property-placement": [2, "static public field"],
		"react/style-prop-object": 2,
		"react/void-dom-elements-no-children": 2,
		"react-hooks/exhaustive-deps": 2,
		"react-hooks/rules-of-hooks": 2
	},
	settings: {
		react: { version: "detect" }
	}
};
