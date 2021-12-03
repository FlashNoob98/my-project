import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import Square from './Square';
import {connect } from 'react-redux';

const GameBoard = (props) => {
  let time = 10
  const [timeLeft, setTimeLeft] = useState(time)

  useEffect(() => {
    if(!timeLeft) return
    const timerId = setInterval(() => {
      // happens every second
      setTimeLeft(timeLeft -1)
    },1000)
      return() => clearInterval(timerId)
  }, [timeLeft])



    return (
        <View style={styles.container}>
          <Text>My first App!</Text>
          <StatusBar style="auto" />
          <Text>{timeLeft}</Text>
          <Text>{props.score}</Text>
          <View style={styles.game}>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
            <Square time={time} props={props}></Square>
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

  const mapStateToProps = state => {
    return {
      score:state.score
    }
  }

export default connect(mapStateToProps)(GameBoard)