import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../theme/colors';

// si hero.png aun no existe se ve el placeholder morado
export default function HeroImage({ source = null }) {
  if (!source) {
    return <View style={[styles.img, styles.placeholder]} />;
  }

  return <Image source={source} style={styles.img} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  img: {
    width: '90%',
    height: 320,
    alignSelf: 'center',
  },
  placeholder: {
    backgroundColor: colors.morado,
    borderRadius: 80,
    opacity: 0.8,
  },
});
