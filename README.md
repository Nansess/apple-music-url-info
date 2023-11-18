# Apple Music Artwork Resolver

Resolve Apple Music links to obtain artwork URLs for use in Discord bots or other applications.

## Installation

You can install this package using npm. Make sure you have Node.js installed.

```bash
npm install github:Nansess/apple-music-artwork

## Usage

```const { getArtworkUrl } = require('apple-music-artwork');

const appleMusicLink = 'https://music.apple.com/us/album/example-album/1234567890';
getArtworkUrl(appleMusicLink)
  .then(artworkUrl => {
    console.log('Artwork URL:', artworkUrl);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```
