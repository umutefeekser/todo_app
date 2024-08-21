import React from 'react'
import { FlatList, Text, View } from 'react-native'
import styles from './Top.style'

const Top = ({renderItem, list}) => {
  return (
    <View style={styles.top}>
        <View style={styles.top_titles}>
          <Text style={styles.top_title}>Yapılacaklar</Text>
          <Text style={styles.top_counter}>{list.length}</Text>          
        </View>

        <FlatList
        data={list}
        renderItem={renderItem}
        />

    </View>
  )
}

export default Top