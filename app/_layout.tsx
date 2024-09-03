import { Stack } from "expo-router";
import React from 'react';
import { StyleSheet } from "react-native";
import { colors } from "./global/colors";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  return (
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
      <Stack.Screen name="1Medicacion" />
      <Stack.Screen name="2TomoPresion" />
      <Stack.Screen name="3Presion1" />
      <Stack.Screen name="4Presion2" />
      <Stack.Screen name="5Presionobs" />
      <Stack.Screen name="6ActFisica" />
      <Stack.Screen name="7Salados" />
      <Stack.Screen name="8ComentarioFinal" />
      <Stack.Screen name="9MuchasGracias" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
