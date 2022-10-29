import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'
import {AddChat,BackArrow,Search} from './../../../icons'
import User from "./../../../data/user"
import Screens from '../../../screens'
import { useNavigation } from "@react-navigation/native"



function Direct() {
  const navigation = useNavigation();

  
  return(
    <>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:40,paddingHorizontal:16,backgroundColor:"white"}}>
        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
          <TouchableOpacity activeOpacity={"0.7"} onPress={()=> navigation.goBack()}>
            <BackArrow style={{marginTop:11}}/>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={"0.7"}>
            <Text style={{fontWeight:"700",fontSize:18}}>{User[0].name}</Text>
          </TouchableOpacity>
        </View>
        <AddChat/>
      </View>    
      <ScrollView style={{backgroundColor:"white",paddingHorizontal:12}}>
        <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-between",height:40}}>
          <Text style={{fontWeight:"600"}}>
            Mesajlar
          </Text>
          <TouchableOpacity activeOpacity={"0.7"}>
            <Text style={{opacity:"0.5"}}>Istekler</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#EAEAFC", height:36, paddingHorizontal:5,borderRadius:10}}>
          <Search size={16} fill={"#3C3C43"}/>
          <TextInput placeholder={`Search`} placeholderTextColor={"#3C3C43"} style={{color:"#3C3C43",marginLeft:5,backgroundColor:"#EAEAFC",width:'95%'}}>
          </TextInput>
        </View>
      </ScrollView>
    </>
  )
}

export default Direct