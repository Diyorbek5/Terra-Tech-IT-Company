import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../consts/colors'

export default function Contact({navigation}) {
  return (
    <SafeAreaView>
       <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold',color:'gray'}}>Terra Tech</Text>
          <Text style={{fontSize: 38, color: 'blue', fontWeight: 'bold'}}>
            IT Company
          </Text>
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
      <View style={style.backBtn}>
          <TouchableOpacity>
              <Text onPress={() => navigation.navigate('Home')} style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Back to Home</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

const style = StyleSheet.create({
    header: {
        padding: 10,
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      container:{
        margin:10,
      },
      text:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black'
      },
      backBtn: {
        // width: '100%',
        height: 50,
        marginTop: 20,
        marginLeft:10,
        marginRight:10,
        backgroundColor: COLORS.blue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
})