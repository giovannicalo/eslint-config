module.exports = {
	extends: "./index.js",
	parserOptions: {
		ecmaFeatures: { jsx: true }
	},
	plugins: ["react"],
	rules: {
		"react/display-name": 0,
		"react/forbid-component-props": 0,
		"react/forbid-elements": 0,
		"react/forbid-foreign-prop-types": 0,
		"react/forbid-prop-types": 0,
		"react/jsx-boolean-value": [2, "always"],
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-curly-spacing": [2, "never", {
			allowMultiline: false,
			spacing: { objectLiterals: "never" }
		}],
		"react/jsx-equals-spacing": [2, "never"],
		"react/jsx-filename-extension": [2, { extensions: [".js"] }],
		"react/jsx-first-prop-new-line": 0,
		"react/jsx-handler-names": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-key": 2,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-no-bind": 0,
		"react/jsx-no-comment-textnodes": 2,
		"react/jsx-no-duplicate-props": [2, { ignoreCase: false }],
		"react/jsx-no-literals": 2,
		"react/jsx-no-target-blank": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-pascal-case": [2, { allowAllCaps: false }],
		"react/jsx-sort-props": [2, {
			callbacksLast: false,
			ignoreCase: false,
			noSortAlphabetically: false,
			shorthandFirst: false,
			shorthandLast: false
		}],
		"react/jsx-space-before-closing": [2, "always"],
		"react/jsx-tag-spacing": [2, {
			afterOpening: "never",
			beforeSelfClosing: "always",
			closingSlash: "never"
		}],
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/jsx-wrap-multilines": 0,
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
		"react/no-render-return-value": 2,
		"react/no-set-state": 0,
		"react/no-string-refs": 2,
		"react/no-unescaped-entities": 2,
		"react/no-unknown-property": 2,
		"react/no-unused-prop-types": [2, {
			customValidators: [],
			skipShapeProps: true
		}],
		"react/prefer-es6-class": [2, "always"],
		"react/prefer-stateless-function": 0,
		"react/prop-types": [2, {
			customValidators: [],
			ignore: [],
			skipUndeclared: false
		}],
		"react/react-in-jsx-scope": 2,
		"react/require-default-props": 2,
		"react/require-optimization": 0,
		"react/require-render-return": 2,
		"react/self-closing-comp": [2, {
			component: true,
			html: true
		}],
		"react/sort-comp": [2, {
			groups: {
				lifecycle: [
					"displayName",
					"propTypes",
					"contextTypes",
					"childContextTypes",
					"mixins",
					"statics",
					"defaultProps",
					"constructor",
					"getDefaultProps",
					"getInitialState",
					"state",
					"getChildContext",
					"componentWillMount",
					"componentDidMount",
					"componentWillReceiveProps",
					"shouldComponentUpdate",
					"componentWillUpdate",
					"componentDidUpdate",
					"componentWillUnmount"
				]
			},
			order: [
				"static-methods",
				"lifecycle",
				"everything-else",
				"render"
			]
		}],
		"react/sort-prop-types": [2, {
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false
		}],
		"react/style-prop-object": 2,
		"react/void-dom-elements-no-children": 2
	}
};
