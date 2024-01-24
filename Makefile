install:	#установка
	npm	ci
brain-games:	#запуск-приветствия
	node bin/brain-games.js
publish:	#публикация
	npm publish --dry-run
lint:	#линтинг
	npx eslint
brain-even:		#запуск-игры-на-чётность
	node bin/brain-even.js