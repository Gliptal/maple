MAPLE DESIGN
======

New design for the [Maple Flag](http://www3.sympatico.ca/tlaschuk/mapleflagmissions/) website. The only acceptable files are static `.html` pages, `.css` stylesheets, or `.js` scripts: hence this node.js infrastructure acts as a framework to more conveniently code the relevant files via [jade](http://jade-lang.com/) and [stylus](http://learnboost.github.io/stylus/). The prototype is available at [https://gliptal.github.io/home](https://gliptal.github.io/home).

FRAMEWORK
======

Requires a working [node.js](https://nodejs.org/en/) installation.

Although not listed in `package.json`, the following node.js modules are required since they are either dependent on or strongly suggest a global installation.

- [nodemon](http://nodemon.io/): `npm install -g nodemon`

Required node packages are not included in the repo, and must thus be installed using npm.

- Set up environment: `npm install`

The following commands are available in the project's folder:

- Start server (developing): `npm test`
- Start server (production): `npm start`
- Generate static files: `npm run deliver`

STATIC FILES
======

The `deliver.js` script generates the required static files directly from the framework, automatically delivering them in an appropriate folder structure inside `\STATIC`. The best method to modify the website is thus to utilize this framework, avoiding manually editing the single static `.html`, `.css`, or `.js` files on the remote server:

- Run the local node.js server: `npm test`
- Make the modifications: the server will automatically restart if needed. Note that if the only variations are in content (not in structure or design) it should be sufficient to modify the files in `locales\en` (one per webpage), provided their current structure is followed.
- Stop the local node.js server: `CTRL-C` `CTRL-C`
- Run the delivery script: `npm run deliver`
- Copy the generated static files from `\STATIC` to the remote server

PLUGINS
======

The following plugins are used clientside:

- [jQuery](https://jquery.com/)
- [viewport](http://www.appelsiini.net/projects/viewport)
- [jQuery dateFormat](https://github.com/phstc/jquery-dateFormat)

CONTACTS
======

- Design: [Mattia Affabris](https://github.com/Gliptal)
- Frontend: [Mattia Affabris](https://github.com/Gliptal)
- Content: [MapleFlagMissions.ca](mailto:mapleflagmissions@gmail.com)
- Advisors: [Federico Baldessari](http://new.atletica.me/) - [Alessandro Pezzé](https://github.com/Naramsim)

LICENSE
======

[![license](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/)

Maple Design by [Mattia Affabris](mailto:affa@outlook.it) is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

Based on a work at [https://github.com/Gliptal/maple](https://github.com/Gliptal/maple).

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
- added sticky header
- modified home
- created faq

### 0.3.0

- refactoring
- added transitions
- added sticky footer
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

- refactoring
- created deliver.js script
- modified footer
- modified faq
- created store

### 0.6.0

- refactoring
- created missions

### 0.7.0

- modified missions
- added sidebar

### 1.0.0

- code overhaul
- refactoring
- working prototype
- modified deliver.js script
- modified missions
- modified sidebar

### 1.0.1

- store page fix

### 1.1.0

- added license
- integrated github API
- modified design
- paypal links fix