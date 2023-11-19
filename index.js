const axios = require('axios');
const { parse } = require('himalaya');

async function getArtworkUrl(appleMusicLink) {
  try {
    const { data } = await axios.get(appleMusicLink);
    const json = parse(data);

    console.log('Parsed JSON:', JSON.stringify(json, null, 2));

    const artworkUrl = json.find(tag => tag.type === 'element' && tag.tagName === 'meta' && tag.attributes.some(attr => attr.key === 'name' && attr.value === 'twitter:image'));

    if (!artworkUrl) throw new Error('Artwork URL not found in the parsed JSON.');

    // Note: The rest of your code to manipulate the artwork URL as needed

    return artworkUrl;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

module.exports = getArtworkUrl;
