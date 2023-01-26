import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import AddNote from '../components/AddNote'

const NotesScreen = ({ notes, onNoteSelected }) => {
  const [addNoteVisible, setAddNoteVisible] = useState(false)

  const onSelectHandler = (note) => {
    onNoteSelected(note)
  }

  const onFloatingButtonPressHandler = () => {
    setAddNoteVisible(true)
  }

  const onCloseHandler = () => {
    setAddNoteVisible(false)
  }

  const renderItem = (note) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle} ellipsizeMode="tail" numberOfLines="3">
        {note.title}
      </Text>
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => onNoteSelected(note)}
      >
        <Text style={styles.itemButtonText}>Read</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={({ item }) => renderItem(item)}
        key={(item) => item.name}
        style={styles.grid}
        numColumns={2}
      />
      <TouchableOpacity
        onPress={onFloatingButtonPressHandler}
        style={styles.floatingButton}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
      <AddNote visible={addNoteVisible} onClose={onCloseHandler} />
    </View>
  )
}

export default NotesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  grid: {
    flex: 1,
  },
  itemContainer: {
    margin: 5,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#1e66a4',
    backgroundColor: 'rgba(66,165,243,0.5)',
    width: 150,
    height: 150,
  },
  itemTitle: {
    fontFamily: 'InconsolataRegular',
    fontSize: 20,
    alignSelf: 'flex-start',
  },
  itemButton: {
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  itemButtonText: {
    fontFamily: 'InconsolataLight',
    fontSize: 25,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 60,
    width: 60,
    backgroundColor: '#2060a4',
    borderRadius: 100,
  },
  floatingButtonText: {
    color: 'white',
    fontFamily: 'InconsolataExtraBold',
    fontSize: 40,
  },
})
