import React,{Component} from 'react'
import{View,Text,StyleSheet,Button,Picker,Alert,ScrollView,TextInput} from 'react-native'
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {Icon,Ionicons} from 'react-native-vector-icons/Ionicons'
import { DataTable } from 'react-native-paper';


export default class TableComponent extends React.Component {
  constructor(props){
    super()
    this.state={
      count:0,
      numberOfPages:4,
      tableData:[
                    {"firstColumn":"Hardener","secondColumn":"200","index":1},
                    {"firstColumn":"Cover","SecondColumn":"300","index":2},
                    {"firstColumn":"Softener","secondColumn":"400","index":3},
                    {"firstColumn":"Hardener","secondColumn":"500","index":4},
                    {"firstColumn":"Cover","SecondColumn":"600","index":5},
                    {"firstColumn":"Softener","secondColumn":"700","index":6},
                    {"firstColumn":"Hardener","secondColumn":"500","index":7},
                    {"firstColumn":"Softener","SecondColumn":"600","index":8},
                    {"firstColumn":"Cover","secondColumn":"700","index":9}
                ]

    }


  }



  render() {

    const {tableData}=this.state
    const tableDataConstruct=tableData.map((data,index)=>{


      return(
        <DataTable.Row key={data.index}>

          <DataTable.Cell>{data.firstColumn}</DataTable.Cell>
          <DataTable.Cell >{data.secondColumn}</DataTable.Cell>


        </DataTable.Row>
      )
    })

    return (


      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Category</DataTable.Title>
          <DataTable.Title >Total </DataTable.Title>

        </DataTable.Header>



        {tableDataConstruct}






      </DataTable>


    );
  }
}
