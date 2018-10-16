import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from 'taro-icons'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'taro-icons'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='container'>
        <View className='item'>
          <View className='title'>MaterialIcons</View>
          <View className='icons'>
            <MaterialIcons name='settings' size={32} color='#000000' />
            <MaterialIcons name='add-shopping-cart' size={32} color='#000000' />
            <MaterialIcons name='alarm' size={32} color='#123456' />
            <MaterialIcons name='android' size={32} color='green' />
            <MaterialIcons name='build' size={32} color='#000000' />
            <MaterialIcons name='backup' size={32} color='green' />
            <MaterialIcons name='favorite' size={32} color='red' />
            <MaterialIcons name='thumb-up' size={32} />
            <MaterialIcons name='thumb-down' size={32} />
            <MaterialIcons name='wifi' size={32} />
            <MaterialIcons name='star' size={32} />
            <MaterialIcons name='share' size={32} />
            <MaterialIcons name='more' size={32} />
          </View>
          <View>
            <Text className='text'>共 935 个icons</Text>
            <Text className='text'>打包后大小 112KB</Text>
          </View>
        </View>
        <View className='item'>
          <View className='title'>MaterialCommunityIcons</View>
          <View className='icons'>
          <MaterialCommunityIcons name='account' size={32} color='#000000' />
            <MaterialCommunityIcons name='airplane' size={32} color='#000000' />
            <MaterialCommunityIcons name='apple' size={32} color='#000000' />
            <MaterialCommunityIcons name='android' size={32} color='#000000' />
            <MaterialCommunityIcons name='apple-safari' size={32} color='#000000' />
            <MaterialCommunityIcons name='briefcase' size={32} color='#000000' />
            <MaterialCommunityIcons name='camera' size={32} color='#000000' />
            <MaterialCommunityIcons name='camcorder' size={32} />
            <MaterialCommunityIcons name='dots-horizontal' size={32} />
          </View>
          <View>
            <Text className='text'>共 2906 个icons</Text>
            <Text className='text'>打包后大小 386KB</Text>
          </View>
        </View>
        <View className='item'>
          <View className='title'>Ionicons</View>
          <View className='icons'>
            <Ionicons style='margin:0 10px;' name='md-aperture' size={32} color='#000000' />
            <Ionicons style='margin:0 10px;' name='md-basketball' size={32} color='#000000' />
            <Ionicons style='margin:0 10px;' name='ios-woman' size={32} color='pink' />
            <Ionicons style='margin:0 10px;' name='ios-umbrella' size={32} />
            <Ionicons style='margin:0 10px;' name='ios-more' size={32} />
          </View>
          <View>
            <Text className='text'>共 696 个icons</Text>
            <Text className='text'>打包后大小 131KB</Text>
          </View>
        </View>
        <View className='item'>
          <View className='title'>FontAwesome</View>
          <View>
            <Text className='text'>稍后支持</Text>
          </View>
        </View>
      </View>
    )
  }
}

