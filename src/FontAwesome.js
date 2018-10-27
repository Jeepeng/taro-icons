/**
 * Created by Jeepeng on 2018/10/25.
 */

import Taro, { PureComponent } from '@tarojs/taro';
import { Text } from '@tarojs/components';
import PropTypes from 'prop-types'

class FontAwesome extends PureComponent {
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
    family: 'solid',
  };
  iconSetFromFamily(family = 'brands') {
    switch (family.toLowerCase()) {
      case 'brands':
        return 'fab';
      case 'regular':
        return 'far';
      case 'solid':
        return 'fas';
      case 'light':
        return 'fal';
      default:
        return 'fab';
    }
  }
  render() {
    const { family, name, color, size } = this.props;
    let iconFamilyClass = this.iconSetFromFamily(family);
    const className = `${iconFamilyClass} fa-${name}`;
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
export default FontAwesome;
