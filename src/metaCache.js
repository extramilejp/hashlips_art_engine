const { readFromMetaData } = require("../src/config.js");

const metaDataSet = readFromMetaData();

const getCachedMetaDataSet = () => metaDataSet;

module.exports = { getCachedMetaDataSet };



