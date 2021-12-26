import {ColorPropType, Dimensions, StyleSheet} from 'react-native';
import color from '../../style/color';
import font from '../../style/font';
import radius from '../../style/radius';
import spacing from '../../style/spacing';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: width / 2,
    backgroundColor: color.charleston_Green,
    marginLeft: spacing.normal,
    borderRadius: radius.sharp,
    padding: spacing.normal,
    borderColor: color.red,
    borderBottomWidth: 5,
    borderLeftWidth: 1,
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: font.subtitle,
  },
  director: {
    fontWeight: 'bold',
    fontSize: font.description_title,
    color: color.granite_Gray,
  },
  bottom_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  genre_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.tiny,
  },
  genreBottom_container: {
    backgroundColor: color.granite_Gray,
    borderRadius: radius.smooth,
    marginRight: spacing.micro,
  },
  genre_text: {
    fontSize: font.description_title,
    paddingHorizontal: spacing.normal,
    paddingVertical: spacing.micro,
    color: color.white,
  },
  brief_text: {
    color: color.silver_Foil,
    fontSize: font.description_title,
  },
  rate_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.tiny,
  },
  rate_text: {
    fontSize: font.rating_title,
    marginLeft: spacing.tiny,
    color: color.gold,
    fontWeight: 'bold',
  },
});
export default styles;
