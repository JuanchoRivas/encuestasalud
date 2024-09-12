import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, Alert, StyleSheet, Text, ActivityIndicator, Image, Animated, Dimensions } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';
import { router } from "expo-router";
import { colors } from './global/colors';
import Button1 from './Buttons/Button1';
import { useProgress } from './ProgressContext';

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

  // Configuración de animación para la imagen
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.3, // Agrandar
            duration: 800, // Duración en milisegundos
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1, // Reducir
            duration: 500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startAnimation();
  }, [scaleValue]);

  const handlePress = () => {
    Alert.alert('Datos ingresados', `Número: ${number}\nContraseña: ${password}`);
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const { width, height } = Dimensions.get('window');

  return (
    <View style={[styles.background, { width, height }]}>
      <View style={styles.container}>
        {/* Imagen con animación */}
        <Animated.Image 
          source={require('../assets/images/dibujo2.png')}
          style={[styles.topImage, { transform: [{ scale: scaleValue }] }]} 
          resizeMode="contain"
        />
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
        <Image 
          source={require('../assets/images/logo-ministerio.png')}
          style={styles.image} 
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.palette_103,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    alignItems: "center"
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
    fontSize: 18
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
  image: {
    width: '60%',
    height: undefined,
    aspectRatio: 2,
    marginTop: 20,
  },
  topImage: {
    width: '80%',
    height: 100,
    marginBottom: 20,
  },
});
