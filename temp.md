# Struct

## Comments

- couleurs (plus proches du logo)
- liste des libs: (duplojs/utils (main brick), duplojs/http, duplojs/server-utils, duplojs/json-web-token, duplojs/form, duplojs/playwright).
- nimation "buildIsoBricks" doit pouvoir accepter des mots de plus de 4 lettres. Idealement faire en sorte que l'on puisse avoir des rectangles par exemples.
- pas de diff entre core et tooling (juste 6 package de base). sinon le main est duplojs/utils
- retirer toute mention de performance (dupojs mes en avant la robutesse. TDD first (type driven development))

### Sections Orders:

- Why DuploJS
	- 6 packages
	- +1000 fonctions
	- All runtime (node, bun, deno, browser)
	- Robuste code
- Everything you need
	- Orders:
	1. @duplojs/utils
	2. @duplojs/http
	3. @duplojs/server-utils
	4. duplojs/json-web-token
	5. duplojs/form
	6. duplojs/playwright
- Top 10 versus
- Exemple couche en couche
	- (à fournir) (@ZeRiix, @mathcovax)
- Sequence Diagram
	- (à fournir avec du code) (@ZeRiix, @mathcovax)