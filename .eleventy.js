module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  })

  eleventyConfig.addBundle("js");

  // blogposts collection
  eleventyConfig.addCollection(
    "images",
    require("./src/_11ty/collections/images.js")
  );

  // blogposts unique categories
  eleventyConfig.addCollection(
    "characters",
    require("./src/_11ty/collections/characters.js")
  );

  // blogposts by categories
  eleventyConfig.addCollection(
    "imagesByCharacters",
    require("./src/_11ty/collections/imagesByCharacters.js")
  );

    // Create an array of all tags
    eleventyConfig.addCollection('characterCategories', function (collection) {
      let categorySet = new Set();
      collection.getFilteredByGlob("./src/content/characters/**/*.md").forEach((item) => {
        (item.data.category || []).forEach((category) => categorySet.add(category));
      });
  
      return [...categorySet];
    });

    eleventyConfig.addFilter('byCategory', function(collection, category) {
      if (!category) return collection;
        const filtered = collection.filter(item => item.data.category == category)
        return filtered;
    });

    eleventyConfig.addFilter('byCharacter', function(collection, character) {
      if (!character) return collection;
        const filtered = collection.filter(item => item.data.character == character)
        return filtered;
    });

    eleventyConfig.addFilter('embed', require("./src/_11ty/filters/embed.js"));
    eleventyConfig.addFilter('embedImageOnly', require("./src/_11ty/filters/embedImageOnly.js"));
    eleventyConfig.addFilter('cpTotal', require("./src/_11ty/filters/cptotal.js"));


  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  };
}

