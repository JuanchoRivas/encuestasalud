import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { router } from "expo-router";
import { colors } from '../global/colors';
import Button from '../../components/Button/Button';
import { useProgress } from '../ProgressContext';

const Presionobs = () => {
  const [text, setText] = useState('');

  const { setProgress } = useProgress();

  useEffect(() => {
    setProgress(0.55);
  }, []);


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <Text style={styles.text}>¿Desea dejar algún comentario?</Text>
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
        onPress={() => { router.push('/screens/6ActFisica'); }} 
        backgroundColor={colors.ministerio1} 
        textColor={undefined} 
        borderColor={undefined} 
        borderRadius={undefined}
      />
    </KeyboardAvoidingView>
  );
};

export default Presionobs;

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
    marginBottom: 20,
  },
  multilineText: {
    textAlign: 'center',
  },
});
