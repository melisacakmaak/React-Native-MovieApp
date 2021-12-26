import {StyleSheet} from 'react-native';
import color from '../../style/color';
import spacing from '../../style/spacing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.chinese_Black,
    flex: 1,
  },
  button: {
    alignItems: 'flex-end',
    paddingRight: spacing.normal,
  },
});
export default styles;
