import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'


const LogoModal = (props) => {
    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height

    const closeModal = (bool) =>{
        props.changeModalVisible(bool)
    }

  return (
    <View
        style={{
            flex:1,
        }}
        disabled={true}
    >
        <View
            style={{
                width:160,
                height: 90,
                marginTop: 90,
                backgroundColor:"#fff",
                borderRadius:10,
                borderWidth:1,
                marginLeft:16
            }}
        >
            <Text></Text>
        </View>
        <TouchableOpacity 
            style={{position:"absolute",width:WIDTH,height:HEIGHT,zIndex:-1}}
            onPress={()=> {closeModal(false)}}
        >
            <TouchableOpacity>
                <Text>Following</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Favorites</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>
  )
}

export default LogoModal