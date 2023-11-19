const { parse } = require('himalaya');
const fetch = require('node-fetch');

async function getArtworkUrl(appleMusicLink) {
  try {
    const response = await fetch(appleMusicLink);
    const html = await response.text();
    const parsedHtml = parse(html);

    const metaTag = parsedHtml.find(tag => tag.type === 'element' && tag.tagName === 'meta' && tag.attributes.some(attr => attr.key === 'name' && attr.value === 'twitter:image'));

    if (!metaTag) {
      throw new Error('Artwork URL not found in the page source.');
    }

    const artworkUrl = metaTag.attributes.find(attr => attr.key === 'content').value;

    return artworkUrl.replace('/600x600bf-60.jpg', '/1000x1000bf-60.jpg');
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

module.exports = getArtworkUrl;
