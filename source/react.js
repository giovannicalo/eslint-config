module.exports = {
	extends: "./index.js",
	parserOptions: {
		ecmaFeatures: { jsx: true }
	},
	plugins: ["react"],
	rules: {
		"react/display-name": 0,
		"react/forbid-prop-types": 0,
		"react/jsx-boolean-value": [2, "always"],
		"react/jsx-closing-bracket-location": 0,
		"react/jsx-curly-spacing": [2, "never", { allowMultiline: false }],
		"react/jsx-equals-spacing": [2, "never"],
		"react/jsx-first-prop-new-line": 0,
		"react/jsx-handler-names": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-key": 2,
		"react/jsx-max-props-per-line": 0,
		"react/jsx-no-bind": 0,
		"react/jsx-no-duplicate-props": [2, { ignoreCase: false }],
		"react/jsx-no-literals": 2,
		"react/jsx-no-target-blank": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-pascal-case": [2, { allowAllCaps: false }],
		"react/jsx-sort-props": [2, {
			callbacksLast: false,
			ignoreCase: false,
			shorthandFirst: false
		}],
		"react/jsx-space-before-closing": [2, "always"],
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/no-danger": 1,
		"react/no-deprecated": 2,
		"react/no-did-mount-set-state": [2, "allow-in-func"],
		"react/no-did-update-set-state": [2, "allow-in-func"],
		"react/no-direct-mutation-state": 2,
		"react/no-is-mounted": 2,
		"react/no-multi-comp": [2, { ignoreStateless: false }],
		"react/no-set-state": 0,
		"react/no-string-refs": 0,
		"react/no-unknown-property": 2,
		"react/prefer-es6-class": [2, "always"],
		"react/prefer-stateless-function": 0,
		"react/prop-types": 2,
		"react/react-in-jsx-scope": 2,
		"react/require-extension": 2,
		"react/require-render-return": 2,
		"react/self-closing-comp": 2,
		"react/sort-comp": [2, {
			order: [
				"static-methods",
				"lifecycle",
				"everything-else",
				"render"
			],
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
			}
		}],
		"react/sort-prop-types": [2, {
			callbacksLast: false,
			ignoreCase: false,
			requiredFirst: false
		}],
		"react/wrap-multilines": 0
	}
};
