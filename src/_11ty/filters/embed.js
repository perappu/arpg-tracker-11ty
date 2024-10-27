const fetch = require("@11ty/eleventy-fetch");

const embed = async (link) => {
  let url = 'https://backend.deviantart.com/oembed?url=' + link;

  try {
    let data = await fetch(url, {
      type: "json"
    });

    return "<div class='text-center'><a href='" + link + "'><img class='mx-auto' src='" + data.thumbnail_url +"' /></a>" +
    "<a href='" + link + "'><b>" + data.title + "</b></a><br /> by <a href='" + data.author_url + "'>" + data.author_name + "</a></div>";
  } catch (error) {
    console.error(`Fetch failed in embed.js. ${error}`);
  }
};

module.exports = embed;
