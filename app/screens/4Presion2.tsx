import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { router } from "expo-router";
import { colors } from '../global/colors';
import Button1 from '../Buttons/Button1';

const Presion2 = () => {
  const [number, setNumber] = useState<string>('');

  const handlePress = () => {
    const parsedNumber = parseInt(number, 10);

    if (parsedNumber >= 40 && parsedNumber <= 120) {
      router.push('/screens/5Presionobs');
    } else {
      Alert.alert('Error', 'Por favor ingrese un valor entre 40 y 120.');
    }
  };

  const handleNumberChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');

    if (numericText === '' || (parseInt(numericText, 10) >= 40 && parseInt(numericText, 10) <= 120)) {
      setNumber(numericText);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Entre 40 y 120, seleccione cuanta presión tuvo hoy</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="70"
        value={number}
        onChangeText={setNumber}
        maxLength={3}
      />
      <View style={styles.buttonContainer}>
        <Button1
          buttonText="Siguiente"
          onPress={handlePress}
          backgroundColor={colors.ministerio1}
          textColor={'white'}
          borderColor={undefined}
          borderRadius={12}
          style={styles.button}
        />
      </View>
    </View>
  );
}

export default Presion2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    flex: 1,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
    fontSize: 40,
    borderRadius: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
});
