const { readFromMetaData } = require("../src/config.js");

const metaDataSet = readFromMetaData();

const getCachedMetaDataSet = () => metaDataSet;

const getCachedMetaCount = () => metaDataSet.length;

module.exports = { getCachedMetaCount, getCachedMetaDataSet };



