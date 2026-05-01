import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [result, setResult] = useState<number | null>(null);

  const roll = () => {
    setResult(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      <Text style={styles.result}>{result ?? '–'}</Text>
      <Pressable style={styles.button} onPress={roll}>
        <Text style={styles.buttonText}>Roll</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  result: {
    fontSize: 96,
    fontVariant: ['tabular-nums'],
    minHeight: 110,
  },
  button: {
    backgroundColor: '#1f2937',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
