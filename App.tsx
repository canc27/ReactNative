import React from 'react'
import { SafeAreaView, StatusBar, Text, TextBase, View } from 'react-native';
import { CalculadoraScreens } from './src/screens/CalculadoraScreens';
import { styles } from './src/theme/appTheme';

 const App = () => {
  return (
    <SafeAreaView style = { styles.fondo}> 
      <StatusBar backgroundColor="black"/>
      <CalculadoraScreens/>
    </SafeAreaView>
    

  )
}

export default App;
