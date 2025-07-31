import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';

export const KeyButton: FC<KeyButtonProps> = ({ value, onPress, addChar }) => {
  const action = () => {
    if (onPress) {
      onPress();
    } else {
      if (addChar) addChar(value);
    }
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={action}>
      <Text style={styles.label}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#383838',
    borderRadius: 8,
  },
  label: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 24,
  },
});

interface KeyButtonProps {
  value: string;
  addChar?: (char: string) => void;
  onPress?: () => void;
}
