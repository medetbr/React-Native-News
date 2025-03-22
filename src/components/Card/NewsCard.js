import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './NewsCard.style';

const NewsCard = ({news}) => {
  const formattedDate = time => {
    return new Date(time).toLocaleString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.news_image} source={{uri: news.image}} />
      </View>
      <View style={styles.author_and_times}>
        <View style={styles.author_profile}>
          <Image
            style={styles.author_profile_img}
            source={{uri: news.author.profileimg}}
          />
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              {news.author.name + ' ' + news.author.lastname}
            </Text>
            <Text style={{fontSize: 13, fontStyle: 'italic'}}>
              {news.author.title}
            </Text>
          </View>
        </View>
        <View >
          <Text style={styles.times}>{formattedDate(news.time)}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>
          {'\t'}
          {news.description.length > 100
            ? news.description.substring(0, 100) + '...'
            : news.description}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{fontSize:13}}>{news.view + ' ' + 'view'}</Text>
        <TouchableOpacity style={styles.readMoreBtn}>
          <Text style={styles.readMoreBtnTitle}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsCard;
