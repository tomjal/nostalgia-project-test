/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('nest');

// Insert a few documents into the sales collection.
db.getCollection('games').insertMany([
  {
    'title': 'Chained Echoes',
    'year': 2022,
    'picturesLinks': [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1229240/header.jpg'
    ],
    'description': 'Take up your sword, channel your magic or board your Mech. Chained Echoes is a 16-bit style RPG set in a fantasy world where dragons are as common as piloted mechanical suits.',
    'genre': 'JRPG',
    'platform': 'PC',
    'graphics': '_2D',
    'framerate': 'UNLOCKED',
    'controller': 'GAMEPAD',
    'externalMonitor': 'SecondMonitor',
    'steamDbLink': 'https://steamdb.info/app/1229240/',
  },
  {
    'title': 'Tomb Raider 3',
    'picturesLinks': [
      'https://cdn.cloudflare.steamstatic.com/steam/apps/225320/header.jpg'
    ],
    'description': 'Thousands of years ago a meteor crashed into Antarctica and the shockwaves of its impact are being felt in the modern age. Lara Croft will follow clues leading to a deadly secret, boldly leaping chasms and blasting monsters that no one has leaped or blasted before. This time she faces a mystery thats from way out of this world.',
    'genre': 'TPP',
    'platform': 'PC',
    'graphics': '_3D',
    'steamDbLink': 'https://steamdb.info/app/225320/',
  }
]);