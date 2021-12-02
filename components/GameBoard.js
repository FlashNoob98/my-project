import { StatusBar } from 'expo-status-bar';
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Square from './Square';

const GameBoard = () => {
    return (
        <View style={styles.container}>
          {/*<Text>Open up App.js to start working on your app!</Text>*/}
          <StatusBar style="auto" />
          <View style={styles.game}>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
    }
  });


export default GameBoard