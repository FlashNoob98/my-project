import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameBoard from './components/GameBoard'
import { Provider } from 'react-redux'

export default function App() {
  return(
    <Provider>
      <GameBoard></GameBoard>
    </Provider>
  )
}


