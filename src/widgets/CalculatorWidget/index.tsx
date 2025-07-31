import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { Calculator, CalculatorRef } from './components/Calculator';
import { Keyboard } from './components/Keyboard';
import { useRef } from 'react';
import { useEventCallback } from '../../hooks';

const CalculatorWidget = () => {
  const outputPanelRef = useRef<CalculatorRef>(null);

  const addChar = useEventCallback((value: string) => {
    if (outputPanelRef.current) outputPanelRef.current.addChar(value);
  });

  const deleteChar = useEventCallback(() => {
    if (outputPanelRef.current) outputPanelRef.current.deleteChar();
  });

  const clear = useEventCallback(() => {
    if (outputPanelRef.current) outputPanelRef.current.clear();
  });

  const setResult = useEventCallback(() => {
    if (outputPanelRef.current) outputPanelRef.current.setResult();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Calculator ref={outputPanelRef} />
      <Keyboard
        addChar={addChar}
        deleteChar={deleteChar}
        clear={clear}
        setResult={setResult}
      />
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
