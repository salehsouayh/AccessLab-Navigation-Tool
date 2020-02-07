/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import  PageT  from './src/pages/PageT';



 class Home extends Component{
  
  static navigationOptions = {
    header: null
    }
    
  render() {
  return (
    <View style={styles.main}>
    <View style={styles.container}>
     <MapView
       style={styles.map}
       region={{
        latitude: 37.983810,
        longitude: 23.727539,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
       }}
     >
       <Marker
      coordinate={{latitude: 37.983810,
        longitude: 23.727539,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,}}
      title={Marker.title}
      description={Marker.description}
    />
     </MapView>
   </View>
   
   <View style={styles.containerr}>
     <Text style={styles.txt}>  Notice</Text>
     <Text style={styles.txtt}>  Make sure your GPS is ON</Text>
     <Text style={styles.txttt}>^</Text>
     <Text style={styles.txtttt}>________________</Text>
     
     <TouchableOpacity style={{marginLeft: 300,
            marginTop: -40,width: 50,
    backgroundColor: '#00d4ff',
    borderRadius: 100,
    paddingVertical: 16,}} onPress={()=>this.props.navigation.navigate('PageT')}>
          </TouchableOpacity>



  </View>
  </View>

  );
}}
const RootStack = createStackNavigator(
  {
    Home : Home,
    PageT : PageT
  },
  {
    initialRouteName: 'Home'
  }
  );
  

  
  const AppContainer = createAppContainer(RootStack);


  type Props = {};
  export default class Page extends Component<Props> {
    static navigationOptions = {
      header: null
      }
    render() {
      
    return (
      
      <AppContainer/>
      
      
      
    );
  }}




const styles = StyleSheet.create({

  txtttt: {
    color: '#808B96',
    marginLeft: 110,
    marginTop: -11,
    fontSize: 18,
  },

  txttt: {
    color: '#808B96',
    marginLeft: 14,
    marginTop: -25,
    fontSize: 18,
  },


  txt: {
    color: '#FDFEFE',
    marginLeft: 45,
    fontSize: 12.5,
  },

  txtt: {
    color: '#808B96',
    marginLeft: 45,
    fontSize: 12.5,
  },

  main: {
    flex: 1,
},

  containerr: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent:'flex-start',
    alignContent: 'flex-start',
    marginTop: 510,
    paddingTop: 8,
    backgroundColor: '#212F3C',
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,


  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
 

