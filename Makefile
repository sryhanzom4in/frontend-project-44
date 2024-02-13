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
brain-calc:		#запуск-игры-калькулятора
	node bin/brain-calc.js
brain-gcd:		#запуск-игры-НОД
	node bin/brain-gcd.js
brain-progression:		#запуск-игры-арифметическая-прогрессия
	node bin/brain-progression.js
brain-prime:	#запуск-игры-просто-число
	node bin/brain-prime.js