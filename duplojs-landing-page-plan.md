# DuploJS — Plan de la landing page

## 1. Objectif général

DuploJS doit être présenté comme un écosystème TypeScript fondé sur le **Type-Driven Development**.

L’objectif du site n’est pas seulement de présenter six bibliothèques. Il doit aussi faire comprendre une philosophie de conception :

- les types doivent rendre visibles les règles métier ;
- les erreurs doivent guider le développement ;
- la robustesse ne doit pas dégrader la DX ;
- chaque brique doit pouvoir être utilisée seule ou combinée avec les autres ;
- DuploJS doit inspirer la fiabilité, la robustesse, la confiance dans le code et le plaisir de développement.

La phrase factuelle qui résume DuploJS est :

> Type-Driven Development ecosystem. 1000+ functions, fully typed. Zero external dependencies. Pick the bricks you need.

La phrase identitaire principale du site est :

> Build your project with good bricks.

---

# 2. Identité visuelle

## Couleurs

L’identité repose sur trois couleurs :

- noir ;
- blanc ;
- jaune.

Le noir et le blanc construisent l’univers visuel principal.

Le jaune doit rester rare et puissant. Il sert notamment à :

- mettre en avant les boutons ;
- signaler un état actif ;
- surligner un type ou une erreur ;
- créer des ombres franches ;
- représenter les connexions entre plusieurs blocs ;
- mettre en avant une brique sélectionnée ;
- rappeler la couleur du logo et de la mascotte.

Le jaune ne doit pas être utilisé partout. Il doit produire un effet fort lorsqu’il apparaît.

## Rythme des sections

L’alternance des couleurs ne doit pas être mécanique.

Il n’est pas obligatoire de faire :

```text
blanc
noir
blanc
noir
```

Une section blanche peut contenir un bloc de code noir, et une section noire peut contenir une carte blanche.

Deux sections consécutives peuvent partager la même couleur de fond si leur composition est suffisamment différente.

Il est préférable de ne pas dépasser deux grandes sections de même couleur à la suite.

## Formes et composition

Le langage graphique doit évoquer la modularité et la construction :

- blocs rectangulaires ;
- angles francs ;
- grilles visibles ;
- bordures nettes ;
- ombres dures ;
- briques qui s’emboîtent ;
- connexions entre éléments ;
- peu d’arrondis ;
- très peu de gradients ;
- pas d’effets décoratifs inutiles.

Le site doit rester moderne, technique, crédible et légèrement ludique, sans devenir enfantin.

## Typographie

Deux familles peuvent être utilisées :

- une sans-serif massive et lisible pour les titres ;
- une monospace pour le code, les labels, les noms de packages et les annotations techniques.

Les titres doivent être courts, très visibles et structurants.

---

# 3. Mascotte et métaphore des briques

La mascotte de DuploJS est une brique jaune 2×2 avec un œil.

Elle peut servir de guide visuel discret.

Elle peut :

- regarder la brique survolée ;
- apparaître dans le mur du hero ;
- suivre une erreur ou une connexion ;
- faire un clin d’œil après une démonstration de robustesse ;
- indiquer un état actif ;
- apparaître dans certaines transitions.

Elle ne doit pas devenir un personnage trop expressif ni utiliser des bulles de dialogue.

Son rôle symbolique est de représenter la confiance et la surveillance des contrats du système.

---

# 4. Hero — The Unbreakable Wall

## Composition générale

La première section est divisée en deux grandes zones.

À gauche :

> Build your  
> project  
> with good  
> bricks.

Sous le titre :

> A Type-Driven Development ecosystem for reliable TypeScript applications.

Actions possibles :

- Get started ;
- Explore DuploJS.

À droite :

- un mur de briques en 3D stylisée ;
- des briques noires, blanches et jaunes ;
- les six bibliothèques intégrées dans le mur ;
- la mascotte jaune 2×2 ;
- un comportement interactif permettant d’accéder aux documentations.

## Vision future de l’animation

Le mur apparaît ou se construit rapidement.

Une boule de démolition arrive et frappe le mur.

Le mur résiste.

La boule se fissure puis se brise.

Une onde jaune peut circuler dans les jointures.

La mascotte apparaît dans le mur, regarde les débris puis fait un clin d’œil.

Le mur se transforme ensuite en routeur interactif vers les six documentations.

## Rôle du routeur

Chaque brique principale correspond à une bibliothèque :

- `@duplojs/utils`
- `@duplojs/http`
- `@duplojs/form`
- `@duplojs/json-web-token`
- `@duplojs/playwright`
- `@duplojs/server-utils`

Au survol :

- la brique avance ;
- elle devient jaune ou reçoit une ombre jaune ;
- son nom complet apparaît ;
- une courte description est affichée ;
- l’œil peut regarder la brique sélectionnée.

Au clic, l’utilisateur accède à la documentation correspondante.

## Contraintes

L’animation doit rester courte.

Le routeur doit devenir utilisable rapidement.

Une version réduite doit être prévue pour :

- les petits écrans ;
- les appareils peu puissants ;
- les utilisateurs ayant activé la réduction des animations ;
- les visites suivantes.

---

# 5. Section With / Without DuploJS

## Objectif

Montrer immédiatement ce que DuploJS apporte en termes de types, de règles métier et de gestion d’erreurs.

La comparaison doit porter sur un vrai cas métier.

Le code sans DuploJS ne doit pas être volontairement mauvais. Il doit sembler réaliste.

## Composition

La section peut être blanche avec deux éditeurs noirs.

À gauche :

> Without DuploJS

À droite :

> With DuploJS

Une flèche ou un indicateur jaune relie les deux.

## Message principal

> Your code already knows the rules. Its types should know them too.

Ou :

> Stop hiding business rules inside implementations.

## Contenu

La version sans DuploJS masque dans l’implémentation :

- les erreurs possibles ;
- les règles métier ;
- les états valides ;
- les garanties du résultat.

La version avec DuploJS rend visibles dans les types :

- les entrées ;
- les sorties ;
- les erreurs métier ;
- les états ;
- les contrats ;
- les garanties.

---

# 6. Section Type the Untypable

## Objectif

Présenter la philosophie principale de DuploJS.

## Titre

> Type the untypable.

## Contenu

La section montre des concepts habituellement difficiles à exprimer dans les types :

- Business rules ;
- Errors ;
- Permissions ;
- Application states ;
- Cross-service contracts.

Ces éléments commencent comme des mots flous ou désorganisés.

Une ligne ou une énergie jaune les transforme progressivement en signatures TypeScript ou en blocs structurés.

## Message

> If it changes how your application behaves, it should appear in its types.

---

# 7. Section Follow the Errors

## Objectif

Présenter la gestion du changement et la philosophie de refactorisation guidée par TypeScript.

## Principe

Une modification de contrat déclenche des erreurs dans les éléments dépendants.

Exemple :

```text
Domain
↓
Application
↓
HTTP contract
↓
Frontend form
↓
E2E test
```

Les erreurs s’allument progressivement en jaune.

Le développeur corrige les éléments un par un.

À la fin, l’ensemble du système redevient stable.

## Message

> Change one contract. TypeScript shows you everything that depends on it.

Puis :

> Follow the errors until the application is consistent again.

Cette section doit montrer que les erreurs du compilateur sont des guides utiles, pas seulement des problèmes à éviter.

---

# 8. Section Clean — Keep the Domain at the Center

## Objectif

Présenter `Clean` comme un moyen de structurer une application autour de trois couches :

- Domain ;
- Application ;
- Infrastructure.

La section doit être très visuelle et interactive.

## Composition générale

La section utilise une grille de quatre colonnes.

La partie gauche occupe trois colonnes.

La partie droite occupe une colonne.

```text
┌───────────────────────────────────────┬─────────────┐
│                                       │             │
│              CODE                     │ ARCHITECTURE│
│                                       │             │
│             3 colonnes                │ 1 colonne   │
│                                       │             │
└───────────────────────────────────────┴─────────────┘
```

## Partie droite — Visualisation des couches

La représentation montre les couches imbriquées.

```text
┌─────────────────────────┐
│     Infrastructure      │
│   ┌─────────────────┐   │
│   │   Application   │   │
│   │   ┌─────────┐   │   │
│   │   │ Domain  │   │   │
│   │   └─────────┘   │   │
│   └─────────────────┘   │
└─────────────────────────┘
```

Le domaine est au centre.

L’application l’entoure.

L’infrastructure entoure l’ensemble.

La représentation peut être réalisée avec des plaques rectangulaires légèrement isométriques.

Chaque couche est interactive.

## États interactifs

### Domain sélectionné

- Domain devient jaune ;
- Application et Infrastructure restent visibles mais secondaires ;
- les fichiers du domaine apparaissent à gauche.

### Application sélectionnée

- Application devient jaune ;
- Domain reste visible ;
- Infrastructure est atténuée ;
- les fichiers applicatifs apparaissent.

### Infrastructure sélectionnée

- Infrastructure devient jaune ;
- les implémentations et adaptateurs sont mis en avant ;
- les contrats définis dans les couches internes restent visibles.

## Partie gauche — Zone de code

La partie gauche utilise seulement une barre d’onglets et une fenêtre de code.

Il n’y a pas de gestionnaire de fichiers.

```text
┌───────────────────────────────────────────────┐
│ entity.ts | rules.ts | repository.ts          │
├───────────────────────────────────────────────┤
│                                               │
│                Code principal                 │
│                                               │
└───────────────────────────────────────────────┘
```

Chaque couche affiche au maximum trois ou quatre fichiers.

## Onglets possibles

### Domain

```text
entity.ts
rules.ts
errors.ts
repository.ts
```

### Application

```text
create-user.ts
update-user.ts
dto.ts
presenter.ts
```

### Infrastructure

```text
http-controller.ts
database-repository.ts
mapper.ts
schema.ts
```

Les noms définitifs devront correspondre à un vrai exemple construit avec `Clean`.

## Comportement

Quand l’utilisateur sélectionne une couche :

1. les onglets associés apparaissent ;
2. le premier fichier est sélectionné ;
3. le code change ;
4. le diagramme met en évidence la relation architecturale correspondante.

Quand l’utilisateur sélectionne un fichier :

- le code change ;
- certaines connexions apparaissent ;
- le niveau de détail du diagramme évolue ;
- la couche reste active.

## Synchronisation code / diagramme

Exemple :

Si `user.repository.ts` est sélectionné dans Domain :

- le contrat est mis en avant ;
- une connexion apparaît vers Infrastructure ;
- l’implémentation correspondante est signalée.

Si `database-repository.ts` est sélectionné dans Infrastructure :

- Infrastructure devient dominante ;
- le contrat Domain reste visible ;
- une ligne relie le contrat à son implémentation.

## Sous-couches possibles

### Domain

- Entities ;
- Value Objects ;
- Rules ;
- Errors ;
- Contracts.

### Application

- Use Cases ;
- Services ;
- DTOs ;
- Presenters ;
- Ports.

### Infrastructure

- HTTP ;
- Database ;
- File System ;
- External APIs ;
- Frameworks.

Ces sous-couches ne doivent apparaître que lorsqu’elles sont utiles.

## Message éditorial

> Keep the domain at the center.

Sous-titre possible :

> Separate responsibilities. Preserve contracts. Keep the domain in control.

## Interaction automatique

Une courte démonstration peut se lancer au chargement :

1. Domain et `entity.ts` ;
2. Application et `create-user.ts` ;
3. Infrastructure et `database-repository.ts` ;
4. affichage final des connexions.

Message final :

> Different responsibilities. One typed architecture.

## Version mobile

Sur mobile, la section devient verticale :

```text
Architecture
↓
Sélecteur de couche
↓
Onglets de fichiers
↓
Code
```

---

# 9. Section Six Bricks, One Philosophy

## Objectif

Présenter les six bibliothèques et leur rôle.

## `@duplojs/utils`

> Modular utilities organized by namespace.

Éléments :

- DataParser ;
- Either ;
- Pattern ;
- Clean ;
- Object ;
- Date ;
- autres utilitaires.

Mots-clés :

- utilities ;
- functional ;
- modular ;
- namespaces.

## `@duplojs/http`

> One route definition generates everything.

Éléments :

- typed server ;
- typed client ;
- OpenAPI ;
- shared DataParsers ;
- single source of truth.

Mots-clés :

- http ;
- api ;
- generation ;
- type-safe ;
- contract.

## `@duplojs/form`

> Compose forms from reusable input and layout components.

Éléments :

- Vue ;
- structure-first composition ;
- reusable inputs ;
- reusable layouts ;
- DataParser validation ;
- fully typed composition.

Mots-clés :

- forms ;
- vue ;
- composition ;
- validation.

## `@duplojs/json-web-token`

> Build JWT handlers, not utilities.

Éléments :

- TokenHandler ;
- Signer standard ou custom ;
- champs métier ;
- méthodes create, verify et decode ;
- WebCrypto ;
- fonctionnement multi-runtime.

Mots-clés :

- jwt ;
- auth ;
- tokens ;
- composition.

## `@duplojs/playwright`

> Test real behavior, not selectors.

Éléments :

- Websites ;
- Pages ;
- Components ;
- locators réutilisables ;
- organisation proche de l’application.

Mots-clés :

- e2e ;
- testing ;
- playwright ;
- components.

## `@duplojs/server-utils`

> Server utilities for every runtime.

Éléments :

- FileSystem ;
- CLI ;
- process utilities ;
- environment helpers.

Mots-clés :

- server ;
- files ;
- cli ;
- env.

## Interaction

La brique sélectionnée devient jaune.

Les autres restent blanches ou noires.

Chaque brique affiche :

- son nom ;
- une promesse courte ;
- quelques détails ;
- un lien vers sa documentation.

---

# 10. Section Built from Zero

## Objectif

Présenter l’indépendance technique de DuploJS.

## Messages

- 1000+ functions ;
- Fully typed ;
- Zero external dependencies ;
- Pick the bricks you need.

## Explication

DuploJS cherche à garder le contrôle sur sa base technique.

La plupart des bibliothèques n’ont aucune dépendance externe.

Les intégrations comme Vue pour `@duplojs/form` ou Playwright pour `@duplojs/playwright` utilisent des peer dependencies lorsque cela est nécessaire.

La section doit insister sur :

- la maîtrise des abstractions ;
- la stabilité ;
- la cohérence entre les briques ;
- l’absence de dépendances imposées ;
- la possibilité de choisir uniquement ce qui est nécessaire.

---

# 11. Section Types for Humans and Agents

## Objectif

Réserver une seule section à l’usage avec les agents IA, sans en faire un axe dominant.

L’IA est une compatibilité supplémentaire et un public potentiel, pas la raison d’être de DuploJS.

## Message principal

> Types guide humans. Types constrain agents.

Ou :

> Type is the new prompt.

## Contenu

Pour les développeurs :

- meilleure autocomplétion ;
- erreurs plus précises ;
- refactorisations guidées ;
- documentation locale ;
- meilleure compréhension du code.

Pour les agents :

- JSDoc disponible directement dans les fonctions ;
- contexte plus court ;
- découverte rapide des API ;
- types qui réduisent l’espace des solutions incorrectes ;
- erreurs TypeScript qui signalent les écarts.

La section doit rester courte et secondaire.

---

# 12. Section Community

## Objectif

Présenter les espaces communautaires et prévoir l’évolution future du projet.

## Contenu immédiat

- GitHub ;
- Discord ;
- Documentation ;
- Articles ;
- cours Type-Driven Development ;
- autres réseaux utilisés.

## Contenu futur

- contributeurs ;
- mainteneurs ;
- donateurs ;
- sponsors ;
- projets utilisant DuploJS ;
- événements ;
- ressources communautaires.

## Direction visuelle

La communauté peut être représentée comme une construction collective.

Chaque membre, canal ou contribution ajoute une petite brique au mur.

Titre possible :

> Built together.

Ou :

> Good bricks build strong projects. Good people build strong ecosystems.

---

# 13. Final Assembly

## Objectif

Terminer par une synthèse forte.

## Couleur

Cette section peut être entièrement jaune.

## Message

> Pick your bricks. Build with confidence.

Sous-titre :

> Start with one utility or compose the whole ecosystem.

## Actions

- Get started ;
- Explore the bricks ;
- View on GitHub ;
- Join the community.

Une commande d’installation peut être intégrée dans un bloc noir.

---

# 14. Ordre final des sections

```text
01 Hero
   Build your project with good bricks

02 With / Without DuploJS
   Montrer la valeur immédiate du typage

03 Type the Untypable
   Présenter la philosophie Type-Driven Development

04 Follow the Errors
   Montrer la propagation des changements

05 Clean — Keep the Domain at the Center
   Montrer l’architecture et la séparation des responsabilités

06 Six Bricks, One Philosophy
   Présenter l’ensemble de l’écosystème

07 Built from Zero
   Expliquer l’indépendance technique

08 Types for Humans and Agents
   Présenter la DX et la compatibilité avec les agents

09 Community
   Réseaux, contributeurs, donateurs et ressources

10 Final Assembly
   Pick your bricks. Build with confidence
```

---

# 15. Progression narrative

La page raconte la progression suivante :

```text
Découvrir l’écosystème
→ Voir la valeur du typage
→ Comprendre la philosophie
→ Comprendre comment gérer le changement
→ Découvrir l’architecture avec Clean
→ Explorer les six briques
→ Comprendre l’indépendance technique
→ Voir la compatibilité avec les agents
→ Rejoindre la communauté
→ Commencer
```

---

# 16. Ce qu’il faut éviter

- une alternance noir/blanc trop mécanique ;
- trop de jaune ;
- une métaphore Lego trop enfantine ;
- des textures plastiques omniprésentes ;
- des effets 3D trop réalistes ;
- des animations longues ;
- des particules ou gradients décoratifs inutiles ;
- un site centré uniquement sur HTTP ;
- une comparaison permanente avec Effect ;
- une mise en avant excessive de l’IA ;
- trop de chiffres sans contexte ;
- une section Clean trop proche d’un IDE complet ;
- trop de fichiers ou d’informations visibles en même temps.

---

# 17. Sensation générale recherchée

Le site doit faire ressentir que DuploJS est :

- fiable ;
- robuste ;
- rassurant ;
- agréable à utiliser ;
- structuré ;
- modulaire ;
- profondément typé ;
- adapté aux projets simples comme aux architectures complexes.

La promesse visuelle et éditoriale finale est :

> Build with confidence.
