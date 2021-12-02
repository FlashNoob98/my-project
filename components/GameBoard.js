import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Square from './Square';

const GameBoard = () => {
  const [timeLeft, setTimeLeft] = useState(10)

  useEffect(() => {
    if(!timeLeft) return
    const timerID = setInterval(() => {
      // happens every second
      setTimeLeft(timeLeft -1)
    },1000)
      return() => clearInterval(timerID)
  }, [timeLeft])



    return (
        <View style={styles.container}>
          <Text>My first App!</Text>
          <StatusBar style="auto" />
          <Text>{timeLeft}</Text>
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