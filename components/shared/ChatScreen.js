import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React, {  useState, useEffect, useCallback } from 'react'
import chats from '../../data/chats'
import { AddChat, BackArrow } from '../../icons'
import { useNavigation,useRoute } from "@react-navigation/native"
import { GiftedChat } from 'react-native-gifted-chat'

const ChatScreen = (props) => {
    const navigation = useNavigation();
    const route = useRoute();

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: route.params.avatar,
        },
        
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  const HEIGHT = Dimensions.get("window").height

  return (
    <View style={{flexDirection:"column"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:40,paddingHorizontal:16,backgroundColor:"white"}}>
            
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity activeOpacity={"0.7"} onPress={()=> navigation.goBack()}>
                <BackArrow style={{marginTop:11}}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={"0.7"}>
                <Text style={{fontWeight:"700",fontSize:18}}>{route.params.name}</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row"}}>
                <AddChat/>
                <AddChat/>
            </View>
            {/* <ScrollView> */}
            
            {/* </ScrollView> */}
        </View>
        <View style={{height:HEIGHT-120, backgroundColor:"#fff"}}>
        <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                _id: 1,
                }}
            />
        </View>
    </View>
  )
}

export default ChatScreen