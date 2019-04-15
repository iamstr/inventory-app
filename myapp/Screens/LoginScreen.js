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
    ImageAsyncStorage,
    Image
} from 'react-native'
import {
    createStackNavigator,
    createAppNavigator
} from 'react-navigation';
import bgImage from '../images/abstract-architecture-attractive-988873.jpg'
import logo from '../images/passima.png'
import Icon from 'react-native-vector-icons/Ionicons'
import {
    Input,
    Header
} from 'react-native-elements';

var loginStatement = ''
class LoginScreen extends Component {


    constructor(props) {

        super(props)
        this.state = {
            role: '',
            storeName: '',
            user: '',
            password: ''
        }
        this.handleLogin.bind(this)

    }



    handleLogin() {
        //   fetch('http://192.168.0.23:4000/paintshop/auth', {
        //   method: 'POST',
        //   headers: {
        //    Accept: 'application/json',
        //    'Content-Type': 'application/json',
        //   },
        //   body: {
        //    user: this.state.user,
        //    password:this.state.password
        //   }
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //
        //       this.setState({
        //         success: responseJson.success,
        //         role: responseJson.role
        //       })
        //
        // console.log(this.state.role + "succecss is " +this.state.success);
        //
        //     })
        //     .catch((error) =>{
        //       console.error(error);
        //     })
        //
        // })



    }

    _signInAsync = async (role) => {

        // this.props.navigation.navigate('App');
    };


    render() {

        return ( <
            View >


            <
            View style = {
                styles.LogoContainer
            } >

            <
            Image source = {
                logo
            }
            style = {
                styles.logo
            }
            /> <
            Text style = {
                styles.LogoContainer
            } > Pasimma services limited < /Text>

            <
            /View>


            <
            Input placeholder = 'Username'
            leftIcon = {
                {
                    type: 'Ionicons',
                    name: 'person'
                }
            }
            style = {
                styles.input
            }
            onChangeText = {
                (user) => this.setState({
                    user: user
                })
            }
            />


            <
            View >
            <
            Input placeholder = 'Password'
            leftIcon = {
                {
                    type: 'font-awesome',
                    name: 'lock'
                }
            }
            style = {
                styles.input
            }
            onChangeText = {
                (password) => this.setState({
                    password: password
                })
            }
            />

            <
            /View>






            <
            Button style = {
                {
                    marginTop: 30
                }
            }
            icon = { <
                Icon
                name = "ios-add"
                size = {
                    15
                }
                color = "white"
                type = 'Ionicons'

                /
                >
            }
            title = "Login"

            onPress = {
                () => {
                    fetch('http://192.168.0.23:4000/paintshop/auth', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                user: this.state.user,
                                password: this.state.password
                            })

                        })
                        .then((response) => response.json())
                        .then((responseJson) => {



                            this.setState({
                                success: responseJson.success,
                                role: responseJson.role
                            })


                            loginStatement = this.state.role;
                            if (this.state.role === 'normal user') {

                                this.props.navigation.navigate('HomeScreen', {

                                    user: this.state.success,
                                    role: this.state.role
                                })

                            } else if (this.state.role === 'admin') {

                                this.props.navigation.navigate('MyHomeScreen', {

                                    user: this.state.success,
                                    role: this.state.role
                                })


                            }


                            const getStorage = async () => {
                                await AsyncStorage.setItem('userToken', this.state.role);
                            }



                        })
                        .catch((error) => {
                            console.error(error);
                        })






                    // alert(` this is the user ${this.state.user} and the password is ${this.state.password}`);

                }
            }
            />




            <
            /View>

        )


    }


}

const {
    width: WIDTH
} = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },

    logo: {
        width: 120,
        height: 120
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    LogoContainer: {
        alignItems: 'center',
    },

    input: {
        width: 50,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,



    },

    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37

    }




});

// export default LoginScreen


module.exports = {
    loginStatement: loginStatement,
    LoginScreen: LoginScreen
}
//  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}