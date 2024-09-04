import React, { useEffect, useState } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, ActivityIndicator } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { router } from "expo-router";
import { colors } from './global/colors';
import Button1 from './Buttons/Button1';
import { useProgress } from './ProgressContext';

// Prevenir que el splash screen se oculte automáticamente
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  const { setProgress } = useProgress();

  useEffect(() => {
    setProgress(0.0);
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    Alert.alert('Datos ingresados', `Número: ${number}\nContraseña: ${password}`);
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Encuestas Salud</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nº CUIL"
        keyboardType="numeric"
        onChangeText={setNumber}
        value={number}
        autoCapitalize="none"
        maxLength={11}
        autoCorrect={false}
        underlineColorAndroid="transparent"
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent" 
      />
      <View style={styles.buttonContainer}>
        <Button1 
          buttonText="Ingresar" 
          onPress={() => { router.push('/screens/1Medicacion'); }} 
          backgroundColor={colors.ministerio1} 
          textColor={undefined} 
          borderColor={undefined} 
          borderRadius={undefined} 
          style={styles.button}
        />
      </View>
    </View>
  );
}

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
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Montserrat_400Regular',
  },
  input: {
    height: 80,
    width: '100%',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.palette_102,
    fontFamily: 'Montserrat_400Regular',
    fontSize: 25
  },
  buttonText: {
    fontFamily: 'Montserrat_500Medium',
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
