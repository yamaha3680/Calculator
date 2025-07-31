import { StyleSheet, Text, View } from 'react-native';
import {
  forwardRef,
  memo,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { useEventCallback } from '../../../../hooks';

const operations = ['+', '-', '*', '/'];
const errorValue = 'Error';

const Calculator = forwardRef<CalculatorRef, CalculatorProps>(
  ({ saveExpression }, ref) => {
    const [expression, setExpression] = useState('');

    const result = useMemo(() => {
      try {
        // eslint-disable-next-line no-eval
        return eval(expression).toString();
      } catch {
        try {
          return expression.slice(0, -1) === ''
            ? ''
            : // eslint-disable-next-line no-eval
              eval(expression.slice(0, -1)).toString();
        } catch {
          return errorValue;
        }
      }
    }, [expression]);

    const addChar = useCallback(
      (char: string) => {
        setExpression(prevState => {
          if (char === '.' && !Number.isInteger(prevState.slice(-1)))
            return saveExpression(prevState + '0.');

          if (
            operations.includes(char) &&
            [...operations, '.'].includes(prevState.slice(-1))
          )
            return saveExpression(prevState.slice(0, -1) + char);

          return saveExpression(prevState + char);
        });
      },
      [saveExpression],
    );

    const deleteChar = useCallback(() => {
      setExpression(prevState => saveExpression(prevState.slice(0, -1)));
    }, [saveExpression]);

    const clear = useCallback(() => {
      setExpression(saveExpression(''));
    }, [saveExpression]);

    const setCurrentExpression = useCallback((value: string) => {
      setExpression(value);
    }, []);

    const setResult = useEventCallback(() => {
      if (result !== errorValue) setExpression(saveExpression(result));
    });

    useImperativeHandle(
      ref,
      () => ({
        addChar,
        deleteChar,
        clear,
        setResult,
        setCurrentExpression,
      }),
      [addChar, deleteChar, clear, setResult, setCurrentExpression],
    );

    return (
      <View style={styles.panelContainer}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  expression: {
    color: 'white',
    fontSize: 22,
  },
  result: {
    color: '#bebebe',
    fontSize: 18,
  },
});

export interface CalculatorRef {
  addChar: (char: string) => void;
  deleteChar: () => void;
  clear: () => void;
  setResult: () => void;
  setCurrentExpression: (value: string) => void;
}

export interface CalculatorProps {
  saveExpression: (value: string) => string;
}

export default memo(Calculator);
