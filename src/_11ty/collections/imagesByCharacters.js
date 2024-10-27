const chunkCollectionByKey = require("../libs/chunkCollectionByKey.js");

// number of items you want per page
// if that value is not passed, it will default to 10
const ITEMS_PER_PAGE = 20;

module.exports = function (collection) {
  // target collection
  let blogposts = collection.getFilteredByGlob("./src/content/characters/**/*.njk")
                    .sort((a, b) => b.data.category > a.data.category);

  // paginated collection by categories
  return chunkCollectionByKey(blogposts, "character", ITEMS_PER_PAGE);
};
