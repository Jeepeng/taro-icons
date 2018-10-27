/**
 * Created by Jeepeng on 2018/10/12.
 */
const fs = require('fs');

const { mkdirsSync } = require('./utils');

const ijmap = require('../src/asset/json/MaterialIcons-Regular.json');

const OUTPUT_PATH = './scss/content';

const icons = ijmap && ijmap.icons || {};
const prefixName = 'md';
const classes = [];
for (let icon in icons) {
  const name = icons[icon].name.toLowerCase().replace(/ /g, '-');
  const classItem = `.${prefixName}-${name}:before{content:"\\${icon}"}`;
  classes.push(classItem);
}
mkdirsSync(OUTPUT_PATH);
fs.writeFileSync(`${OUTPUT_PATH}/MaterialIcons.scss`, `${classes.join('')}`);

