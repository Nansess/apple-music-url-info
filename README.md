# apple-music-url-info

Resolve Apple Music links to obtain info for use in Discord bots or other applications.

## Installation

You can install this package using npm. Make sure you have Node.js installed.

```npm install github:Nansess/apple-music-url-info```

## Usage
```
const getArtworkUrl = require('apple-music-url-info');

const appleMusicLink = 'https://music.apple.com/us/album/example-album/1234567890';
getArtworkUrl(appleMusicLink)
  .then(artworkUrl => {
    console.log('Artwork URL:', artworkUrl);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```
## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [cheerio](https://www.npmjs.com/package/cheerio)

## Contributing

Feel free to contribute by opening issues or submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
