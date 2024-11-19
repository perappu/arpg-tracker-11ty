const fetch = require("@11ty/eleventy-fetch");

const embed = async (link) => {
  let url = 'https://backend.deviantart.com/oembed?url=' + link;

  try {
    let data = await fetch(url, {
      type: "json"
    });

    //figure out if it's an image or a literature and return accordingly
    //we have to hardcode some styles here because they aren't picked up by tailwind :(
    if (data.thumbnail_url) {
      return "<div class='text-center'>" +
        "<a href='" + link + "'><img style='max-height: 200px; margin: auto;' src='" + data.thumbnail_url + "' /></a>" +
        "<a href='" + link + "'><b>" + data.title + "</b></a><br /> by <a href='" + data.author_url + "'>" + data.author_name + "</a></div>";
    } else {
      return "<div class='literature' style='text-align:justify'>" +
        data.html.substring(0,200) + '...' +
        "</div><div class='text-center'><a href='" + link + "'><b>" + data.title + "</b></a><br /> by <a href='" + data.author_url + "'>" + data.author_name + "</a></div>";
    }


  } catch (error) {
    console.error(`Fetch failed in embed.js. ${error}`);
  }
};

module.exports = embed;
