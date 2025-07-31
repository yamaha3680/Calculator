import { SafeAreaProvider } from 'react-native-safe-area-context';
import CalculatorWidget from './widgets/CalculatorWidget';

function App() {
  return (
    <SafeAreaProvider>
      <CalculatorWidget />
    </SafeAreaProvider>
  );
}

export default App;
