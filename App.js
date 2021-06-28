import * as React from 'react';
import {useState} from 'react';
import tv from './assets/frnt.jpg'
import t from './assets/city.jpg'
import tve from './assets/lo.jpg'
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight,
  ImageBackground,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
const image = { uri: "https://reactjs.org/logo-og.png" };
const Stack = createStackNavigator();

const LocationsScreen=({navigation,route})=>{
   
  const [text3, onChangetext3] = React.useState(null);
  const [text4, onChangetext4] = React.useState(null);
    const [aray2 , setaray2] =useState([]);
    const {loc}=route.params;
  const addLocation=()=>{
aray2.push(text3);
aray2.push(text4);
onChangetext3("");
onChangetext4("");
console.log(loc)
  }
   

   return (

   <View>
    <ImageBackground source={t} style={styles.image} >
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
      {
        aray2.length != 0 ?
      aray2.map( e =>
            <View style={styles.button}>
     <Text style={{fontSize:"20px",fontWeight:"bold"}}>{e}</Text>
     </View>

      ) :
       <Text style={{fontSize:18,fontWeight:"bold",color:"white"}}>No locations for this city!</Text>
      
      }
      
 <TextInput
          style={styles.input3}
          onChangeText={onChangetext3}
          value={text3}
          placeholder="Location name"
		  placeholderTextColor = "white"
        />

        <TextInput
          style={styles.input4}
          onChangeText={onChangetext4}
          value={text4}
          placeholder="Location info"
		   placeholderTextColor = "white"
        />
    
    <View>
      <Button title="Add Location"color="black" onPress={() =>  navigation.navigate('Locations',{loc:aray2}) || addLocation()} />
      </View>
    </View>
	 </ImageBackground>
	   </View>
  );
}

const CitiesScreen=({route,navigation})=> {
	
     const { data }  = route.params;

       return (
	   <View>
	   <ImageBackground source={tv} style={styles.image}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
     
      
      <View >
      
    {data.map( e =>
    
    <TouchableHighlight onPress={() =>  navigation.navigate('Locations', { n: e.split("(",1) })
         
            }>
            <View style={styles.button}>
     <Text style={{fontSize:"20px",fontWeight:"bold"}}>{e}</Text>
     </View>
     </TouchableHighlight>
      )}
    </View>
      
      
    </View>
	</ImageBackground>
	 </View>
  );
}
const AddCityScreen=({ navigation })=> {
  const [text, onChangetext] = React.useState(null);
  const [text2, onChangetext2] = React.useState(null);
  const [aray , setaray] =useState([]);

  const addcity = () => {
  //  setaray([...aray,"h"]);
  //  console.log(aray);
  var a=text +"(" +text2+")";
  
    aray.push(a)   
    onChangetext("");
    onChangetext2("");
  };
  //const image = {tv};
  return (
  <View>
    <ImageBackground source={tve} style={styles.image}>
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

      }}>
      <View>
      <Text style={styles.tour}>Tour App</Text>
        <Text style={styles.city}>Cities</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangetext}
          value={text}
          placeholder="City name"
          placeholderTextColor="white"
        />

        <TextInput
          style={styles.input2}
          onChangeText={onChangetext2}
          value={text2}
          placeholder="Country name"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles. btnaddity}>
      <Button title="Add City" color="black" onPress={() => {navigation.navigate('Stacknavi', {
            screen: 'Cities',
            params:{data: aray}
          }) || addcity()
            }} />
      </View>
     
    </View>
	 </ImageBackground>
	</View>
  );
}
const Tab = createMaterialBottomTabNavigator();

function MyTabs({navigation}) {
	
  return (
    <Tab.Navigator
      initialRouteName="AddCity"
      activeColor="white"
      barStyle={{
        backgroundColor: 'teal',
      }}>
      
     
      
      <Tab.Screen name="Stacknavi"options={{
          tabBarLabel: 'Cities',
          headerShown:true,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="city" color={color} size={26} />
          ),
        }} component={Stacknavi}></Tab.Screen>
        <Tab.Screen
        name="AddCity"
        options={{
          tabBarLabel: 'Add City',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={26} />
          ),
        }}
        component={AddCityScreen}
      />
    </Tab.Navigator>
  );
}
function Stacknavi({navigation,route}){
 
  return(
 <Stack.Navigator  >   
      <Stack.Screen name="Cities" options={{headerTitleAlign:"center"}} component={CitiesScreen} /> 
       <Stack.Screen name="Locations" options={({ route }) => ({ title: route.params.n })} component={LocationsScreen} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
     <MyTabs/>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  city: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    fontFamily:"Times New Roman",
    marginTop:180,
	fontSize:30,
	color:'black'
  },tour : {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 8,
    fontFamily:"Times New Roman",
    marginTop:30,
	fontSize:30,
	color:'black'
  },
  input: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'white',
        borderBottomWidth:1,
		color:'white'
    
   
 
  },
  input2: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'white',
        borderBottomWidth:1,
    color:'white'
     
  },
  input3: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'white',
        borderBottomWidth:3,
		color:'white'
    
   
 
  },
  input4: {
    marginBottom:30,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomColor:'white',
        borderBottomWidth:3,
        color:'white'
		
    
     
  },
   button: {
    alignItems: "center",
    backgroundColor: "red",
    padding:10,
    marginTop:'5%'
    
  },
  btnaddity:{
    marginBottom:370,
	width:150,
	height:40,

  },
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
	height:600
  },

});