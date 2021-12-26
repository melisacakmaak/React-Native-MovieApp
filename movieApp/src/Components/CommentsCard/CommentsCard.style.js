import {StyleSheet} from 'react-native';
import color from '../../style/color';
import font from '../../style/font';
import radius from '../../style/radius';
import spacing from '../../style/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: spacing.normal,
    marginVertical: spacing.min,
    padding: spacing.large,
    backgroundColor: color.charleston_Green,
    borderRadius: radius.sharp,
    borderWidth: 1,
    borderColor: color.eerie_Black,
    flexDirection: 'row',
  },
  comments_text: {
    color: color.silver_Foil,
    fontSize: font.description_title,
    flex: 1,
  },
  icon: {
    paddingRight: spacing.small,
  },
});
export default styles;
