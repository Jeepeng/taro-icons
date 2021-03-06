/**
 * Created by Jeepeng on 2018/10/12.
 */
const fs = require('fs');

const { mkdirsSync } = require('./utils');

const FONTS_PATH = './src/asset/fonts';
const OUTPUT_PATH = './scss/data';
const nameMapping = {
  'MaterialIcons-Regular': 'MaterialIcons',
  'materialdesignicons-webfont': 'MaterialCommunityIcons',
  'ionicons': 'Ionicons',
  'fa-brands-400': 'FontAwesome-Brands',
  'fa-regular-400': 'FontAwesome-Regular',
  'fa-solid-900': 'FontAwesome-Solid',
};

const files = fs.readdirSync(FONTS_PATH).filter(name => name !== '.DS_Store');
files.forEach(file => {
  fs.readFile(`${FONTS_PATH}/${file}`, (err, data) => {
    if (err) console.log(`读取文件${file}失败: ${err}`);
    else {
      const base64 = data.toString('base64');
      let name = file.replace(/(.*\/)*([^.]+).*/ig,"$2");
      name = nameMapping[name];
      const ext = file.replace(/.+\./,'');
      let outputPath = OUTPUT_PATH;
      if (ext === 'woff2') {
        outputPath += '/v2'
      }
      mkdirsSync(outputPath);
      fs.writeFileSync(`${outputPath}/${name}.scss`, `$${name}: url('data:font/${ext};base64,${base64}') format('${ext}')`);
    }
  });
});
