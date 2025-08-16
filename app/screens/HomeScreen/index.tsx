import { ScrollView, StyleSheet, } from 'react-native'
import React from 'react'
import RootCheck from './components/RootCheck'
import DeviceInfo from './components/DeviceInfo'




const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainerStyle}>
      <RootCheck />
      <DeviceInfo />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  contentContainerStyle: { backgroundColor: 'white', paddingBottom: 20, paddingTop: 10 }
})