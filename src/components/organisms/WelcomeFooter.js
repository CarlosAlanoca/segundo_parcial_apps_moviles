import { Platform, StyleSheet, View } from 'react-native';
import WelcomeTextBlock from '../molecules/WelcomeTextBlock';
import PrimaryButton from '../atoms/PrimaryButton';
import { spacing } from '../../theme/spacing';

// en Android hay mas margen abajo para que no choque con la barra de navegacion
const paddingBottom = Platform.OS === 'android' ? 72 : spacing.abajoBoton;

export default function WelcomeFooter({ title, subtitle, onPress }) {
  return (
    <View style={styles.footer}>
      <WelcomeTextBlock title={title} subtitle={subtitle} />
      <PrimaryButton title="Get Started" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    gap: 30,
    paddingBottom: paddingBottom,
  },
});
