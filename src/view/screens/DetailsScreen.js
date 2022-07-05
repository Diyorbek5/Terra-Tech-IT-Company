import React, { useState } from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';


const DetailsScreen = ({navigation, route}) => {
  const course = route.params;

  const [col, setcol] = useState('black');
  const [favorite, setfavorite] = useState('favorite-border')

  const LikeButton = () => {
      if (col) {
        setcol('red')
      }else {
        setcol('dark')
      }
      if (favorite) {
        setfavorite('favorite')
      }else{
        setfavorite('favorite-border')
      }
  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      </View>
      <View style={style.imageContainer}>
        <Image source={course.img} style={{resizeMode: 'contain', flex: 1}} />
      </View>
      <View style={style.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold',color:'black'}}>{course.name}</Text>
          <Icon onPress={LikeButton} style={{marginRight:20}} name={favorite} size={33}  color={col}/>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold',color:'gray'}}>About</Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}>
            {course.about}
          </Text>
            <View style={style.buyBtn}>
              <TouchableOpacity>
                <Text onPress={() => navigation.navigate('Contact')} style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>Apply</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: '100%',
    height: 50,
    marginTop: 30,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.blue,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
});

export default DetailsScreen;
