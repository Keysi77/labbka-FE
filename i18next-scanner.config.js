module.exports = {
	input: [ 'src/**/*.{ts,tsx}' ],
	output: './',
	options: {
		debug: false,
		func: {
			list: [ 't' ],
			extensions: [ '.js', '.jsx' ]
		},
		sort: true,
		trans: false,
		removeUnusedKeys: true,
		lngs: [ 'sk' ],
		ns: [ 'translation', 'atoms', 'pages', 'components', 'paths' ],
		defaultLng: 'sk',
		defaultNs: 'translation',
		defaultValue: '_NEPRELOZENE_',
		resource: {
			loadPath: 'public/locales/{{lng}}/{{ns}}.json',
			savePath: 'public/locales/{{lng}}/{{ns}}.json',
			jsonIndent: 2,
			lineEnding: '\n'
		},
		nsSeparator: ':'
	}
}
