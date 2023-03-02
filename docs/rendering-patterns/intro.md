---
sidebar_position: 1
title: Introduction
comment: true
tags:
  - Rendering Patterns
---

# Rendering Patterns

Rendering content on the web can be done in many ways. The decision _how_ and _where_ to fetch and render content is key to the performance of an application.

The available frameworks and libraries can be used to implement different rendering patterns like Client-Side Rendering, Static Rendering, Incremental Static Regeneration, Progressive Rendering, Server-Side Rendering and many more. Understanding the tradeoffs and use cases for these patterns can drastically help the performance of your application, resulting in a great user and developer experience.

---

### Web Vitals

To measure how well our website performs, we can use a set of useful measurements called Web Vitals. A subset of these measurements - the Core Web Vitals - is usually used to determine the performance of a page, and can affect your website's SEO.

- TTFB (Time To First Byte): Time it takes for a client to receive the first byte of page content
- FCP (First Contentful Paint): Time it takes the browser to render the first piece of content after navigation
- LCP (Largest Contentful Paint): Time it takes to load and render the page's main content
- TTI (Time To Interactive): Time from when the page starts loading to when it's reliably responding to user input quickly
- CLS (Cumulative Layout Shift): Measures visual stability to avoid unexpected layout shift
- FIP (First Input Delay): Time from when the user interacts with the page to the time when the event handlers are able to run

---

> The following terms will be useful when covering the different rendering techniques:

- Compiling: Converting JavaScript into native machine code
- Execution time: The time it takes to execute the previously fetched, parsed, and compiled data
- Hydration: Attaching handlers to a DOM node whose HTML contents were server-rendered, making the component interactive
- Idle: The browser's state when it's not performing any action
- Loading time: The time it takes to fetch the data from the server
- Main thread: The thread on which the browser executes all the JavaScript, performs layout, reflows, and garbage collection
- Parsing: Converting an HTML source into DOM nodes, and generating an AST
- Processing: Parsing, compiling, and executing the previously fetched data
- Processing time: The time it takes to parse and compile the previously fetched data
