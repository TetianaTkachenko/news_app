import React, { useState } from 'react';
import {  View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../styles/style';
import Form from './Form';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {name: 'Apple', anons: 'Apple t is a long established fact that a reader will be distracted by the readable c!!!!!!', full: 'Apple is cool! t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9l49NvJJQl56mPRjqRJaeOHbvcZSF108udw&usqp=CAU', key: '1'},
    {name: 'Google', anons: 'Google is cool!!!!!!!', full: 'Google is cool! The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', img: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/173AD/production/_114894159_googlelogo.jpg', key: '2'},
    {name: 'Facebook', anons: 'Facebook is cool!!!!!!!', full: 'Facebook is cool! The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.', img: 'https://i.pcmag.com/imagery/articles/04HUXgEu0I3mdCOejOjQpNE-5..v1620748900.jpg', key: '3'}
  ])
  const [isModalWindow, setModalWindow] = useState(false)
  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString()
      return [
        article,
        ...list
      ]
    })
  }
  return (
    <View style={gStyle.main}>
      <Modal visible={isModalWindow}>
        <View style={gStyle.main}>
        <Ionicons 
          name='close' 
          size={40} 
          color='red' 
          style={styles.closeIcon} 
          onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Add your article</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons 
        name='add-circle' 
        size={40} 
        color='green' 
        style={styles.addIcon} 
        onPress={() => setModalWindow(true)}
        />
      <Text style={[gStyle.title, styles.header]}>
        Main
        </Text>
      <FlatList data={news} renderItem={({item}) => (
        <TouchableOpacity 
        style={styles.item} 
        onPress={() => navigation.navigate('FullInfo', item)}
        >
          <Image 
            style={styles.image}
            source={{uri: item.img}}
          />
          <Text style={styles.title}>
            {item.name}
          </Text>
          <Text style={styles.anons}>
            {item.anons}
          </Text>
        </TouchableOpacity>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  closeIcon: {
    textAlign: 'center',
    marginTop: 20
  },
  addIcon: {
    textAlign: 'center',
    marginBottom: 15
  },
  image: {
    width: '100%',
    height: 200
  },
  header: {
    marginBottom: 20,
    color: '#383737'
  },
  item: {
    width: '100%',
    marginBottom: 20
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    color: '#474747',
    marginTop: 5
  }
})