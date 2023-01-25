import React, { useState } from 'react'
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AddNote from '../components/AddNote'

const NotesScreen = ({ notes, onNoteSelected }) => {
  const [addNoteVisible, setAddNoteVisible] = useState(true)

  const onSelectHandler = () => {
    onNoteSelected(notes[1])
  }

  const renderItem = (note) => (
    <View>
      <Text>{note.title}</Text>
      <Button onPress={() => onNoteSelected(note)} title="Select" />
    </View>
  )

  return (
    <View>
      <Text>NotesScreen</Text>
      <FlatList
        data={notes}
        renderItem={({ item }) => renderItem(item)}
        key={(item) => item.name}
      />
      <AddNote visible={addNoteVisible} />
    </View>
  )
}

export default NotesScreen

const styles = StyleSheet.create({})
