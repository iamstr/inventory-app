import * as React from 'react';
import { List } from 'react-native-paper';
import Touchable from 'react-native-platform-touchable';
import {Alert,View,Text,Button}  from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';










class ModalScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

// end of modals

class ListComponent extends React.Component {

  constructor(props){
    super(props)

    this.state = {

                  list:[
                              {"key":"first shop",id:1},
                              {"key":"second shop",id:2},
                              {"key":"third shop",id:3},
                              {"key":"fourth shop",id:4},
                              {"key":"five shop",id:5},
                              {"key":"six shop",id:6}
                                  ]
                  };





  }





  render() {

const {list}=this.state
const namesList=list.map(name=>{

  return(

    <List.Item
     key={name.id}
     title={name.key}
     description="Item description"
     onPress={() => this.props.navigation.navigate('MyModal', {
              itemId: name.id,
              otherParam: name.key,
            })}
     left={props => <List.Icon {...props} icon="store" />} />
  )


})

    return (




      <List.Section title="Some title"   >
          {namesList}
     </List.Section>


    );
  }
}

// end of list component

const RootStack = createStackNavigator(
  {
    List: {
      screen: ListComponent,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(RootStack);
