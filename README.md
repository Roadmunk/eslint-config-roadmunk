This holds the base Roadmunk shop standard ESLint configuration file.

Use this into all NodeJS projects as follows:

1. Add a dependency for this package to your `package.json` file:
	```js
	{
		"devDependencies" : {
			"@roadmunk/eslint-config-roadmunk": "^3.17.2",
		}
	}
	```

1. Add one of the following to your project's `.eslintrc` file:
	- For just the _base_ configuration:
	```js
	{
		"extends" : "./node_modules/eslint-config-roadmunk/index.js",
	}
	```

	- For the base configuration with extra Vue rules
	```js
	{
		"extends" : "./node_modules/eslint-config-roadmunk/vue-config.js",
	}
	```

	- For the base configuration with extra Typescript and React rules
	```js
	{
		"extends" : "./node_modules/eslint-config-roadmunk/react-ts-config.js",
	}
	```

# Publishing a new version

1. Bump the version in `package.json`
2. Create a new release in GitHub. 

This will publish a new version of the package to both npm and github.