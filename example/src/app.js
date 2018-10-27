import Taro, { Component } from '@tarojs/taro'

// 请根据需要选择导入的 scss，这里全部导入
import 'taro-icons/scss/MaterialCommunityIcons.scss' // 386KB
import 'taro-icons/scss/MaterialIcons.scss' // 112KB
import 'taro-icons/scss/Ionicons.scss' // 131KB
import 'taro-icons/scss/fontawesome.scss' // 131KB

import Index from './pages/index'
import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
