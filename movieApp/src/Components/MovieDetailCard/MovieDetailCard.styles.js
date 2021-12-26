import {StyleSheet} from 'react-native';
import color from '../../style/color';
import font from '../../style/font';
import radius from '../../style/radius';
import spacing from '../../style/spacing';

const styles = StyleSheet.create({
  container: {
    margin: spacing.tiny,
    padding: spacing.small,
    borderRadius: radius.sharp,
    borderBottomWidth: 5,
    borderColor: color.red,
    paddingRight: spacing.huge,
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.huge,
    paddingRight: spacing.large,
  },
  name: {
    fontSize: font.main_title,
    fontWeight: 'bold',
    color: color.white,
    paddingRight: spacing.large,
  },
  rate_container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.dark_Charcoal,
    borderRadius: radius.soft,
    paddingHorizontal: spacing.tiny,
  },
  rate: {
    fontSize: font.subtitle,
    paddingLeft: spacing.tiny,
    color: color.gold,
  },
  genre_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.tiny,
  },
  genreBottom_container: {
    backgroundColor: color.dark_Charcoal,
    borderRadius: radius.sharp,
    borderColor: color.deep_carminePink,
    borderWidth: 0.5,
    marginRight: spacing.tiny,
  },
  genre_text: {
    fontSize: font.subtitle,
    color: color.white,
    padding: spacing.tiny,
  },
  brief: {
    fontSize: font.subtitle,
    paddingVertical: spacing.normal,
    color: color.gray,
    fontStyle: 'italic',
  },

  cast_container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: spacing.tiny,
  },
  cast_bottomContainer: {
    flexDirection: 'row',
    marginBottom: spacing.tiny,
  },
  cast: {
    color: color.gray,
    margin: 3,
    padding: 5,
    textAlign: 'center',
  },
  director_container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: spacing.normal,
  },
  director: {
    color: color.gray,
  },
  cast_icon_container: {
    alignItems: 'center',
    flex: 1,
    margin: 3,
  },
});
export default styles;
