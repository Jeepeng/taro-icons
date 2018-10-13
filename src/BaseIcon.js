/**
 * Created by Jeepeng on 2018/10/12.
 */
import Taro, { PureComponent } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import PropTypes from 'prop-types'

class BaseIcon extends PureComponent {
  static options = {
    addGlobalClass: true
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
  };
  static defaultProps = {
    color: '#000000',
    size: 24,
  };
  render() {
    const { prefixClass, name, color, size } = this.props;
    const className = `${prefixClass} ${prefixClass}-${name}`;
    const style = `font-size:${size}px;color:${color};`;
    return (
      <Text
        className={className}
        value={name}
        style={style}
      />
    );
  }
}

export default BaseIcon;
