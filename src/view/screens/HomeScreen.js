import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import curs from '../../consts/courses';

const HomeScreen = ({navigation}) => {
  const [catergoryIndex, setCategoryIndex] = useState(0);
  const [courses, setcourses] = useState(curs);
  const [search, setsearch] = useState('');

  const categories = ['SMM', 'Web-design', 'Web-sites', 'Mobile app'];

  const CategoryList = () => {
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({course}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', course)}>
        <View style={style.card}>


       <View style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row'
       }}>

        <View
            style={{
              height: 135,
              alignItems: 'center',
            }}>
            <Image
              source={course.img}
              style={{flex: 1, resizeMode: 'contain',marginLeft:-470}}
            />
        </View>
     
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10, marginLeft:-460}}>
              {course.name}
            </Text>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:23}}>
                <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10, marginLeft:-460}}>
                  ${course.price}
                </Text>
              </View>
          </View>

       </View>
                {/* <Icon name='star' size={23} style={style.like} color='gold'/> */}

        </View>
      </TouchableOpacity>
    );
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = courses.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase()
                          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });  
        setcourses(newData);
        setsearch(text);
    } else { 
      setcourses(curs);
      setsearch(text);
    }
  }


  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 10, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Terra Tech</Text>
          <Text style={{fontSize: 38, color: COLORS.blue, fontWeight: 'bold'}}>
            IT Company
          </Text>
        </View>
        <View>
          <Icon name='logout' size={33} onPress={() => navigation.navigate('StartScreen')} />
          <Text style={{fontSize:12}}>Logout</Text>
        </View>
      </View>
      <View style={{marginTop: 10, flexDirection: 'row'}}>
        <View style={style.searchContainer}>
          <Icon name="search" size={25} style={{marginLeft: 10}} />
          <TextInput
            value={search}
            onChangeText={(text) => searchFilter(text)}
            placeholder="Search" style={style.input} />
        </View>
        <View style={style.sortBtn}>
          <Icon name="sort" size={30} color={COLORS.white} 
            onPress={() => navigation.navigate('Menu')}
          />
        </View>
      </View>
      <CategoryList />
      <FlatList
        showsVerticalScrollIndicator={false} 
        numColumns={1}
        data={courses}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => {
          return <Card course={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
  categoryTextSelected: {
    color: COLORS.blue,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.blue,
  },
  card: {
    height: 135,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 10 
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold', 
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10
  },
  like: {
    top:-45,
    left:300
  }
});
export default HomeScreen;
