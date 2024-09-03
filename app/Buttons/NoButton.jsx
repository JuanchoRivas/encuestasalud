import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';
import { router } from 'expo-router';

const NoButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => { router.push('/screens/2TomoPresion') } } style={styles.buttonNo}>
          <Text style={styles.buttonText}>NO</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};
export default NoButton

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonNo: {
    backgroundColor: colors.red_100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 10,
    width: '45%',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
  },
})


//Button buttonText="SI" onPress={() => { router.push('/screens/2TomoPresion'); } } backgroundColor={colors.ministerio1} textColor={undefined} borderColor={undefined} borderRadius={undefined}  />