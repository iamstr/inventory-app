import React from 'react'
import { AppRegistry, Text, TextInput,ActivityIndicator,AsyncStorage ,View,StyleSheet } from 'react-native';
import {createStackNavigator,createAppContainer,createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from'./Screens/AuthLoadingScreen'
import MyHomeScreen from'./Screens/MyHomeScreen'
import OtherScreen from'./Screens/OtherScreen'
import HomeScreen from'./Screens/HomeScreen'
import {LoginScreen,loginStatement} from'./Screens/LoginScreen'



let AppNavigator= createStackNavigator({
LoginScreen:LoginScreen,
HomeScreen:HomeScreen
})

let AppNavigator2=createStackNavigator({
MyHomeScreen:MyHomeScreen
})

let AppNavigatorHome=createStackNavigator({
HomeScreen:HomeScreen
})

let AuthStack=createStackNavigator({
LoginScreen:LoginScreen
})

const AppScreen =  createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator2,
    Auth: AuthStack,
    AppNavigatorHome:AppNavigatorHome
  },
  {
    initialRouteName: 'Auth',
  }
));
 export default class App extends React.Component{


       render(){

       return(

         <AppScreen/>

       )

       }

}
