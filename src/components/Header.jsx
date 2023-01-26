import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Note App</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 15,
    borderColor: '#1e66a4',
    paddingBottom: 5,
  },
  text: {
    fontFamily: 'InconsolataExtraBold',
    fontSize: 65,
  },
})
