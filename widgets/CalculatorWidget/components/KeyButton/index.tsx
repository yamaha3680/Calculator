import { Pressable, StyleSheet, Text } from 'react-native';
import { FC } from 'react';

export const KeyButton: FC<KeyButtonProps> = ({ label }) => {
  return (
    <Pressable style={styles.buttonContainer}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
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
  label: string;
}
