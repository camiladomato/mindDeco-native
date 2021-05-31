import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 


import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { connect } from 'react-redux';

import authActions from '../redux/actions/authActions'

const Header = (props) => {
    const [modalOptions, setModalOptions] = useState(false)

    return (
        <View style={styles.navbar}>
            <View style={styles.innerNavbar}>
                <View style={styles.menuHambContainer}>
                    <Ionicons name="menu-outline" size={35} color="white" onPress={ () => props.props.navigation.openDrawer() } />
                    <Text style={styles.textMenuHamb}>Hola jefa!</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 8, position: 'relative'}}>
                    <SimpleLineIcons onPress={ () => setModalOptions(!modalOptions) } style={{marginRight: 16}} name="user" size={22} color="white" />
                    <SimpleLineIcons name="handbag" size={22} color="white" />
                    
                    { modalOptions && <View style={styles.modalUserOptions}>
                            <View style={styles.accessContainer}>
                                <Text>INICIAR SESION</Text>
                                <Text>REGISTRARME</Text>
                            </View>
                            {/* <View style={styles.accessContainer}>
                                <Text>MIS PEDIDOS</Text>
                                <Text>INFO PERSONAL</Text>
                            </View> */}
                        </View>
                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalUserOptions: {
        position: 'absolute',
        right: -12,
        top: 40,
        backgroundColor: 'white',
        padding: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        zIndex: 999
    },
    accessContainer: {
        height: 50,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 999
    },
    menuHambContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textMenuHamb: {
        color: 'white'
    },
    userImage: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: 'hidden'
    },
    innerNavbar: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    navbar: {
        width: '100%',
        height: 50,
        backgroundColor: "#191D1F",
        justifyContent: 'flex-end',
        paddingBottom: 2,
        zIndex: 888
    }
})

const mapStateToProps = state => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logOut: authActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);