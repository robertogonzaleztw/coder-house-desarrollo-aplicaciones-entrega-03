import React, { useState } from 'react'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import NoteDetailScreen from './src/screens/NoteDetailScreen'
import NotesScreen from './src/screens/NotesScreen'
import Header from './src/components/Header'

const PAGES = ['NotesScreen', 'NoteDetailScreen']

export default function App() {
  const [loaded] = useFonts({
    InconsolataExtraLight: require('./src/assets/fonts/Inconsolata-ExtraLight.ttf'),
    InconsolataLight: require('./src/assets/fonts/Inconsolata-Light.ttf'),
    InconsolataRegular: require('./src/assets/fonts/Inconsolata-Regular.ttf'),
    InconsolataMedium: require('./src/assets/fonts/Inconsolata-Medium.ttf'),
    InconsolataSemiBold: require('./src/assets/fonts/Inconsolata-SemiBold.ttf'),
    InconsolataBold: require('./src/assets/fonts/Inconsolata-Bold.ttf'),
    InconsolataExtraBold: require('./src/assets/fonts/Inconsolata-ExtraBold.ttf'),
  })
  const [notes, setNotes] = useState([
    { title: 'nota 1', body: 'asdoaindoiqoweoiqweioqwe' },
    { title: 'nota 2', body: 'ahlsnlkanckjasldknaslkdnl' },
  ])
  const [currentPage, setCurrenPage] = useState(PAGES[0])
  const [noteSelected, setNoteSelected] = useState()

  const onNoteSelectedHandler = (note) => {
    setNoteSelected(note)
    setCurrenPage(PAGES[1])
  }

  const onBackHandler = () => {
    setNoteSelected(null)
    setCurrenPage(PAGES[0])
  }

  let content

  switch (currentPage) {
    case 'NotesScreen':
      content = (
        <NotesScreen notes={notes} onNoteSelected={onNoteSelectedHandler} />
      )
      break
    case 'NoteDetailScreen':
      content = <NoteDetailScreen note={noteSelected} onBack={onBackHandler} />
      break
  }

  if (!loaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <View style={styles.body}>{content}</View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'InconsolataSemiBold',
  },
})
