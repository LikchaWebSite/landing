module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
		'value-keyword-case': ['lower', {
			ignoreProperties: ['composes'],
		}],
    'property-no-unknown': [true, {
      ignoreProperties: ['composes']
    }],
    'media-feature-range-notation': 'prefix',
    'declaration-no-important': true,
    'selector-type-case': 'lower',
		'selector-class-pattern': [/^[a-z0-9][a-zA-Z0-9]*$/],
		'selector-id-pattern': [/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^__layout$|^__nuxt$/],
  }
}