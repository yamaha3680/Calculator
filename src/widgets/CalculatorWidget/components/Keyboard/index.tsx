import { StyleSheet, View } from 'react-native';
import { KeyButton } from '../KeyButton';
import { FC } from 'react';

export const Keyboard: FC<KeyboardProps> = ({
  addChar,
  clear,
  deleteChar,
  setResult,
}) => {
  return (
    <View style={styles.keyboardView}>
      <View style={styles.row}>
        <KeyButton value={'C'} onPress={clear} />
        <KeyButton value={'/'} addChar={addChar} />
        <KeyButton value={'*'} addChar={addChar} />
        <KeyButton value={'DEL'} onPress={deleteChar} />
      </View>
      <View style={styles.row}>
        <KeyButton value={'7'} addChar={addChar} />
        <KeyButton value={'8'} addChar={addChar} />
        <KeyButton value={'9'} addChar={addChar} />
        <KeyButton value={'-'} addChar={addChar} />
      </View>
      <View style={styles.row}>
        <KeyButton value={'4'} addChar={addChar} />
        <KeyButton value={'5'} addChar={addChar} />
        <KeyButton value={'6'} addChar={addChar} />
        <KeyButton value={'+'} addChar={addChar} />
      </View>
      <View style={styles.row}>
        <KeyButton value={'1'} addChar={addChar} />
        <KeyButton value={'2'} addChar={addChar} />
        <KeyButton value={'3'} addChar={addChar} />
        <KeyButton value={'='} onPress={setResult} />
      </View>
      <View style={styles.row}>
        <View style={styles.phantomKey} />
        <KeyButton value={'0'} addChar={addChar} />
        <KeyButton value={'.'} addChar={addChar} />
        <View style={styles.phantomKey} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  phantomKey: {
    flex: 1,
    aspectRatio: 1,
  },
});

interface KeyboardProps {
  addChar: (char: string) => void;
  deleteChar: () => void;
  clear: () => void;
  setResult: () => void;
}
