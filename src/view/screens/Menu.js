import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../consts/colors'

export default function Menu( {navigation} ) {
  return (
    <SafeAreaView style={{
        flex:1,
        backgroundColor: 'rgba(0,70,156,255)'
    }}>
      
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginLeft:10,marginRight:10}}>
        <Image source={require('../../assets/logo2.jpeg')} style={style.image} />
        <Icon name='close' style={{color:COLORS.white,fontSize:35}} onPress={() => navigation.goBack()} />
      </View>
      
      <View style={{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:120
      }}>
        <Text style={{color: COLORS.white,fontSize:30,fontWeight:'bold'}} onPress={() => navigation.navigate('About')} >About</Text>
        <Text style={{color: COLORS.white,fontSize:30,marginTop:20,fontWeight:'bold'}} onPress={() => navigation.navigate('Contact')}>Contact</Text>
      </View>

    </SafeAreaView>
  )
}

const style = StyleSheet.create ({
  image: {
    width:150,
    height:120,
  }
})