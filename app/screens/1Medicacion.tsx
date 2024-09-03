import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { colors } from '../global/colors';
import { router } from 'expo-router';
import Button1 from '../Buttons/Button1'

const Medicacion = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null; // Puedes mostrar un indicador de carga aquí
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Tomó su medicación para la presión hoy?</Text>
      <View style={styles.buttonContainer}>
        <Button1
          buttonText="SI"
          onPress={() => { router.push('/screens/2TomoPresion'); }}
          backgroundColor={colors.green_100}
          textColor="white"
          borderColor={undefined}
          borderRadius={12}
          style={styles.buttonYes}
        />
        <Button1
          buttonText="NO"
          onPress={() => { router.push('/screens/2TomoPresion'); }}
          backgroundColor={colors.log}
          textColor="white"
          borderColor={undefined}
          borderRadius={12}
          style={styles.buttonNo}
        />
      </View>
    </View>
  );
};

export default Medicacion;

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
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonYes: {
    flex: 1,
    marginRight: 10,
  },
  buttonNo: {
    flex: 1,
    marginLeft: 10,
  },
});
