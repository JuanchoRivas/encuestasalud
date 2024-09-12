// GlobalStatusBar.js
import React from 'react';
import { StatusBar } from 'react-native';

const GlobalStatusBar = () => {
  return (
    <StatusBar
      barStyle="light-content" // Texto blanco en la barra de estado
      backgroundColor="black" // Fondo negro para la barra de estado
    />
  );
};

export default GlobalStatusBar;
