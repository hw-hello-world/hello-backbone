FILES = backbone-es6/main-decorator \
  backbone-extend-mix-es6/main-extend+class+extend \
  backbone-extend-mix-es6/main-class+extend

start:
	yarn serve

build:
	for name in $(FILES); do\
		yarn babel $${name}.js -o $${name}.dist.js; \
	done
