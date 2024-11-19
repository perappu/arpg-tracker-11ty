const fetch = require("@11ty/eleventy-fetch");

const embed = async (link) => {
  let url = 'https://backend.deviantart.com/oembed?url=' + link;

  try {
    let data = await fetch(url, {
      type: "json"
    });

    return "<img style='margin:0px;' src='" + data.url +"' /></a>";
  } catch (error) {
    console.error(`Fetch failed in embed.js. ${error}`);
  }
};

module.exports = embed;
