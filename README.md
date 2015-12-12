MAPLE DESIGN
======

New design for the [Maple Flag website](http://www3.sympatico.ca/tlaschuk/mapleflagmissions/). Since the only acceptable files are static `.html` pages, this node.js infrastructure will simply act as a framework to more conveniently code the relevant static files required, via [jade](http://jade-lang.com/) and [stylus](http://learnboost.github.io/stylus/).

FRAMEWORK
======

Requires a working [node.js](https://nodejs.org/en/) installation.

Although not listed in `package.json`, the following node.js modules are required, since they are either dependent on or strongly suggest a global installation.

- [nodemon](http://nodemon.io/): `npm install -g nodemon`

Required node packages are not included in the repo, and must thus be installed using npm.

- Set up environment: `npm install`

The following commands are available once in the project folder:

- Start server (with debugging): `npm test`
- Start server (production): `npm start`
- Create static files: `npm run deliver`

STATIC DELIVERY
======

The `deliver.js` script creates the required static files directly from the framework, and automatically delivers them in the appropriate folder structure inside `\STATIC`. This means that the best method to modify the website is to utilize this provided framework, avoiding the manual edit of the static `.html`, `.css` or `.js` files on your remote server.

- Run the local node.js server: `npm test`
- Make the modifications: the server will be restarted if needed as the code is changed. Note that if the only variations are in the content (not in the structure or design) it should be sufficient to modify the files found in `locales\en` (one per page), provided their current structure is followed.
- Stop the local node.js server: `CTRL-C` `CTRL-C`
- Run the delivery script: `npm run deliver`
- Copy the modified static files in `\STATIC` to your remote server

CONTACTS
======

- Design: [Mattia Affabris](https://github.com/Gliptal)
- Frontend: [Mattia Affabris](https://github.com/Gliptal)
- Content: [MapleFlagMissions.ca](mailto:mapleflagmissions@gmail.com)

CHANGELOG
======

Versioning follows [semantic versioning](http://semver.org/) rules.

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

### 0.3.0

- refactoring
- transitions
- sticky footer
- modified home
- modified faq
- created hardware
- created about

### 0.4.0

- refactoring
- modified header
- modified faq
- reworked images
- created help
- created license
- created support

### 0.5.0

- delivery script
- refactoring
- modified footer
- modified faq
- created store

### 0.6.0

- refactoring
- created missions