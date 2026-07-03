---
title: Démarrer avec DuploJS
description: Le chemin le plus rapide pour lancer un projet avec l’écosystème DuploJS.
lang: fr
---

# Démarrer avec DuploJS

DuploJS est un écosystème modulaire pour construire des projets TypeScript robustes, prévisibles et faciles à faire évoluer.

Cette page sert de point d’entrée rapide. Elle n’a pas vocation à remplacer les documentations complètes, mais à t’aider à savoir **par où commencer** selon ce que tu veux construire.

## Le chemin le plus rapide

Pour démarrer un nouveau backend avec DuploJS, le plus simple est d’utiliser le boilerplate officiel.

👉 [Démarrer avec le backend boilerplate](https://github.com/duplojs/backend-boilerplate)

Le boilerplate fournit une base de projet déjà organisée, afin d’éviter de repartir de zéro à chaque fois. Il permet de se concentrer directement sur la logique métier, les routes, les contrats et la structure applicative.

En pratique, c’est le meilleur choix si tu veux :

* lancer rapidement une API ;
* partir d’une structure déjà pensée pour DuploJS ;
* éviter de refaire toute la configuration projet à la main ;
* découvrir l’écosystème dans un contexte concret.

## Par quoi commencer ?

### Je veux créer un backend

Commence par le boilerplate.

[Backend boilerplate](https://github.com/duplojs/backend-boilerplate)

C’est le point d’entrée recommandé pour créer une application backend complète avec DuploJS. Il sert de base de travail pour structurer ton projet rapidement.

### Je veux construire des APIs typées

Va vers la documentation HTTP.

[Documentation HTTP](https://http.duplojs.dev)

Le package HTTP permet de construire des serveurs et clients HTTP avec une approche pensée pour TypeScript. C’est ici que tu trouveras les concepts liés aux routes, aux contrats, aux entrées, aux sorties et à la composition côté API.

### Je veux utiliser les primitives TypeScript de l’écosystème

Commence par Utils.

[Documentation Utils](https://utils.duplojs.dev)

Utils regroupe des primitives et helpers fortement typés. C’est utile pour écrire du code plus prévisible, composer des fonctions, manipuler des structures typées et réutiliser des briques communes dans différents projets.

### Je veux créer des formulaires Vue typés

Regarde DuploJS Form.

[Documentation Form](https://form.duplojs.dev)

Form est pensé pour créer des formulaires Vue structurés, typés et réutilisables. C’est utile quand tu veux organiser tes champs, tes règles de validation et ton flow de formulaire sans perdre la cohérence TypeScript.

### Je veux organiser mes tests end-to-end

Regarde le package Playwright.

[DuploJS Playwright](https://github.com/duplojs/playwright)

Ce package aide à structurer les tests end-to-end autour de concepts comme les sites, les pages et les composants. Il est utile lorsque tu veux éviter que tes tests Playwright deviennent difficiles à maintenir.

### Je veux explorer tout l’écosystème

Tu peux parcourir l’organisation GitHub.

[Organisation GitHub DuploJS](https://github.com/duplojs)

Tu y trouveras les packages, les boilerplates, les outils et les différents projets liés à DuploJS.

## Résumé rapide

| Besoin                                   | À utiliser                                                            |
| ---------------------------------------- | --------------------------------------------------------------------- |
| Démarrer un backend rapidement           | [Backend boilerplate](https://github.com/duplojs/backend-boilerplate) |
| Construire des APIs typées               | [HTTP](https://http.duplojs.dev)                                      |
| Utiliser des helpers TypeScript robustes | [Utils](https://utils.duplojs.dev)                                    |
| Créer des formulaires Vue typés          | [Form](https://form.duplojs.dev)                                      |
| Structurer des tests E2E                 | [Playwright](https://github.com/duplojs/playwright)                   |
| Voir tous les packages                   | [GitHub DuploJS](https://github.com/duplojs)                          |

## Exemple de parcours recommandé

Si tu découvres DuploJS, tu peux suivre ce chemin :

1. Ouvre le [backend boilerplate](https://github.com/duplojs/backend-boilerplate).
2. Lance le projet localement en suivant son README.
3. Observe la structure du projet.
4. Consulte la documentation [HTTP](https://http.duplojs.dev) pour comprendre la création des routes.
5. Ajoute progressivement les packages dont tu as besoin.

Tu n’es pas obligé d’utiliser tout l’écosystème d’un coup. DuploJS est modulaire : tu peux commencer avec une seule brique, puis intégrer le reste progressivement.

## À retenir

Le boilerplate est le meilleur point de départ pour créer un nouveau projet.

Les documentations des packages sont là pour approfondir chaque partie de l’écosystème lorsque tu en as besoin.

Commence petit, utilise ce dont tu as besoin, puis compose progressivement les briques DuploJS selon ton projet.
