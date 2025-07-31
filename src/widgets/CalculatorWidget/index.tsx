import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Calculator, { CalculatorRef } from './components/Calculator';
import Keyboard from './components/Keyboard';
import { useCallback, useEffect, useRef } from 'react';
import { useEventCallback } from '../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CalculatorWidget = () => {
  const calculatorRef = useRef<CalculatorRef>(null);

  const addChar = useEventCallback((value: string) => {
    if (calculatorRef.current) calculatorRef.current.addChar(value);
  });

  const deleteChar = useEventCallback(() => {
    if (calculatorRef.current) calculatorRef.current.deleteChar();
  });

  const clear = useEventCallback(() => {
    if (calculatorRef.current) calculatorRef.current.clear();
  });

  const setResult = useEventCallback(() => {
    if (calculatorRef.current) calculatorRef.current.setResult();
  });

  const saveExpression = useCallback((value: string) => {
    console.log(value);
    AsyncStorage.setItem('last-expression', value);

    return value;
  }, []);

  useEffect(() => {
    try {
      AsyncStorage.getItem('last-expression').then(value => {
        if (calculatorRef.current && typeof value === 'string')
          calculatorRef.current.setCurrentExpression(value);
      });
    } catch {}
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Calculator ref={calculatorRef} saveExpression={saveExpression} />
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
