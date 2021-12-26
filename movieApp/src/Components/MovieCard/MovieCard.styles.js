import {Dimensions, StyleSheet} from 'react-native';
import color from '../../style/color';
import font from '../../style/font';
import radius from '../../style/radius';
import spacing from '../../style/spacing';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    top: 30,
  },
  image: {
    height: height / 1.7,
    resizeMode: 'cover',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderLeftWidth: 7,
    borderColor: color.red,
    borderBottomWidth: 7,
    justifyContent: 'flex-end',
  },
  rate_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.big,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: font.subtitle,
    fontWeight: 'bold',
    color: color.white,
  },
  rate: {
    fontSize: 18,
    paddingLeft: spacing.tiny,
    color: color.gold,
  },
  genre_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: spacing.large,
  },
  genre_text: {
    fontSize: 12,
    paddingHorizontal: spacing.large,
    paddingVertical: spacing.large,
    color: color.white,
  },
  genreBottom_container: {
    backgroundColor: color.granite_Gray,
    borderRadius: radius.smooth,
    margin: spacing.micro,
  },
  brief: {
    fontSize: 12,
    color: color.white,
  },
  director: {
    fontWeight: 'bold',
    fontSize: font.description_title,
    color: color.granite_Gray,
  },
  linear: {
    padding: 10,
  },
});
export default styles;
