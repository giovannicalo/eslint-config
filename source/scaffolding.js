const node = require("./node");
const scaffoldingFiles = require("./scaffolding-files");

const scaffolding = {
	...node,
	files: scaffoldingFiles
};

module.exports = scaffolding;
