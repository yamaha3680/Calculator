import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { OutputPanel } from './components/OutputPanel';
import { Keyboard } from './components/Keyboard';

const CalculatorWidget = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OutputPanel />
      <Keyboard />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 12,
  },
});

export default CalculatorWidget;
