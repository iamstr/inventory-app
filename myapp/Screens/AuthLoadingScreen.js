import React from 'react'
import {  Text, TextInput,ActivityIndicator,AsyncStorage ,View,StyleSheet } from 'react-native';

export default class AuthLoadingScreen extends React.Component{

constructor(props){
super(props)
  this.loadApp()
}

  loadApp=async()=>{

    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.

    if(userToken==='normal user'){
    this.props.navigation.navigate(  "Homescreen" ,{

      user:this.state.success,
      role:this.state.role
    });

}  if(userToken==='admin'){
  this.props.navigation.navigate(  "MyHomescreen" ,{

    user:this.state.success,
    role:this.state.role
  });

}


  }

  render(){

    return(

      <Text> this is text</Text>

    )

  }




}
