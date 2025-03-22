import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
} from 'react-native';
import Card from './components/Card/NewsCard';
import news from './data/news.json';
import banner_news from './data/banner_news.json';
const App = () => {
  const renderNews = ({item}) => <Card news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>News</Text>
      </View>      
      <FlatList
        ListHeaderComponent={() => 
          <ScrollView
            showsHorizontalScrollIndicator={false}
            style={styles.banner_container}
            horizontal>
            {banner_news.map(banner => (
              <Image style={styles.banner_img} source={{uri: banner.image}} />
            ))}
          </ScrollView>
        } 
        data={news}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  banner_img: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2,
  },
  banner_container: {
    margin: 10,
  },
  header:{
    padding:10,
    backgroundColor:"#212121",
  },
  header_title:{
    color:"#bdbdbd",
    fontWeight:"bold",
    fontSize:22
  }
});
export default App;
