import React from 'react';

import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

import { Ionicons } from '@expo/vector-icons';

type FloatButtonProps = {
  action: (any: any) => any,
  color?: string,
  icon?: string,
  containerStyle?: {},
  iconStyle?: {}
}

const FloatButton: React.FC<FloatButtonProps> = ({ action, color, icon, containerStyle, iconStyle }) => {

  return (
    <View style={{ ...styles.button_container, ...containerStyle }}>
      <View style={{ ...styles.button_background, ...{ backgroundColor: color ? color : '#1e1e1e' } }}>
        <TouchableOpacity style={styles.button} onPress={action}>
          <Ionicons name={icon ? icon : 'md-send'} size={30} color='#fff' style={iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  )

}

export default FloatButton;
