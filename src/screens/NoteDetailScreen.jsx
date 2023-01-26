import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constans/colors'

const NoteDetailScreen = ({ note, onBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.noteContainer}>
        <Text style={styles.title}>{note.title}</Text>
        <View style={styles.bodyContainer}>
          <Text style={styles.body}>{note.body}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onBack} style={styles.button}>
        <Text style={styles.buttonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NoteDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  noteContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'InconsolataBold',
    fontSize: 30,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  bodyContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flex: 1,
    borderRightWidth: 4,
    borderRightColor: '#dfdddd',
    borderBottomWidth: 4,
    borderBottomColor: '#dfdddd',
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#fff2cc',
    borderTopLeftRadius: 5,
  },
  body: {
    fontFamily: 'InconsolataMedium',
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#413f3f',
  },
  button: {
    backgroundColor: colors.button,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    fontFamily: 'InconsolataBold',
    color: 'white',
    fontSize: 25,
  },
})
