install:	#установка
	npm	ci
brain-games:	#запуск
	node bin/brain-games.js
publish:	#публикация
	npm publish --dry-run