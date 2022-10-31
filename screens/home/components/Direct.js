import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import {AddChat,BackArrow,Search,Play,Picture} from './../../../icons'
import User from "./../../../data/user"
import Screens from '../../../screens'
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient';

import Chats from "../../../data/chats"

function Direct({chat}) {
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
            Messages
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
         {Chats.map((direct) =>{
          return(
          <>
          <View key={direct.id} style={{marginTop:15,flexDirection:"row"}}> 
            <Image style={{width:56,height:56}} source={{uri: direct.avatar}}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"90%"}}>
              <View style={{paddingLeft:10}}>
                {direct.read==false ?(
                  <View>
                    <Text style={{fontWeight:"700"}}>{direct.name}</Text>
                    <Text style={{fontWeight:"700"}}>{direct.message}</Text>
                  </View>
                ):
                  <View>
                    <Text style={{}}>{direct.name}</Text>
                    <Text>{direct.message}</Text>
                  </View>
                }
              </View>
              <View style={{paddingRight:12}}>
                {
                  direct.read==false ?(
                    <>
                    {direct.sendPhoto == false ?(
                      <View
                        style={{
                          flexDirection:"row",
                          alignItems:"center",
                          justifyContent:"center"
                        }}
                      >
                        <View
                          style={{
                            width:8,
                            height:8,
                            borderRadius:8,
                            backgroundColor:"#378DEF",
                            marginRight:15
                          }}
                        ></View>
                        <Picture />
                      </View>
                    ): 
                      <>
                        <LinearGradient 
                          colors={["#378DEF","#6FC7FC"]}
                          style={{
                            width:29,
                            height:29,
                            backgroundColor:"cyan",
                            justifyContent: "center",
                            alignItems: "center",
                            display:"flex",
                            borderRadius: 29,
                            paddingLeft:2,
                            paddingTop:-2
                          }}>
                          <Play fill={"white"}/>
                        </LinearGradient>
                      </>
                    }
                    </>
                  ):
                  <View
                  style={{
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center"
                  }}
                  >
                    
                    <Picture style={{opacity:"0.7"}}/>
                  </View>
                }
              </View>
            </View>
            <View></View>
          </View> 
          </> )
         })}
      </ScrollView>
    </>
  )
}

export default Direct