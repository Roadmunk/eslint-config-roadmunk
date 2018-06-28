This holds the base Roadmunk shop standard ESLint configuration file.

Use this into all NodeJS projects as follows:

1. Add a dependency for this package to your `package.json` file:
	```
	{
		"devDependencies" : {
			"@roadmunk/eslint-config-roadmunk": "^3.0.2",
		}
	}
	```

1. Add the following to your project's `.eslintrc` file:
	```
	{
		"extends" : "./node_modules/eslint-config-roadmunk/index.js",
	}
	```
