---
title: Get Started with DuploJS
description: The fastest way to understand and use the DuploJS ecosystem.
lang: en
---

# Get Started with DuploJS

DuploJS is a modular TypeScript ecosystem designed to help you build robust, predictable, and scalable projects.

This page is a quick entry point. It is not meant to replace the full documentation, but to help you understand **where to start** depending on what you want to build.

## The fastest path

To quickly start a backend project, you can use the official boilerplate.

[Backend boilerplate](https://github.com/duplojs/backend-boilerplate)

It provides an already structured project base, so you do not have to rebuild the whole project organization from scratch.

It is the best choice if you want to:

* discover DuploJS inside a concrete project;
* quickly start an API;
* begin with a structure already designed for the ecosystem;
* focus directly on your business logic.

## Main packages

The DuploJS ecosystem is made of independent packages. You can use them together, or only integrate the ones you need.

### @duplojs/utils

[Utils documentation](https://utils.duplojs.dev/)

`@duplojs/utils` is the core building block of the ecosystem.

It provides TypeScript primitives, typed helpers, and composition tools designed to help you write more predictable code. It is the best entry point to understand the DuploJS philosophy: pure functions, explicit behaviors, and TypeScript used to its full potential.

Use it if you want to:

* add robust TypeScript primitives to your project;
* compose functions in a clearer way;
* manipulate typed structures;
* lay the foundations for more predictable code.

### @duplojs/server-utils

[Server Utils documentation](https://server-utils.duplojs.dev/)

`@duplojs/server-utils` provides server-oriented utilities.

It acts as an intermediate layer between the generic primitives from `@duplojs/utils` and the more concrete needs of a backend application. It is a good next step after `@duplojs/utils` when you want to structure server-side code without jumping directly into a complete HTTP abstraction.

Use it if you want to:

* organize server-side logic;
* reuse backend-oriented helpers;
* keep a modular approach;
* prepare a clean foundation before moving to HTTP.

### @duplojs/http

[HTTP documentation](https://http.duplojs.dev/)

`@duplojs/http` lets you build typed APIs with DuploJS.

It is the package to use when you want to create routes, define contracts, control inputs and outputs, and build an API with a consistent TypeScript experience.

Use it if you want to:

* create an HTTP server;
* build typed routes;
* structure your API inputs and outputs;
* benefit from a backend flow that stays coherent with TypeScript.

### @duplojs/form

[Form documentation](https://form.duplojs.dev/)

`@duplojs/form` is dedicated to building typed Vue forms.

It helps organize fields, validations, and form logic into a clearer and more reusable structure. It is useful when your forms start becoming too complex to manage cleanly by hand.

Use it if you want to:

* create typed Vue forms;
* reuse fields and rules;
* better organize validation;
* keep consistency between your forms and your types.

### @duplojs/json-web-token

[JSON Web Token documentation](https://json-web-token.duplojs.dev/)

`@duplojs/json-web-token` provides a dedicated building block for managing JSON Web Tokens.

It is useful when your project needs to sign, read, or verify tokens in an authentication context or when exchanging secured information.

Use it if you want to:

* manage JWTs in your application;
* isolate token-related logic;
* avoid scattering this code across your project;
* keep a clear approach around authentication.

### @duplojs/playwright

[Playwright documentation](https://playwright.duplojs.dev/)

`@duplojs/playwright` helps structure end-to-end tests with Playwright.

It provides a clearer organization around sites, pages, and components, helping prevent your tests from becoming hard to maintain over time.

Use it if you want to:

* organize your E2E tests;
* structure your test pages and components;
* make your scenarios easier to read;
* maintain a cleaner Playwright testbase.

## Which package should I use?

| Need                             | Recommended package                                              |
| -------------------------------- | ---------------------------------------------------------------- |
| Add robust TypeScript primitives | [`@duplojs/utils`](https://utils.duplojs.dev/)                   |
| Structure server-side logic      | [`@duplojs/server-utils`](https://server-utils.duplojs.dev/)     |
| Build a typed API                | [`@duplojs/http`](https://http.duplojs.dev/)                     |
| Create typed Vue forms           | [`@duplojs/form`](https://form.duplojs.dev/)                     |
| Manage JSON Web Tokens           | [`@duplojs/json-web-token`](https://json-web-token.duplojs.dev/) |
| Organize end-to-end tests        | [`@duplojs/playwright`](https://playwright.duplojs.dev/)         |

## Read in the right order

Depending on what you want to do, you do not need to read the entire documentation in the same order.

### I want to understand the DuploJS philosophy

Start with [`@duplojs/utils`](https://utils.duplojs.dev/).

It is the best entry point to discover the primitives, conventions, and functional approach behind the ecosystem.

### I want to create a backend

Start with the [backend boilerplate](https://github.com/duplojs/backend-boilerplate), then read [`@duplojs/http`](https://http.duplojs.dev/) when you want to better understand routes, contracts, and the HTTP flow.

[`@duplojs/server-utils`](https://server-utils.duplojs.dev/) can then help you organize more transversal server-side needs.

### I only want to integrate one package into an existing project

Start directly with the package that matches your need.

You can use `@duplojs/utils`, `@duplojs/form`, `@duplojs/json-web-token`, or `@duplojs/playwright` without adopting the whole ecosystem.

## Key takeaway

You do not need to adopt the whole ecosystem at once.

Start with `@duplojs/utils` if you want to understand the foundations, use the boilerplate if you want to quickly start a backend, then add only the packages your project actually needs.
