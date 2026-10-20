import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';
import { fonts, size } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export default function PrimaryButton({ title = 'Get Started', onPress = () => {} }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.boton, pressed && styles.botonPresionado]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: colors.morado,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.horizontal,
    // sombra morada suave
    shadowColor: colors.morado,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  botonPresionado: {
    opacity: 0.7,
  },
  texto: {
    color: colors.blanco,
    fontSize: size.boton,
    fontFamily: fonts.medium,
  },
});
