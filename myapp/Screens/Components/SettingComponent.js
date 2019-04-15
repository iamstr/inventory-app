import  React,{Component}  from 'react';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import {Alert,View,Text,Button}  from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';



export default class SettingComponent extends React.Component{


  constructor(props){

    super(props)

    this.state={
            settingItems:[
                          "add new store",
                          "add new product",
                          "add new color",
                          "add new sub product",
                          "add stock"

            ]
          }




        }


        render(){
          const {settingItems}=this.state
          const settinItemsList=settingItems.map((items,index)=>{

            return(

              <List.Item
               key={index}
               title={items}
               description="Item description"
               onPress={() => alert(`you have decided to  ${items}`)}
               left={props => <List.Icon {...props} icon="add" />} />
            )

          })
              return(

                <List.Section title="Some title"   >
                    {settinItemsList}
               </List.Section>


              )


        }




}
