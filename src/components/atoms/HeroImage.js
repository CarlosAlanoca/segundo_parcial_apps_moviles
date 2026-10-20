import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';

// si hero.png aun no existe se ve un circulo morado de relleno
export default function HeroImage({ source = null }) {
  if (!source) {
    return (
      <View style={styles.contenedorPlaceholder}>
        <View style={styles.placeholder} />
        <View style={styles.placeholderChico} />
      </View>
    );
  }

  return <Image source={source} style={styles.img} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 340,
  },
  contenedorPlaceholder: {
    width: '100%',
    height: 340,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.morado,
    opacity: 0.9,
  },
  placeholderChico: {
    position: 'absolute',
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#9B87FF',
    opacity: 0.7,
  },
});
