import {StyleSheet} from 'react-native';
import color from '../../style/color';
import font from '../../style/font';
import radius from '../../style/radius';
import spacing from '../../style/spacing';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: color.dark_Charcoal,
    margin: spacing.huge,
    padding: spacing.huge,
    borderWidth: 1,
    borderColor: color.white,
    borderRadius: radius.smooth,
  },
  button: {
    backgroundColor: color.persian_Plum,
    padding: spacing.normal,
    margin: spacing.tiny,
    borderWidth: 1,
    borderColor: color.granite_Gray,
    borderRadius: radius.soft,
  },
  button_text: {
    color: color.gray,
    fontSize: font.subtitle,
    fontWeight: 'bold',
  },
});

export default styles;
