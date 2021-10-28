FILES = backbone-es6/main-decorator \
  backbone-es6-mix/main-class+extend

start:
	yarn serve

build:
	for name in $(FILES); do\
		yarn babel $${name}.js -o $${name}.dist.js; \
	done
