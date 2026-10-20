import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from './src/components/atoms/PrimaryButton';
import WelcomeTextBlock from './src/components/molecules/WelcomeTextBlock';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeTextBlock
        title={'Jump start your crypto\nportfolio'}
        subtitle={'Take your investment portfolio\nto next level'}
      />
      <PrimaryButton title="Get Started" onPress={() => console.log('Get Started pressed')} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
    justifyContent: 'center',
    gap: 40,
    paddingHorizontal: spacing.horizontal,
  },
});
