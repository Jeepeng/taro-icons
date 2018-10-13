/**
 * Created by Jeepeng on 2018/10/13.
 */
import Taro, { PureComponent } from '@tarojs/taro';
import { Text } from '@tarojs/components';

import BaseIcon from './BaseIcon';

class Ionicons extends PureComponent {
  render() {
    const { name, color, size } = this.props;
    return (
      <BaseIcon
        prefixClass='ion'
        name={name}
        color={color}
        size={size}
      />
    );
  }
}

export default Ionicons;
