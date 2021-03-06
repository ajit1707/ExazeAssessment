//@flow
import { StyleSheet } from 'react-native';
import colors from '../../utility/colorConstant';

const styles = StyleSheet.create({
  container: {
	height: 50,
    width: 340,
	marginHorizontal: 30,
	borderRadius: 5,
	backgroundColor: colors.buttonBackgrond,
	paddingVertical: 12,
	paddingHorizontal: 15,
	justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
	color: colors.white,
	fontSize: 18,
	fontWeight: 'bold',
  },
});



export default styles;
