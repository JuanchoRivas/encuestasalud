import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { router } from "expo-router";
import { colors } from '../global/colors';
import Button from '../../components/Button/Button';
import { useProgress } from '../ProgressContext';

const ActFisica = () => {

  const { setProgress } = useProgress();

  useEffect(() => {
    setProgress(0.66);
  }, []);

  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.text}>¿Realizó actividad física en las últimas 24 horas ?</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button
        buttonText="SI"
        onPress={() => { router.push('/screens/7Salados'); }}
        backgroundColor={colors.green_100}
        textColor={'white'}
        borderColor={undefined}
        borderRadius={12}
      />
      <Button
        buttonText="NO"
        onPress={() => { router.push('/screens/7Salados'); }}
        backgroundColor={colors.corazon1}
        textColor={'white'}
        borderColor={undefined}
        borderRadius={12}
      />
    </View>
  </View>
);
};

export default ActFisica;

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
