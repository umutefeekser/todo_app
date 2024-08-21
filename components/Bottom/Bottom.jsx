import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import styles from './Bottom.style'

const Bottom = ({text, changeFunc, saveFunc}) => {
  return (
    <View style={styles.bottom}>
      <TextInput placeholderTextColor={"gray"} placeholder="Yapılacak..." value={text} onChangeText={changeFunc} style={styles.text_input}/>
      <TouchableOpacity onPress={saveFunc} style={styles.save_button}>Kaydet</TouchableOpacity>
    </View>
  )
}

export default Bottom