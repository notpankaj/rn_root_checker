import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootCheck from './components/RootCheck'


const data = [
  { "name": "BOARD", "value": "sdm845" },
  { "name": "BRAND", "value": "Xiaomi" },
  { "name": "CPU ABI", "value": "arm64-v8a" },
  { "name": "DEVICE", "value": "beryllium" },
  { "name": "DISPLAY", "value": "SQ3A.220705.004" },
  { "name": "FINGERPRINT", "value": "ium:12/SQ3A.220705.004/1127:user" },
  { "name": "HARDWARE", "value": "qcom" },
  { "name": "HOST", "value": "PixelOS-CI" },
  { "name": "ID", "value": "SQ3A.220705.004" }
]


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* DBox */}
      <RootCheck />

      {/* DBox */}
      <View style={{ borderWidth: 0.5, margin: 10, borderRadius: 5, borderColor: 'grey', padding: 10, }}>
        <View style={{ marginBottom: 10, borderBottomWidth: 0.5, paddingBottom: 5, borderBottomColor: 'grey' }}>
          <Text>Device Info</Text>
        </View>
        < View style={{}}>
          {
            data.map((item, key) => {
              const isEven = key % 2 === 0
              return <View key={key} style={{ flexDirection: 'row', paddingHorizontal: 10, borderRadius: 4, paddingVertical: 5, backgroundColor: isEven ? 'lightgrey' : 'white' }}>
                <View style={{ width: 110 }}>
                  <Text>{item.name}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text>{item.value}</Text>
                </View>
              </View>
            })
          }
        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})