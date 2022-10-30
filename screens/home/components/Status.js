import { View, Text, Modal, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'

import {statusData} from '../../../data/statusdata'

import Riyad1 from "../../../assets/Images/Riyad1.jpg"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Status = ({visible,onClose}) => {
  //const [visible,setVisible] = useState(true)
  return(
    <Modal visible={visible}>
      <SafeAreaView 
        style={{
          backgroundColor:"black",
          flex:1,
          paddingHorizontal:10,
          flexDirection:"column"
        }}>
        <ScrollView 
        onScrollEndDrag={()=>onClose(true)}>
          <View style={{
          marginTop:10,
          flexDirection: "column",
          width:"100%"
          }} >
            <View style={{flexDirection:"row"}}>

            {statusData[0].statusData.map((data,index)=>
              <View key={index} style={{
                height:2,
                backgroundColor:"#bbbbbb",
                flex:1,
                marginHorizontal:2,
                borderRadius:2
                }}>
              </View>
            )}
            </View>
          
            <View style={{backgroundColor:"#222",flex:1,borderRadius:15}}>
              <Image 
                  source={Riyad1}
                  resizeMode="contain"
                  style={{
                    width:"100%",
                    height: height/1.2,
                    maxHeight: height/1.2,

                  }}
              />
            </View>
          </View>
            <TouchableOpacity
              onPress={()=>{
                console.log('Left')
              }}
              style={{position:"absolute",width:width/2,height:height*0.9,bottom:30}}
            >
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{
                console.log('Right')
              }}
              style={{position:"absolute",width:width/2,height:height*0.9,bottom:30,right:0}}
            >
            </TouchableOpacity>
            <TextInput style={{color:"white"}}>asdad</TextInput>
        </ScrollView>
      </SafeAreaView>
    </Modal>
    ) 
}

export default Status