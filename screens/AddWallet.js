import React, { useState, useEffect, useRef } from "react"
import { Text, View, Image, TouchableOpacity, ScrollView, useWindowDimensions, TextInput } from "react-native"
import { images, icons, colors, fontSizes } from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

const AddWallet = (props) => {
    const { navigate, goBack } = props.navigation
    return <View>

        <TouchableOpacity onPress={() => {
            goBack()
        }
        }><Text>HEHEH1</Text></TouchableOpacity>
    </View>
}

export default AddWallet