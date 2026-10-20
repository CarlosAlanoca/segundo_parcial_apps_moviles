import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import HeroSection from '../organisms/HeroSection';
import WelcomeFooter from '../organisms/WelcomeFooter';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

// SafeAreaView de react-native solo hace efecto en iOS,
// en Android hay que subir el contenido a mano bajo la barra de estado
const paddingTop = Platform.OS === 'android' ? StatusBar.currentHeight + 12 : 16;

export default function WelcomeTemplate({ title, subtitle, image, onPress }) {
  return (
    <View style={[styles.pantalla, { paddingTop }]}>
      <HeroSection logo="Crypt" image={image} />
      <WelcomeFooter title={title} subtitle={subtitle} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: colors.fondo,
    paddingHorizontal: spacing.horizontal,
    justifyContent: 'space-between',
  },
});
