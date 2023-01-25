import React, { useState } from 'react'
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import uuid from 'react-native-uuid'

const AddNote = ({ visible, onNewNote, onClose }) => {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const onPressHandler = () => {
    onNewNote({ id: uuid.v4(), title, body })
  }

  const onPressBackground = () => {
    onClose()
  }

  return (
    <View>
      <Modal animationType="fade" transparent visible={visible}>
        <TouchableWithoutFeedback onPress={onPressBackground}>
          <View style={styles.modalBackground}>
            <View style={styles.modal}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>New Note</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  value={title}
                  placeholder="A title"
                  onChangeText={setTitle}
                  style={styles.input}
                />
              </View>
              <View style={[styles.inputContainer, { flex: 3 }]}>
                <Text style={styles.label}>Body</Text>
                <TextInput
                  value={body}
                  placeholder="A body"
                  onChangeText={setBody}
                  editable
                  multiline
                  numberOfLines={4}
                  style={[styles.input, styles.textArea]}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPressHandler}>
                  <Text style={styles.buttonFont}>Add</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

export default AddNote

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    justifyContent: 'flex-start',
    backgroundColor: '#eae9e3',
    minHeight: '50%',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  titleContainer: {
    paddingBottom: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomColor: '#4b88df',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 30,
    fontFamily: 'InconsolataBold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    paddingVertical: 5,
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'InconsolataRegular',
  },
  input: {
    alignSelf: 'center',
    width: '95%',
    borderWidth: 1.2,
    padding: 5,
    borderColor: '#4b88df',
    borderRadius: 5,
    fontFamily: 'InconsolataMedium',
  },
  textArea: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'column-reverse',
    width: '100%',
  },
  button: {
    alignItems: 'center',
    width: '100%',
    alignSelf: 'flex-end',
    borderRadius: 5,
    borderColor: '#4b88df',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#2069c7',
  },
  buttonFont: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'InconsolataBold',
  },
})
