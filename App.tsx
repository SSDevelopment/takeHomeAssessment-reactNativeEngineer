
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default function App() {

  const [numSides, setNumSides] = useState<number | string | undefined>(6);
  const [isNumberOfDiceHidden, setIsNumberOfDiceHidden] = useState(true);
  const [dieNumber, setDieNumber] = useState<string[]>([]);
  const [isNumberOfSidesHidden, setIsNumberOfSidesHidden] = useState(true);
  const [numberOfDice, setNumberOfDice] = useState<number | string | undefined>(1);
  const [result, setResult] = useState<number | null>(null);
  const [maxNumberOfDice, setMaxNumberOfDice] = useState<number>(100);
  const [rollHistory, setRollHistory] = useState<{ dice: number | string | undefined; numberOfSides: string | number; result: number }[]>([]);

  const numbersOfDie = [1, 2, 3, 4, 5, 6];

  const sides = [4, 6, 8, 10, 12, 20];

  const roleHistoryEl = rollHistory.map((roll, index) => (
    <Text style={styles.rollText} key={index}>
      Dice Rolled : {roll.dice} , Sides  : {roll.numberOfSides} , Result : {roll.result}
    </Text>
  ));

  const roll = () => {
    setDieNumber([]);
    setIsNumberOfDiceHidden(true);
    setIsNumberOfSidesHidden(true);
    for (let i = 0; i < (Number(numberOfDice) ?? 1); i++) {
      setDieNumber(prev => [...prev, (Math.floor(Math.random() * (Number(numSides) ?? 6)) + 1).toString()]);
    }
    setResult((Math.floor(Math.random() * (Number(numSides) ?? 6)) + 1) * (Number(numberOfDice) ?? 1));
    setMaxNumberOfDice(Number(numberOfDice) * (Number(numSides) ?? 6));

    setRollHistory(prev => [...prev, { dice: numberOfDice, numberOfSides: Number(numSides), result: result ?? 0 }].slice(-5));

  };


  return (
    <View style={styles.container}>

      <Button title={`${numberOfDice?.toString() ?? '1'} dice`} onPress={() => {
        setDieNumber([])
        setIsNumberOfDiceHidden(!isNumberOfDiceHidden)
      }} />
      {!isNumberOfDiceHidden && <Picker
        selectedValue={numberOfDice}
        onValueChange={(itemValue) => setNumberOfDice(itemValue)}
        style={{ width: 200 }}
      >
        {
          numbersOfDie.map((die) => (
            <Picker.Item key={die} label={`${die} dice`} value={die} />
          ))}
      </Picker>}
      <Button title={`${numSides?.toString() ?? '6'} sided die`} onPress={() => { setIsNumberOfSidesHidden(!isNumberOfSidesHidden) }} />
      {!isNumberOfSidesHidden && <Picker
        selectedValue={numSides}
        onValueChange={(itemValue) => setNumSides(itemValue)}
        style={{ width: 200 }}
      >
        {
          sides.map((side) => (
            <Picker.Item key={side} label={`${side} sides`} value={side} />
          ))}
      </Picker>}

      <Text style={styles.title}>Dice Roller</Text>
      <Text style={styles.result}>{result ?? '–'}</Text>
      <Pressable style={styles.button} onPress={roll}>
        <Text style={styles.buttonText}>Roll</Text>
      </Pressable>

      <Text style={styles.inputText}>Max possible roll: {maxNumberOfDice}</Text>
      <Text style={styles.inputText}>Dice Numbers to make that happen: {dieNumber.join(' + ')}</Text>
      <Text style={styles.rollHeaderText}>Last 5 Rolls:</Text>
      {roleHistoryEl}
      <Button title="Clear History" onPress={() => setRollHistory([])} />
    </View>
  )

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    textAlign: 'center',
  },
  inputText: {
    justifyContent: 'center',
    textAlign: 'center',
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
  rollText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 0,
    marginBottom: 0,
  },
  rollHeaderText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 16,
  },
});


