import { View, Text, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import { Search } from '../../../icons'

const Header = () => {
  return (
    <SafeAreaView>
        <View style={{paddingHorizontal:12,paddingTop:10,paddingBottom:10}}>
            <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#EAEAFC", height:36, paddingHorizontal:5,borderRadius:10}}>
                <Search size={16} fill={"#3C3C43"}/>
                <TextInput placeholder={`Search`} placeholderTextColor={"#3C3C43"} style={{color:"#3C3C43",marginLeft:5,backgroundColor:"#EAEAFC",width:'95%'}}>
                </TextInput>
            </View>
        </View>
    </SafeAreaView>
    
  )
}

export default Header