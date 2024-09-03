import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { router } from "expo-router";
import { colors } from '../global/colors';
import Button from '../../components/Button/Button';

const ComentarioFinal = () => {
  const [text, setText] = useState('');

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null; // Puedes mostrar un indicador de carga aquí si lo prefieres
  }

  const handlePress = () => {
    if (text.length > 0) {
      router.push('/screens/9MuchasGracias');
    } else {
      Alert.alert('Comentario Requerido', 'Por favor, deje un comentario antes de continuar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Desea dejar algún comentario final?</Text>
      <TextInput
        style={[styles.input, styles.multilineText]}
        placeholder="Comentario Opcional"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        scrollEnabled={false}
        multiline={true}
        value={text}
        onChangeText={setText}
      />
      <Button 
        buttonText="Siguiente"
        onPress={handlePress}
        backgroundColor={colors.ministerio1}
        textColor={'white'}
        borderColor={undefined}
        borderRadius={12}
      />
    </View>
  );
};

export default ComentarioFinal;

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
    textAlign: "center",
    marginBottom: 20,
    fontFamily: 'Montserrat_400Regular',
  },
  input: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    fontSize: 28,
    borderRadius: 8,
    padding: 10,
    textAlignVertical: "top",
    marginBottom: 20
  },
  multilineText: {
    textAlign: 'center',
  },
});

