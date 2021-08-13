import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import icon from './assets/icon.png'; 
export default function App() {
  return (
    <View style={styles.container}>
         <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={styles.icon} />
         
      <Text style={{color:'#888', fontSize:18}}>To share a photo from your phone with a friend, just press the button below! </Text>
      <StatusBar style="auto" />
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
  icon: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
});
