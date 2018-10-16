# taro-icons
基于 Taro 的小程序图标库

## 安装
```shell
npm install taro-icons --save
```
## 使用
在 `app.js` 中导入你需要的图标库`scss` 文件，如 `MaterialIcons`:
```js
// app.js
import 'taro-icons/scss/MaterialIcons.scss';
```

然后在需要用到图标的地方引入对应d的`component`使用:
```js
import { MaterialIcons } from 'taro-icons';
...

<MaterialIcons name='settings' size={24} color='#000000' />
```
其中`name`必填，可以在对应的网站上找到

## Icon props
| 属性 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| name | 需要显示的图标名称，可以在对应图标库网站找到 | String |  |
| size | 图标大小（px） | Number | 24 |
| color | 图标颜色 | String | #000000 |


## 支持的图标库:
- [x] [Ionicons](https://ionicons.com/) v4.4.4  ～131KB
- [x] [MaterialIcons](https://material.io/tools/icons/) v3.0.1  ～112KB
- [x] [MaterialCommunityIcons](https://materialdesignicons.com/)  ～386KB
- [ ] [FontAwesome](https://fontawesome.com/)
