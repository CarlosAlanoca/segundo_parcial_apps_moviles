import { StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts, size } from '../../theme/typography';

export default function BrandLogo({ name = 'Crypt' }) {
  return (
    <Text style={styles.logo}>
      {name}
      <Text style={styles.x}>X</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: colors.blanco,
    fontSize: size.logo,
    fontFamily: fonts.bold,
  },
  x: {
    color: colors.morado,
  },
});
