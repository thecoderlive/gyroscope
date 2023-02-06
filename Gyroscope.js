import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'


const Gyroscope = () => (
<ScrollView style={styles.gyroscope} showsVerticalScrollIndicator={false}>
<Image
    style={styles.gyroscope_icon}
    source={{uri: item.gyroscope_icon}}
   />
<Text style={styles.gyroscope_title}>{item.gyroscope_title}</Text>
<Text style={styles.about_goal}>{item.about_goal}</Text>
<Image
    style={styles.dumble_icon}
    source={{uri: item.dumble_icon}}
   />
<Text style={styles.about_dumble}>{item.about_dumble}</Text>
<Image
    style={styles.fat_icon}
    source={{uri: item.fat_icon}}
   />
<Text style={styles.about_fat}>{item.about_fat}</Text>
<Image
    style={styles.dna_icon}
    source={{uri: item.dna_icon}}
   />
<Text style={styles.about_dna}>{item.about_dna}</Text>
<Image
    style={styles.mind_icon}
    source={{uri: item.mind_icon}}
   />
<Text style={styles.about_mind}>{item.about_mind}</Text>
<Text style={styles.about_member}>{item.about_member}</Text>
</ScrollView>
)

export default Gyroscope;

const styles = StyleSheet.create({
gyroscope_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
gyroscope_title: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_goal: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
dumble_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
about_dumble: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
fat_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
about_fat: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
dna_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
about_dna: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
mind_icon: {
    width: '10vw',
    height: '10vw',
    margin: 5
  },
about_mind: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  },
about_member: {
    fontSize: 12,
    fontWeight: '250',
    paddingHorizontal: 10,
    paddingTop:5
  }
});