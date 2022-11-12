import { View, Text, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import React from 'react'
import { BackArrow, } from '../../../icons'
import { useNavigation } from '@react-navigation/native'
import chats from '../../../data/chats'
import Divider from '../../../components/shared/Divider'
import { Search } from '../../../icons'
import Octicons from "react-native-vector-icons/Octicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const NewMessage = () => {

    const navigation = useNavigation();
    var counter = 0
  return (
    <View style={{paddingHorizontal:16,backgroundColor:"white"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:40}}>
          <TouchableOpacity activeOpacity={"0.7"} onPress={()=> navigation.goBack()}>
            <BackArrow style={{marginTop:11}}/>
          </TouchableOpacity>
          <Text style={{fontWeight:"700",fontSize:18}}>New Message</Text>
          <Text style={{fontWeight:"700",fontSize:14,color:"#5f5f5f"}}>Chat</Text>
          
        </View>
        <Divider />
        <Text style={{fontWeight:"700", }}>
            Send to
        </Text>
        <View style={{flexDirection:"row",alignItems:"center", height:36, paddingHorizontal:5,borderRadius:10,marginTop:6}}>
          <TextInput placeholder={`Search`} placeholderTextColor={"#3C3C43"} style={{ color:"#3C3C43",marginLeft:-5,width:'95%'}}>
          </TextInput>
        </View>
        <View style={{flexDirection:"row",alignItems:"center",width:"100%",marginTop:12,marginBottom:12}}>
            <Octicons
                name='lock'
                size={20}
                style={{marginLeft:0,fontWeight:"700"}}
            />
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                <Text style={{marginLeft:10,marginRight:16}}>Uçtan uca şifrelemeyi kullan</Text>
                <TouchableOpacity>
                    <SimpleLineIcons
                        name='arrow-right'
                        style={{marginLeft:10,marginRight:16}}
                    />
                </TouchableOpacity>
            </View>
        </View>
        <FlatList 
            data={chats}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>counter++} style={{marginTop:7,marginBottom:7,flexDirection:"row",alignItems:"center"}}>
                    <Image
                        style={{width:52,height:52}}
                        source={{uri:item.avatar}}
                    />
                    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"}}>
                        <Text style={{marginLeft:10,fontWeight:"600"}}>{item.name}</Text>
                        <FontAwesome 
                            style={{marginLeft:10,marginRight:52,color:"4e4e4e"}}
                            size={25}
                            name={counter>0?'circle':'circle-thin'}
                        />
                    </View>
                    
                </TouchableOpacity>
            )}
        />
    </View>
    
  )
}

export default NewMessage