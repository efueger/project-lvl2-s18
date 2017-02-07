start:
	npm run babel-node -- ./src/bin/gendiff.js --help

publish:
	npm publish

install:
	npm install

lint:
	npm run eslint -- src test

test:
	npm test

build:
	rm -rf dist
	npm run build
