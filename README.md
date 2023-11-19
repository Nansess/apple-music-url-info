# apple-music-url-info

Resolve Apple Music links to obtain info for use in Discord bots or other applications.

## Installation

You can install this package using npm. Make sure you have Node.js installed.

```npm install github:Nansess/apple-music-url-info```

## Usage

## Example 1: Fetch Artwork URL
```
const { getArtwork, getMetaData } = require('apple-music-url-info');
const exampleArtworkLink = 'https://music.apple.com/us/album/good-kid-m-a-a-d-city-deluxe-version/1440818890';
getArtwork(exampleArtworkLink)
  .then(artworkUrl => {
    console.log('Example 1 - Artwork URL:', artworkUrl);
  })
  .catch(error => {
    console.error('Example 1 - Error:', error.message);
  });
```

## Example 2: Fetch Metadata
```
const exampleMetadataLink = 'https://music.apple.com/us/album/good-kid-m-a-a-d-city-deluxe-version/1440818890';
getMetaData(exampleMetadataLink)
  .then(metaData => {
    console.log('Example 2 - Metadata:', metaData);
  })
  .catch(error => {
    console.error('Example 2 - Error:', error.message);
  });
```
##Output Examples
## Metadata
```
Metadata: {
  title: 'Bitch, Don’t Kill My Vibe by Kendrick Lamar',
  description: 'Listen to Bitch, Don’t Kill My Vibe by Kendrick Lamar by Apple Music - Web Player on Apple Music. Listen to Bitch, Don’t Kill My Vibe by Kendrick Lamar on Apple Music. 2012',
  url: 'https://music.apple.com/us/album/good-kid-m-a-a-d-city-deluxe-version/1440818890',
  imageAlt: 'Bitch, Don’t Kill My Vibe by Kendrick Lamar',
  type: 'music.song',
  locale: 'en_US',
  duration: '5:10'
}
```
## Artwork URL

```
Artwork URL: https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/ca/5b/c0/ca5bc0b3-d81d-cc6c-0d19-54b9eedb6dbd/12UMGIM52990.rgb.jpg/1000x1000bf-60.jpg
```

## Why Two Functions why not one

cause i can and cuz im lazy

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [cheerio](https://www.npmjs.com/package/cheerio)

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
