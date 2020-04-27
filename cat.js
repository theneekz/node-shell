function cat(filename) {
  const fs = require('fs');
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.log('Error: ', err.stack);
    } else {
      console.log(data);
      process.stdout.write('\nprompt >');
    }
  });
}

module.exports = cat;
