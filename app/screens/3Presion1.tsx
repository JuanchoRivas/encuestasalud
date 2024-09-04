import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Keyboard } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { router } from "expo-router";
import { colors } from '../global/colors';
import Button1 from '../Buttons/Button1';
import { useProgress } from '../ProgressContext';

const Presion1 = () => {
  const [number, setNumber] = useState<string>('');

  const { setProgress } = useProgress();

  useEffect(() => {
    setProgress(0.33);
  }, []);


  const handlePress = () => {
    const parsedNumber = parseInt(number, 10);

    if (parsedNumber >= 80 && parsedNumber <= 230) {
      router.push('/screens/4Presion2');
    } else {
      Alert.alert('Error', 'Por favor ingrese un valor entre 80 y 230.');
    }
  };

  const handleNumberChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, '');

    if (numericText === '' || (parseInt(numericText, 10) >= 80 && parseInt(numericText, 10) <= 230)) {
      setNumber(numericText);
    }
  };

  return (
    <View onTouchStart={()=>{
      Keyboard.dismiss()
  }} style={styles.container}>
      <View>
        <Text style={styles.text}>Entre 80 y 230, seleccione cuanta presión tuvo hoy</Text>
      </View>
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        placeholder="130"
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

export default Presion1;

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
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
});
