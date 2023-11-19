# apple-music-url-info

Resolve Apple Music links to obtain info for use in Discord bots or other applications.

## Installation

You can install this package using npm. Make sure you have Node.js installed.

```npm install github:Nansess/apple-music-url-info```

## Usage
```
const { getArtwork, getMetaData } = require('apple-music-url-info');

// Example 1: Fetch Artwork URL
const exampleArtworkLink = 'https://music.apple.com/us/album/good-kid-m-a-a-d-city-deluxe-version/1440818890';
getArtwork(exampleArtworkLink)
  .then(artworkUrl => {
    console.log('Example 1 - Artwork URL:', artworkUrl);
  })
  .catch(error => {
    console.error('Example 1 - Error:', error.message);
  });

// Example 2: Fetch Metadata
const exampleMetadataLink = 'https://music.apple.com/us/album/good-kid-m-a-a-d-city-deluxe-version/1440818890';
getMetaData(exampleMetadataLink)
  .then(metaData => {
    console.log('Example 2 - Metadata:', metaData);
  })
  .catch(error => {
    console.error('Example 2 - Error:', error.message);
  });
```
## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [cheerio](https://www.npmjs.com/package/cheerio)

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
