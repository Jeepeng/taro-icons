
const fs = require('fs');
const path = require('path');

function mkdirsSync(dir) {
  if (fs.existsSync(dir)) {
    return true;
  }
  if (mkdirsSync(path.dirname(dir))) {
    fs.mkdirSync(dir);
    return true;
  }
}

module.exports = {
  mkdirsSync,
};
