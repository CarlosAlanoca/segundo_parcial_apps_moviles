import { StyleSheet, View } from 'react-native';
import Heading from '../atoms/Heading';
import Subtitle from '../atoms/Subtitle';
import { spacing } from '../../theme/spacing';

export default function WelcomeTextBlock({ title = '', subtitle = '' }) {
  return (
    <View style={styles.bloque}>
      <Heading text={title} />
      <Subtitle text={subtitle} />
    </View>
  );
}

const styles = StyleSheet.create({
  bloque: {
    gap: spacing.bajoTitulo,
  },
});
