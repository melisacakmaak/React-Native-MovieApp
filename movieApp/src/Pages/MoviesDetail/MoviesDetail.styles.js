import {StyleSheet} from 'react-native';

import color from '../../style/color';
import font from '../../style/font';
import spacing from '../../style/spacing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.black,
  },
  movieCard_container: {
    paddingTop: spacing.giant,
  },
  recommended_container: {
    paddingRight: spacing.normal,
  },
  text: {
    fontSize: font.header,
    color: color.persian_Plum,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: spacing.normal,
  },
  comment_container: {
    paddingVertical: spacing.huge,
    bottom: spacing.huge,
  },
  firstComment_text: {
    fontSize: font.header,
    padding: spacing.tiny,
    textAlign: 'center',
    color: color.wenge,
  },
  linear: {
    ...StyleSheet.absoluteFill,
  },
  animated_header_component: {
    position: 'absolute',
    left: spacing.zero,
    right: spacing.zero,
  },
  image: {
    height: 250,
  },
});
export default styles;
