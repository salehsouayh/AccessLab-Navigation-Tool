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

import { TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import  PageTT  from './PageTT';


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
     <TouchableOpacity style={{marginLeft: 10,
            marginBottom: -41,width: 250,
    backgroundColor: '#00d4ff',
    borderRadius: 30,
    paddingVertical: 10,alignContent: 'center',alignItems: 'center'}} >
      <Text style={{textAlign: 'center',
    fontSize: 15,
        color: '#FDFEFE',}}>Activate Real Time Navigation</Text>

        </TouchableOpacity>
     <Image
          style={{width: 40, height: 40, marginLeft: 310, marginBottom: -55}}
          source={{uri: 'data:image/png;base64,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'}}
        />
     <TouchableOpacity style={{marginLeft: 310,
            marginBottom: 40,width: 30,
    backgroundColor: 'transparent',
    borderRadius: 30,
    paddingVertical: 40,}} >
       
        </TouchableOpacity>

        
        
         
       
   </View>
   
   <View style={styles.containerr}>
     <Text style={styles.txt}>  Notice</Text>
     <Text style={styles.txtt}>  Estimated Time : 10 Mins</Text>
     <Text style={styles.txttt}>  ^</Text>
     <Text style={styles.txtttt}>  ________________</Text>


     <TouchableOpacity style={{marginLeft: 300,
            marginTop: -40,width: 50,
    backgroundColor: '#00d4ff',
    borderRadius: 100,
    paddingVertical: 16,}} onPress={()=>this.props.navigation.navigate('PageTT')}>
          </TouchableOpacity>
  </View>
  </View>

  );
}}

const RootStack = createStackNavigator(
  {
    Home : Home,
    PageTT : PageTT
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
 

