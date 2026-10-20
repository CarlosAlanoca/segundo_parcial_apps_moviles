import { StatusBar } from 'expo-status-bar';
import WelcomeTemplate from '../components/templates/WelcomeTemplate';

export default function WelcomeScreen() {
  return (
    <>
      <WelcomeTemplate
        title={'Jump start your crypto\nportfolio'}
        subtitle={'Take your investment portfolio\nto next level'}
        image={null}
        onPress={() => console.log('Get Started pressed')}
      />
      <StatusBar style="light" />
    </>
  );
}
