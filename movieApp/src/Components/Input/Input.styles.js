import {StyleSheet} from 'react-native';
import color from '../../style/color';
import font from '../../style/font';
import radius from '../../style/radius';
import spacing from '../../style/spacing';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.normal,
    justifyContent: 'space-between',
  },
  input_container: {
    paddingVertical: spacing.normal,
  },
  input: {
    borderRadius: radius.smooth,
    paddingVertical: spacing.tiny,
    justifyContent: 'center',
    fontSize: font.subtitle,
    backgroundColor: color.wenge,
  },
  button: {
    borderRadius: radius.smooth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.falu_Red,
    height: 35,
  },
  button_text: {
    fontSize: font.header,
    fontWeight: 'bold',
    color: color.silver_Foil,
  },
});

export default styles;
