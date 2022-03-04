import {StyleSheet, Dimensions} from 'react-native';

const windowsHeight = Dimensions.get('window').height;
const windowsWidth = Dimensions.get('window').width;
 
export default StyleSheet.create({
  container: {
    
    flex: 1, 
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,

},
  image: {
    height: windowsHeight / 4,
    borderRadius:10
  },
  title: {

    fontWeight: 'bold'
  },
  description: {},
  texts: {
      padding: 10
  },
  author: {
    
    textAlign: 'right',
    fontStyle: 'italic',
  }
});
