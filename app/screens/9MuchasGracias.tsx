import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { router } from "expo-router";
import { colors } from '../global/colors';
import Button1 from '../Buttons/Button1';
import { useProgress } from '../ProgressContext';

const MuchasGracias = () => {

  const { setProgress } = useProgress();

useEffect(() => {
  setProgress(1);
}, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Muchas Gracias</Text>
      <View style={styles.buttonContainer}>
        <Button1 
          buttonText="Finalizar Encuesta" 
          onPress={() => { router.push('/'); }} 
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

export default MuchasGracias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 26,
    color: 'black',
    textAlign: "center",
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
});
