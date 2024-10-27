module.exports = (collection) => {
  return collection.getFilteredByGlob("./src/content/characters/**/*.njk");
};
