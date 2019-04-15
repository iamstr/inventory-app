import React, {
    Component
} from 'react'
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Image,
    Picker,
    Alert
} from 'react-native'
import {
    createDrawerNavigator,
    createAppContainer
} from 'react-navigation';
import bgImage from '../images/abstract-architecture-attractive-988873.jpg'
import logo from '../images/passima.png'
import Icon from 'react-native-vector-icons/Ionicons'
import TableComponent from './Components/TableComponent'
import ListComponent from './Components/ListComponent'
import {
    Input,
    Header
} from 'react-native-elements';
import SettingComponent from './Components/SettingComponent'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({
            tintColor
        }) => ( <
            Image source = {
                logo
            }
            style = {
                [styles.icon, {
                    tintColor: tintColor
                }]
            }
            />
        ),
    };

    render() {
        return ( <
            Button onPress = {
                () => this.props.navigation.navigate('Notifications')
            }
            title = "Go to notifications" /
            >
        );
    }
}

// end of  drawerlabel

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({
            tintColor
        }) => ( <
            Image source = {
                bgImage
            }
            style = {
                [styles.icon, {
                    tintColor: tintColor
                }]
            }
            />
        ),
    };

    render() {
        return ( <
            Button onPress = {
                () => this.props.navigation.goBack()
            }
            title = "Go back home" /
            >
        );
    }
}

// end of drawer label



class MyStockScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Stocks',
        drawerIcon: ({
            tintColor
        }) => ( <
            Image source = {
                bgImage
            }
            style = {
                [styles.icon, {
                    tintColor: tintColor
                }]
            }
            />
        ),
    };


    constructor(props) {
        super(props);
        this.state = {
            category: '',
            language: '',
            products: [],
            colours: [],
            store: []
        };
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







            }).then(() => {


                fetch('http://192.168.0.23:4000/paintshop/store/', {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })

                    .then((responseStore) => responseStore.json())
                    .then((responseStoreJson) => {

                        this.setState({
                            store: [...responseStoreJson],
                            isLoading: false
                        })

                    })
                    .catch((error) => {
                        console.error(error);
                    });







            })









    }






    categoryItem(itemValue) {

        this.setState({
            category: itemValue
        })
        Alert.alert(
            this.state.category
        )

    }

    // valueSelected(){
    // setState({category:"Select_the_mixer"})
    //   return this.state.category
    // }

    render() {
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


        const storePickerItem = this.state.store.map((name, index) => {



            return (

                <
                Picker.Item key = {
                    index
                }
                label = {
                    name.shop_name
                }
                value = {
                    name.shop_name
                }
                />
            )
        })



        return ( <
            View style = {
                {
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center"
                }
            } >
            <
            View style = {
                {
                    width: 200,
                    height: 50,
                    marginTop: 20
                }
            } >
            <
            Picker selectedValue = {
                this.state.selectedStore
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
                    selectedStore: itemValue
                })
            } >
            <
            Picker.Item label = "Select store"
            value = "store" / > {
                storePickerItem
            }


            <
            /Picker> <
            /View>

            <
            View style = {
                {
                    width: 200,
                    marginTop: 20,
                    height: 50
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
            Picker.Item label = "Select product"
            value = "product" / > {
                productPickerItem
            }



            <
            /Picker>

            <
            /View>


            <
            View style = {
                {
                    width: 200,
                    marginTop: 20,
                    height: 50
                }
            } >
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
            Picker.Item label = "Select color"
            value = "color" / > {
                colorPickerItem
            }

            <
            /Picker>

            <
            /View> <
            View style = {
                {
                    width: 200,
                    marginTop: 20,
                    height: 50
                }
            } >
            <
            TextInput

            placeholder = "Amount in Litres!"
            onChangeText = {
                (text) => this.setState({
                    litres: text
                })
            }
            value = {
                this.state.litres
            }

            /> <
            /View>


            <
            View style = {
                {
                    width: 200,
                    marginTop: 20,
                    height: 50
                }
            } >
            <
            Button title = "Add"
            onPress = {
                () => {
                    let mixer = `http://192.168.0.23:4000/paintshop/stock`
                    fetch(mixer, {
                            method: 'PUT',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                color: this.state.selectedColor,
                                product: this.state.selectedProduct,
                                litres: this.state.litres,
                                shop: this.state.selectedStore

                            })
                        })

                        .then((responseColours) => responseColours.json())
                        .then((responseColoursJson) => {

                            alert(`${responseColoursJson}`)

                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            }

            /> <
            /View>

            <
            /View>
        );
    }
}

// end of drawer drawerLabel



class TodaySalesScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Today sales',
        drawerIcon: ({
            tintColor
        }) => ( <
            Image source = {
                logo
            }
            style = {
                [styles.icon, {
                    tintColor: tintColor
                }]
            }
            />
        ),
    };

    render() {
        return ( <
            TableComponent / >
        );
    }
}


// end of drawerLabel


class ShopDetailsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Shops & Details',
        drawerIcon: ({
            tintColor
        }) => ( <
            Image source = {
                logo
            }
            style = {
                [styles.icon, {
                    tintColor: tintColor
                }]
            }
            />
        ),
    };

    render() {
        return ( <
            ListComponent / >
        );
    }
}



// end of drawerLabel


class OtherSettingsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({
            tintColor
        }) => ( <
            Image source = {
                logo
            }
            style = {
                [styles.icon, {
                    tintColor: tintColor
                }]
            }
            />
        ),
    };

    render() {
        return ( <
            SettingComponent / >
        );
    }
}





const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },


});

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },

    Stocks: {

        screen: MyStockScreen
    },

    Settings: {

        screen: OtherSettingsScreen
    },

    Shops: {

        screen: ShopDetailsScreen
    },

    Sales: {

        screen: TodaySalesScreen
    }


});


export default createAppContainer(MyDrawerNavigator);