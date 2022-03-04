import { View, Text , Image} from 'react-native'
import React from 'react'
import styles from './Card.style'
const Card = ({news}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: news.imageUrl}} />
      <View style={styles.texts}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </View>
  )
}

export default Card