MAPLE FLAG DESIGN
======

New design for the [Maple Flag website](http://www3.sympatico.ca/tlaschuk/mapleflagmissions/). Since the only acceptable files are static `.html` pages, this node.js infrastructure will simply act as a framework to more conveniently code the relevant static files required.

TECHNICALITIES
======

Requires a working [node.js](https://nodejs.org/en/) installation.

Though not listed in `package.json`, the following node.js modules are required, since they are either dependent on or strongly suggest a global installation.

- [Nodemon](http://nodemon.io/): `npm install -g nodemon`

Required node packages are not included in the repo, and must thus be installed using npm.

- Set up environment: `npm install`

The following commands are available once in the project folder:

- Start server (with debugging): `npm test`
- Start server (production): `npm start`

CONTACTS
======

- Design: [Mattia Affabris](https://github.com/Gliptal)
- Frontend: [Mattia Affabris](https://github.com/Gliptal)

CHANGELOG
======

Versioning follows [Semantic versioning](http://semver.org/) rules.

### 0.1.0

- created framework
- created header
- created footer
- created home

### 0.2.0

- refactoring
- sticky header
- modified home
- created faq