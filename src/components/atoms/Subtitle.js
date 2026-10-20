import { StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts, size } from '../../theme/typography';

export default function Subtitle({ text = '' }) {
  return <Text style={styles.texto}>{text}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    color: colors.blanco,
    fontSize: size.subtitulo,
    fontFamily: fonts.regular,
  },
});
