import { SafeAreaView, StyleSheet } from 'react-native';
import HeroSection from '../organisms/HeroSection';
import WelcomeFooter from '../organisms/WelcomeFooter';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

export default function WelcomeTemplate({ title, subtitle, image, onPress }) {
  return (
    <SafeAreaView style={styles.pantalla}>
      <HeroSection logo="Crypt" image={image} />
      <WelcomeFooter title={title} subtitle={subtitle} onPress={onPress} />
    </SafeAreaView>
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
