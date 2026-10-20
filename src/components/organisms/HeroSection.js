import { StyleSheet, View } from 'react-native';
import BrandLogo from '../atoms/BrandLogo';
import HeroImage from '../atoms/HeroImage';

export default function HeroSection({ logo = 'Crypt', image = null }) {
  return (
    <View style={styles.seccion}>
      <BrandLogo name={logo} />
      <HeroImage source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  seccion: {
    alignItems: 'flex-start',
    gap: 20,
  },
});
