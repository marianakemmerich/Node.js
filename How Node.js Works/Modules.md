**REQUIRING MODULES**:
- in node.js, each javascript file is treated as a separate module.
- node.js uses the CommomJS module system: require(), exports or module.exports
- ES (ecma scrypt) module system is used in browsers: import/export
- there have been attempts to bring ES modules to node.js (.mjs)

> In Node.js, each and every module gets access to the require function in order to import modules.

**WHAT HAPPENS WHEN WE REQUIRE A MODULE?**
- the path to require the module is resolved and the file is loaded
- a process called "wrapping" happens
- the module code is executed
- the module exports are returned
- finally, the entire module gets cached

> We can load 3 kinds of modules: node core module, developer modules and 3rd party modules (from NPM).

**HOW NODE DECIDES WHICH NODE TO LOAD**:
- start with core modules
- if it begins with "./" or "../" -> try to load a developer module
- if no file is found -> try to find a folder with "index.js" in it
- else -> go to "node_modules" and try to find the module there
