exe:
	deno src/index.ts

deps:
	rm -rf deno.lock
	rm -rf node_modules
	deno install