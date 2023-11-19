const axios = require('axios');
const cheerio = require('cheerio');

async function getArtwork(appleMusicLink) {
  try {
    const { data } = await axios.get(appleMusicLink);

    const $ = cheerio.load(data);

    const artworkUrl = $('meta[name="twitter:image"]').attr('content');
    if (!artworkUrl) {
      throw new Error('Artwork URL not found in the page source.');
    }

    return artworkUrl.replace('/600x600bf-60.jpg', '/1000x1000bf-60.jpg');
  } catch (error) {
    throw new Error(`Failed to fetch artwork from Apple Music link. ${error.message}`);
  }
}

async function getMetaData(appleMusicLink) {
  try {
    const { data } = await axios.get(appleMusicLink);

    const $ = cheerio.load(data);

    const title = $('meta[property="og:title"]').attr('content');
    const description = $('meta[property="og:description"]').attr('content');
    const siteName = $('meta[property="og:site_name"]').attr('content');
    const url = $('meta[property="og:url"]').attr('content');
    const imageAlt = $('meta[property="og:image:alt"]').attr('content');
    const type = $('meta[property="og:type"]').attr('content');
    const locale = $('meta[property="og:locale"]').attr('content');

    const durationMatch = description.match(/Duration: (\d+:\d+)/);
    const duration = durationMatch ? durationMatch[1] : '';

    const songsMatch = description.match(/Playlist · (\d+) Songs/);
    const numberOfSongs = songsMatch ? parseInt(songsMatch[1]) : 0;

    return {
      title,
      description: `Listen to ${title} by ${siteName} on Apple Music. ${description.replace(`. Duration: ${duration}`, '')}`,
      url,
      imageAlt,
      type,
      locale,
      duration,
      numberOfSongs, 
    };
  } catch (error) {
    throw new Error(`Failed to fetch metadata from Apple Music link. ${error.message}`);
  }
}

module.exports = {
  getArtwork,
  getMetaData,
};
