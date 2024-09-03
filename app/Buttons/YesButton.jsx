import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../global/colors';


const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor, borderRadius }) => {
  
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { router.push('/screens/2TomoPresion') } } style={styles.buttonYes}>
            <Text style={styles.buttonText}>SI</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      margin: 20
    },
    buttonYes: {
      backgroundColor: colors.green_100,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      padding:12,
      marginHorizontal: 10,
      width: '45%',
      marginTop: 10,
    },

    buttonText: {
      fontSize: 22,
      color: 'black',
    },
  });
  
export default Button;
