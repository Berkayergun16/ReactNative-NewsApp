import { ScrollView , Image} from 'react-native'
import React from 'react'


const Topbanner = ({data}) => {
  return (
    <ScrollView horizontal={true} 
    showsHorizontalScrollIndicator={false}
  >
     {
        data.map((item, index) => {
            return (
                <Image style={styles.image} source={{uri: item.imageUrl}} key={index} />
            )
        })
     }

     </ScrollView>
  )
}

export default Topbanner