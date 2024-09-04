import { Stack } from "expo-router";
import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { colors } from "./global/colors";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { ProgressBar } from 'react-native-paper';
import { ProgressProvider, useProgress } from './ProgressContext';

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null; // O algún indicador de carga
  }

  return (
    <ProgressProvider>
      <MainContent />
    </ProgressProvider>
  );
};

const MainContent = () => {
  const { progress } = useProgress();
  const progressPercentage = Math.round(progress * 100); // Convertir a porcentaje

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          color="#ff0000" // Color del progreso completado
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>{progressPercentage}%</Text>
      </View>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.ministerio2,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Montserrat_400Regular',
            fontWeight: 'normal',
          },
          headerTitle: 'Encuesta Ministerio de Salud De La Pampa'
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="screens/1Medicacion" />
        <Stack.Screen name="screens/2TomoPresion" />
        <Stack.Screen name="screens/3Presion1" />
        <Stack.Screen name="screens/4Presion2" />
        <Stack.Screen name="screens/5Presionobs" />
        <Stack.Screen name="screens/6ActFisica" />
        <Stack.Screen name="screens/7Salados" />
        <Stack.Screen name="screens/8ComentarioFinal" />
        <Stack.Screen name="screens/9MuchasGracias" />
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    alignItems: 'center',
    padding: 10,
  },
  progressBar: {
    height: 8,
    width: '100%',
    borderRadius: 5, // Esquinas redondeadas opcional
    backgroundColor: colors.palette_102 // Fondo de la barra de progreso
  },
  progressText: {
    marginTop: 5,
    fontSize: 16,
    color: colors.ministerio1,
    fontFamily: 'Montserrat_400Regular',
  },
});

export default RootLayout;
