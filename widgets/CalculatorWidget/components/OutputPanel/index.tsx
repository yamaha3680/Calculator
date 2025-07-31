import { StyleSheet, Text, View } from 'react-native';

export const OutputPanel = () => {
  return (
    <View style={styles.panelContainer}>
      <Text style={styles.expression}>444+1</Text>
      <Text style={styles.result}>445</Text>
    </View>
  );
};

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
