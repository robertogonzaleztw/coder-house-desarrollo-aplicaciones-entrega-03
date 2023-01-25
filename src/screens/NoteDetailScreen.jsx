import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const NoteDetailScreen = ({ note, onBack }) => {
  return (
    <View>
      <Text>{note.title}</Text>
      <Text>{note.body}</Text>
      <Button onPress={onBack} title='go back' />
    </View>
  )
}

export default NoteDetailScreen

const styles = StyleSheet.create({})