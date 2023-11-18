const axios = require('axios');
const cheerio = require('cheerio');

async function getArtworkUrl(appleMusicLink) {
  try {
    const response = await axios.get(appleMusicLink);
    const $ = cheerio.load(response.data);
    let artworkUrl = $('meta[name="twitter:image"]').attr('content');

    if (!artworkUrl) {
      throw new Error('Artwork URL not found in the page source.');
    }

    artworkUrl = artworkUrl.replace('/600x600bf-60.jpg', '/1000x1000bf-60.jpg');

    return artworkUrl;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

module.exports = getArtworkUrl;
