import { StyleSheet, View } from 'react-native';
import { KeyButton } from '../KeyButton';

export const Keyboard = () => {
  return (
    <View style={styles.keyboardView}>
      <View style={styles.row}>
        <KeyButton label={'C'} />
        <KeyButton label={'/'} />
        <KeyButton label={'*'} />
        <KeyButton label={'DEL'} />
      </View>
      <View style={styles.row}>
        <KeyButton label={'7'} />
        <KeyButton label={'8'} />
        <KeyButton label={'9'} />
        <KeyButton label={'-'} />
      </View>
      <View style={styles.row}>
        <KeyButton label={'4'} />
        <KeyButton label={'5'} />
        <KeyButton label={'6'} />
        <KeyButton label={'+'} />
      </View>
      <View style={styles.row}>
        <KeyButton label={'1'} />
        <KeyButton label={'2'} />
        <KeyButton label={'3'} />
        <KeyButton label={'='} />
      </View>
      <View style={styles.row}>
        <View style={styles.phantomKey} />
        <KeyButton label={'0'} />
        <KeyButton label={','} />
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
