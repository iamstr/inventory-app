import React, {
    Component
} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    Picker,
    Alert,
    ScrollView,
    TextInput
} from 'react-native'
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import {
    Icon,
    Ionicons
} from 'react-native-vector-icons/Ionicons'
import {
    DataTable
} from 'react-native-paper';






export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            language: '',
            isLoading: true,
            products: [],
            colours: []
        };

        this.handleMix.bind(this)

    }

    categoryItem(itemValue) {

        this.setState({
            category: itemValue
        })
        Alert.alert(
            this.state.category
        )

    }

    valueSelected() {
        setState({
            category: "Select_the_mixer"
        })
        return this.state.category
    }

    componentDidMount() {
        fetch('http://192.168.0.23:4000/paintshop/products/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    products: [...responseJson],
                    isLoading: false
                })

            })
            .then(() => {



                fetch('http://192.168.0.23:4000/paintshop/colours/', {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })

                    .then((responseColours) => responseColours.json())
                    .then((responseColoursJson) => {

                        this.setState({
                            colours: [...responseColoursJson],
                            isLoading: false
                        })

                    })
                    .catch((error) => {
                        console.error(error);
                    });







            })









    }



    handleMix(store) {





    }



    render() {
        const {
            navigation
        } = this.props;
        const store = navigation.getParam('user', 'NO-ID');
        // const { navigation } = this.props;
        // const user = navigation.getParam('user', 'NO-ID');
        // alert(` the litres are ${this.state.litres} and selected color is  ${this.state.selectedColor} and selected product is  ${this.state.selectedProduct} and the user is${user} `)

        const productPickerItem = this.state.products.map((name, index) => {



            return (

                <
                Picker.Item key = {
                    index
                }
                label = {
                    name.products_name
                }
                value = {
                    name.products_name
                }
                />
            )
        })



        const colorPickerItem = this.state.colours.map((name, index) => {



            return (

                <
                Picker.Item key = {
                    index
                }
                label = {
                    name.colour_name
                }
                value = {
                    name.colour_name
                }
                />
            )
        })


        return ( <
            View style = {
                {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                }
            } >
            <
            Text style = {
                {
                    padding: 10,
                    fontSize: 30
                }
            } > This is the Home Screen < /Text>


            <
            View style = {
                {
                    paddingTop: 20
                }
            } >



            <
            Picker selectedValue = {
                this.state.selectedProduct
            }
            style = {
                {
                    height: 50,
                    width: 200
                }
            }
            onValueChange = {
                (itemValue, itemIndex) =>
                this.setState({
                    selectedProduct: itemValue
                })
            } >

            <
            Picker.Item label = "select product"
            value = "select product" / > {
                productPickerItem
            }

            <
            /Picker>

            <
            /View>









            <
            View >



            <
            Picker selectedValue = {
                this.state.selectedColor
            }
            style = {
                {
                    height: 50,
                    width: 200
                }
            }
            onValueChange = {
                (itemValue, itemIndex) =>
                this.setState({
                    selectedColor: itemValue
                })
            } >
            <
            Picker.Item label = "select colour"
            value = "select colour" / > {
                colorPickerItem
            } <
            /Picker>







            <
            /View>


            <
            View >
            <
            TextInput style = {
                {
                    height: 40,
                    padding: 10,
                    marginTop: 20,
                    borderColor: 'gray',
                    borderWidth: 1,
                    width: 300
                }
            }
            onChangeText = {
                (text) => this.setState({
                    litres: text
                })
            }
            value = {
                this.state.litres
            }
            />

            <
            /View>



            <
            View >


            <
            Button style = {
                {
                    width: 300,
                    backgroundColor: 'blue'
                }
            }
            title = "Mix"
            onPress = {
                () => {
                    let mixer = `http://192.168.0.23:4000/paintshop/mixes/${store}`;
                    fetch(mixer, {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                color: this.state.selectedColor,
                                product: this.state.selectedProduct,
                                litres: this.state.litres

                            })
                        })

                        .then((responseColours) => responseColours.json())
                        .then((responseColoursJson) => {

                            alert(`${responseColoursJson.message}\n amount in litres ${responseColoursJson.litres==''||responseColoursJson.litres==null||responseColoursJson.litres=='undefined'?responseColoursJson.litres=0:responseColoursJson.litres}`)

                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            }
            />





            <
            /View>





            <
            /View>
        )


    }


}



class SettingsScreen extends React.Component {
    render() {
        return ( <
            View >
            <
            Table / >
            <
            /View>
        );
    }
}





let date = new Date()
date.toString().replace(/GMT+0300 (East Africa Time)/gi, "")

class Table extends React.Component {
    constructor(props) {
        super()
        this.state = {
            count: 0,
            numberOfPages: 4,
            date: date.toString()
        }

        this.addCount.bind(this)
    }

    addCount() {
        this.setState({
            count: count++
        })
        if (this.state.count > this.state.numberOfPages) {

            this.setState({
                count: 1
            })
        } else if (this.state.count == 0) {

            this.setState({
                count: 1
            })

        } else {
            this.setState({
                count: count++
            })

        }
        return this.state.count;

    }

    render() {
        return (

            <
            ScrollView >
            <
            DataTable >
            <
            DataTable.Header >
            <
            DataTable.Title > Color mixes < /DataTable.Title> <
            DataTable.Title > Total Mix < /DataTable.Title> <
            DataTable.Title > Date mixed < /DataTable.Title> <
            /DataTable.Header>

            <
            DataTable.Row >
            <
            DataTable.Cell > Frozen yogurt < /DataTable.Cell> <
            DataTable.Cell > 159 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>

            <
            DataTable.Row >
            <
            DataTable.Cell > Ice cream sandwich < /DataTable.Cell> <
            DataTable.Cell > 237 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>


            <
            DataTable.Row >
            <
            DataTable.Cell > Frozen yogurt < /DataTable.Cell> <
            DataTable.Cell > 159 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>

            <
            DataTable.Row >
            <
            DataTable.Cell > Ice cream sandwich < /DataTable.Cell> <
            DataTable.Cell > 237 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>




            <
            DataTable.Row >
            <
            DataTable.Cell > Frozen yogurt < /DataTable.Cell> <
            DataTable.Cell > 159 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>

            <
            DataTable.Row >
            <
            DataTable.Cell > Ice cream sandwich < /DataTable.Cell> <
            DataTable.Cell > 237 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>




            <
            DataTable.Row >
            <
            DataTable.Cell > Frozen yogurt < /DataTable.Cell> <
            DataTable.Cell > 159 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>

            <
            DataTable.Row >
            <
            DataTable.Cell > Ice cream sandwich < /DataTable.Cell> <
            DataTable.Cell > 237 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>




            <
            DataTable.Row >
            <
            DataTable.Cell > Frozen yogurt < /DataTable.Cell> <
            DataTable.Cell > 159 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>

            <
            DataTable.Row >
            <
            DataTable.Cell > Ice cream sandwich < /DataTable.Cell> <
            DataTable.Cell > 237 < /DataTable.Cell> <
            DataTable.Cell > {
                this.state.date
            } < /DataTable.Cell> <
            /DataTable.Row>



            <
            DataTable.Pagination page = {
                this.state.count
            }
            numberOfPages = {
                this.state.numberOfPages
            }
            onPageChange = {
                (page) => {
                    console.log(page)
                }
            }
            label = {
                `1-${this.state.numberOfPages} of 6`
            }
            /> <
            /DataTable>

            <
            /ScrollView>
        );
    }
}









// const TabNavigator = createBottomTabNavigator({
//     Home: HomeScreen,
//     Settings: SettingsScreen,
//
//   });
//
// export default createAppContainer(TabNavigator);