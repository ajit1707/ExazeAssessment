//@flow
import React from 'react';
import {TextInput as RNTextInput, View, Image} from 'react-native';
import styles from './styles';
import colors from '../../utility/colorConstant';

type Props = {
  containerStyle: any,
  image: String,
};

function TextInput(props:Props){
  const {containerStyle, image} = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <Image style={styles.leftImage} source={image} />
      <RNTextInput
        style={[styles.defaultStyle]}
        testID="input_name"
        placeholderTextColor={colors.white}
        {...props}
      />
    </View>
  );
};

export default TextInput;
