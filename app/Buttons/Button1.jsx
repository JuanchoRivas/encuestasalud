import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor, borderRadius, style }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null; // Puedes mostrar un indicador de carga aquí
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor || '#836EFE',
          borderColor: borderColor || 'transparent',
          borderRadius: borderRadius || 8,
        },
        style,  // Agrega el estilo adicional aquí
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || '#ffffff' }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: 'center',
    minWidth: 150,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    fontFamily: 'Montserrat_500Medium',  // Usa el nombre de la fuente como cadena
  },
});

export default Button;
