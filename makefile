SHELL:=/bin/bash

default: help

.PHONY: help
help: # Show help for each of the Makefile recipes.
	@grep -E '^[a-zA-Z0-9 -]+:.*#'  Makefile | sort | while read -r l; do printf "\033[1;32m$$(echo $$l | cut -f 1 -d':')\033[00m:$$(echo $$l | cut -f 2- -d'#')\n"; done

.PHONY: serve
serve: # Serve the site locally for testing.
	npm start

.PHONY: typescript-check
typescript-check: # Check typescript types.
	npm install --legacy-peer-deps
	npm run ts:check
