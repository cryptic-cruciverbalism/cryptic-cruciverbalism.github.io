# website

Code and content for the cryptic-cruciverbalism website.


This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Task List

Quick and dirty list of tasks:

- [ ] docs: homophones / accents / samples
- [ ] feat: Google Analytics
- [ ] feat: Google AdSense
- [ ] docs: books
- [ ] docs(tactics): contrived words
- [ ] docs(tactics): straight part
- [ ] docs(tactics): misdirection
- [ ] docs(mechanics): voice - third example
- [ ] docs(mechanics): &lit. second example
- [ ] docs(mechanics): &lit. third example
- [ ] feat: demonstrate 'search' as a way to get hints on clues (e.g. search for 'cockney' to get 'voices'
- [ ] epic: option to publish puzzle, option to list puzzles
