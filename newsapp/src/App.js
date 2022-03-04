import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions
} from 'react-native';
import React from 'react';
import news_data from './news_data';
import news_banner_data from './news_banner_data.json'
import Card from './components/Card';
import Topbanner from './components/TopBanner/Topbanner';

const App = () => {
  const renderNews = ({item}) => <Card news={item} />;
  const keyExtractor = (item, index) => item.u_id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>News</Text>
      <FlatList
        ListHeaderComponent = {
            <Topbanner data={news_banner_data} />
        }
        keyExtractor={keyExtractor}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image:{
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width/ 2,
  },
  title:{
    fontSize: 50,
    fontWeight: 'bold',
    
    color: 'black',
  }
});

export default App;
