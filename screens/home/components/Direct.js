import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native'
import React from 'react'
import {AddChat,BackArrow,Search,Play,Picture} from './../../../icons'
import User from "./../../../data/user"
import Screens from '../../../screens'
import { useNavigation } from "@react-navigation/native"
import { LinearGradient } from 'expo-linear-gradient';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Chats from "../../../data/chats"
import Stories from "./Stories"
import Status from "./Status";
import Divider from '../../../components/shared/Divider'
dayjs.extend(relativeTime)


function Direct({chat}) {
  const navigation = useNavigation();
  // const dividerCounter = 0;
  // const dividerCounterUp = ()=>{
  //   dividerCounter++
  // }
  const goChat = (userName) =>{
      navigation.push('ChatScreen',{name:userName.name});
  }
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
          
      <ScrollView  style={{backgroundColor:"white",paddingHorizontal:12,height:"100%"}}>
        
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
          <View key={direct.id} style={{marginTop:5,flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity>
              {direct.status==true ?(
                <LinearGradient
                  colors={['#DE0046', '#F7A34B']}
                  style={{width:60,
                    height:60,
                    borderRadius:33.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom:5}}
                  >
                  <Image 
                      style={{width:56,height:56,borderRadius:56,
                        borderWidth:2,
                        borderColor:'#fff'}}
                      source={{
                          uri: direct.avatar
                      }}
                  />
                </LinearGradient>
              ):
              <LinearGradient
                  colors={['#fff', '#fff']}
                  style={{width:60,
                    height:60,
                    borderRadius:33.5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom:5}}
                  >
                  <Image 
                      style={{width:56,height:56,borderRadius:56,
                        borderWidth:2,
                        borderColor:'#fff'}}
                      source={{
                          uri: direct.avatar
                      }}
                  />
                </LinearGradient>
              
              }  
            </TouchableOpacity>  
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"90%"}}>
              <TouchableOpacity style={{width:"80%",paddingLeft:10}} onPress={()=>
                navigation.push('ChatScreen',{name:direct.name})
                }>
                {direct.read==false ?(
                  <View>
                    <Text style={{fontWeight:"700"}}>{direct.name}</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                      <Text  style={{fontWeight:"700"}}>{direct.message}</Text>
                      <Text style={{fontSize:14, opacity:0.4}}> · {dayjs(direct.time).fromNow()}</Text>
                    </View>
                  </View>
                ):
                  <View>
                    <Text style={{}}>{direct.name}</Text>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                      <Text style={{opacity:0.4}}>{direct.message}</Text>
                      <Text style={{fontSize:14, opacity:0.4}}> · {dayjs(direct.time).fromNow()}</Text>
                    </View>
                  </View>
                }
              </TouchableOpacity>
              <TouchableOpacity style={{paddingRight:16}}>
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
                            paddingTop:-2,
                            marginRight:3
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
                </TouchableOpacity>
            </View>
            
            </View>
           )
         })}
      </ScrollView>
    </>
  )
}

export default Direct