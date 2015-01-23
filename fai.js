var fis = module.exports = require('fis');

fis.cli.name = 'fai';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

// fis.config.merge({
//     roadmap : {
//         ext : {
//             md : 'html'
//         }
//     },
//     modules : {
//         parser : {
//             md : 'marked'
//         }
//     }
// });

