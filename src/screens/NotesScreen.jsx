import React, { useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import AddNote from '../components/AddNote'
import colors from '../constans/colors'

const NotesScreen = ({ notes, onNoteSelected, onNewNote }) => {
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

  const onNewNoteHandler = (newNote) => {
    setAddNoteVisible(false)
    onNewNote(newNote)
  }

  const renderItem = (note) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle} ellipsizeMode="tail" numberOfLines="3">
        {note.title}
      </Text>
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => onSelectHandler(note)}
      >
        <Text style={styles.itemButtonText}>Read</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      {notes.length > 0 ? (
        <View style={styles.gridContainer}>
          <FlatList
            data={notes}
            renderItem={({ item }) => renderItem(item)}
            key={(item) => item.name}
            style={styles.grid}
            numColumns={2}
          />
        </View>
      ) : (
        <View style={styles.noNotesContainer}>
          <Text
            style={[styles.noNotesContainerText, { alignSelf: 'flex-start' }]}
          >
            It is...
          </Text>
          <Text
            style={[styles.noNotesContainerText, { alignSelf: 'flex-end' }]}
          >
            ...An empty book
          </Text>
        </View>
      )}

      <TouchableOpacity
        onPress={onFloatingButtonPressHandler}
        style={styles.floatingButton}
      >
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
      <AddNote
        visible={addNoteVisible}
        onNewNote={onNewNoteHandler}
        onClose={onCloseHandler}
      />
    </View>
  )
}

export default NotesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  gridContainer: {
    flex: 1,
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
    borderColor: colors.primary,
    backgroundColor: colors.secondary,
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
  noNotesContainer: {
    flex: 0.85,
    justifyContent: 'space-between',
  },
  noNotesContainerText: {
    fontFamily: 'InconsolataLight',
    fontSize: 35,
    alignSelf: 'flex-start',
    color: '#413f3f',
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
    backgroundColor: colors.button,
    borderRadius: 100,
  },
  floatingButtonText: {
    color: 'white',
    fontFamily: 'InconsolataExtraBold',
    fontSize: 40,
  },
})
