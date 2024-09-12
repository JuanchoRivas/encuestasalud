import { Stack } from "expo-router";
import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { colors } from "./global/colors";
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { ProgressProvider, useProgress } from './ProgressContext';
import * as Progress from 'react-native-progress';
import GlobalStatusBar from './GlobalStatusBar';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ProgressProvider>
      <View style={styles.container}>
        <GlobalStatusBar />
        <MainContent />
      </View>
    </ProgressProvider>
  );
};

const MainContent = () => {
  const { progress } = useProgress();
  const progressPercentage = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Progress.Bar
          progress={progress}
          width={300}
          height={15}
          color={colors.ministerio3}
          borderWidth={0}
          unfilledColor={colors.palette_100}
          borderRadius={5}
        />
        <Text style={styles.progressText}>{progressPercentage}%</Text>
      </View>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
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
    paddingTop: getStatusBarHeight(),
    padding: 10,
    marginTop: 10
  },
  progressText: {
    marginTop: 5,
    fontSize: 16,
    color: colors.ministerio1,
    fontFamily: 'Montserrat_400Regular',
  },
});

export default RootLayout;
