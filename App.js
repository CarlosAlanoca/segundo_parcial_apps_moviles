import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrimaryButton from './src/components/atoms/PrimaryButton';
import { colors } from './src/theme/colors';

export default function App() {
  return (
    <View style={styles.container}>
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
  },
});
