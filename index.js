const axios = require('axios');
const cheerio = require('cheerio');

async function getArtworkUrl(appleMusicLink) {
  try {
    const { data } = await axios.get(appleMusicLink);
    const artworkUrl = cheerio.load(data)('meta[name="twitter:image"]').attr('content');

    if (!artworkUrl) throw new Error('Artwork URL not found in the page source.');

    return artworkUrl.replace('/600x600bf-60.jpg', '/1000x1000bf-60.jpg');
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

module.exports = getArtworkUrl;
