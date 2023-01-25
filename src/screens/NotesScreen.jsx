import React from 'react'
import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

const NotesScreen = ({ notes, onNoteSelected}) => {
  const onSelectHandler = () => {
    onNoteSelected(notes[1])
  }

  const renderItem = (note) => (<View>
    <Text>{note.title}</Text>
    <Button onPress={() => onNoteSelected(note)} title='Select' />
  </View>)

  return (
    <View>
      <Text>NotesScreen</Text>
      <FlatList data={notes} renderItem={({item}) => renderItem(item)} key={(item) => item.name} />
    </View>
  )
}

export default NotesScreen

const styles = StyleSheet.create({})