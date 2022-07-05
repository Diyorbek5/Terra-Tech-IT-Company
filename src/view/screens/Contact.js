import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-gesture-handler'

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

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
  <View style={style.container}>
    <TextInput style={style.text2} placeholderTextColor='gray' placeholder='Ism'/>
  </View>
  <View style={style.container}>
    <TextInput style={style.text2} placeholderTextColor='gray' placeholder='Familiya'/>
  </View>
</View>

  <View style={style.container}>
    <TextInput style={style.text} placeholderTextColor='gray' placeholder='Email :' keyboardType='email-address' autoCapitalize='none' />
  </View>
  <View style={style.container}>
    <TextInput style={style.text} placeholderTextColor='gray' placeholder='Tel raqam :' keyboardType='numeric' />
  </View>

  <View style={style.container}>
    <TextInput style={style.text} placeholderTextColor='gray' placeholder='Xizmat turi'/>
  </View>

     <View style={{width: 400, flexDirection:'row',justifyContent:'space-between'}}>
     <View style={style.backBtn}>
        <Text style={{fontSize:20,color:'white',fontWeight:'bold'}} onPress={() => navigation.navigate('Home')}>Back to Home</Text>
      </View>

      <View style={style.backBtn}>
        <Text style={{fontSize:20,color:'white',fontWeight:'bold'}} onPress={() => navigation.navigate('Home')}>Send</Text>
      </View>
     </View>


    </SafeAreaView>
  )
};

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      container :{
        margin:10,
        borderWidth:1,
        borderColor:'blue',
        padding: 5,
        borderRadius:10
      },
      text:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
      },
      text2:{
        width: 173,
        fontSize:18,
        fontWeight:'bold',
        color:'black'
      },
      backBtn:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:155,
        padding:10,
        marginTop:20,
        borderWidth:1,
        marginLeft:10,
        borderRadius:10,
        borderColor:'blue',
        backgroundColor:'blue'
    }
})