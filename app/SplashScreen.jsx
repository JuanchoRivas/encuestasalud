import React, { useEffect, useRef } from 'react';
import { Animated, View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const startAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scaleValue, {
            toValue: 1.2,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    startAnimation();
  }, [scaleValue]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/images/dibujo2.png')} 
        style={[styles.image, { transform: [{ scale: scaleValue }] }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16a1b8', // Mismo color que en tu splash
  },
  image: {
    width: 200,
    height: 200, // Ajusta según el tamaño de tu imagen
  },
});

export default SplashScreen;
