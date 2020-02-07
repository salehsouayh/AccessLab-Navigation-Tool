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
} from 'react-native';

import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import  Page  from './Page';

  class Home extends Component {
    static navigationOptions = {
      header: null
    }
  render() {
  return (
<ImageBackground
            source={require("./assets/hell.jpg")}
            style={{width: '100%', height: '100%'}}>
              
                <View style ={styles.container}>
                  <Text style={styles.white}>Welcome to AccessLab</Text>
                  <TouchableOpacity style= {styles.button2} 
                  onPress={()=>this.props.navigation.navigate('Page')}>
                      <Text style={styles.txtbtt2}>Navigate Online</Text>
                  </TouchableOpacity>
                </View>

                <View style ={styles.containerr}>
                  <TouchableOpacity style= {styles.button1} >
                     <Text style={styles.txtbtt1}>Navigate Offline</Text>
                  </TouchableOpacity>
                </View>

    </ImageBackground>
    );
  }}

const RootStack = createStackNavigator(
  {
    Page : Page,
    Home : Home
  },
  {
    initialRouteName: 'Home'
  }
  );
  
  const AppContainer = createAppContainer(RootStack);

type Props = {};
export default class App extends Component<Props> {
  render() {
  return (
    <AppContainer/>
    
    
  );
}}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 320,
  },
    containerr: {
      flex: 1,
      alignItems: 'center',
      marginTop: 65,
  },

  bImage: {


  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  white: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'top',
    color: 'white',
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,

  },

  button1: {
    width: 300,
    backgroundColor: '#34495E',
    borderRadius: 20,
    paddingVertical: 16,
  },
  
  txtbtt1: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FDFEFE',
  },

  button2: {
    width: 300,
    backgroundColor: '#00d4ff',
    borderRadius: 20,
    paddingVertical: 16,
    
  },
  
  txtbtt2: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#FDFEFE',
  },


});
