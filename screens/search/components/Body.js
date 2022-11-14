import { View, Text, Dimensions } from 'react-native'
import React from 'react'



const Body = () => {

    const WIDTH = Dimensions.get("window").width

    return (
        <View>
            <View style={{flexDirection:"row"}}>
                <View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                </View>
                <View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                </View>
                <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/1.5,borderWidth:0.5}}></View>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/1.5,borderWidth:0.5}}></View>
                <View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                </View>
                <View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                    <View style={{backgroundColor:"red",width:WIDTH/3,height:WIDTH/3,borderWidth:0.5}}></View>
                </View>
            </View>
        </View>
    )
}

export default Body