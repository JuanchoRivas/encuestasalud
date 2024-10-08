import React, { useEffect } from 'react';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';
import { router } from 'expo-router';
import Button1 from '../Buttons/Button1';
import { useProgress } from '../ProgressContext';
import * as Progress from 'react-native-progress';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const INITIAL_PROGRESS = 0.22;

const TomoPresion = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  const { progress, setProgress } = useProgress();

  useEffect(() => {
    setProgress(INITIAL_PROGRESS);
  }, [setProgress]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Se midió la presión arterial esta semana?</Text>
      <View style={styles.buttonContainer}>
        <Button1
          buttonText="SI"
          onPress={() => { router.push('/screens/3Presion1'); }}
          backgroundColor={colors.green_100}
          textColor={'white'}
          borderColor={undefined}
          borderRadius={12}
          style={styles.buttonYes}
        />
        <Button1
          buttonText="NO"
          onPress={() => { router.push('/screens/6ActFisica'); }}
          backgroundColor={colors.corazon1}
          textColor={'white'}
          borderColor={undefined}
          borderRadius={12}
          style={styles.buttonNo}
        />
      </View>
    </View>
  );
};

export default TomoPresion;

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
