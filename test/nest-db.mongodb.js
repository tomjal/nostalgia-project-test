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
]);