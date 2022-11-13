import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { BackArrow, Share } from '../../icons'
import Divider from './Divider'
import { useNavigation, useRoute } from '@react-navigation/native'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import ReadMore from '@fawazahmed/react-native-read-more';

dayjs.extend(relativeTime)

const Comments = ({post}) => {

  const WIDTH = Dimensions.get("window").width

  const route = useRoute()

  const navigation = useNavigation();

  return (
    <View>
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:16,height:40,backgroundColor:"#fff"}}>
        <TouchableOpacity activeOpacity={"0.7"} onPress={()=> navigation.goBack()}>
          <BackArrow style={{marginTop:11}}/>
        </TouchableOpacity>
        <Text style={{fontSize:18,fontWeight:"700"}}>Comments</Text>
        <TouchableOpacity>
          <Share style={{marginTop:5}}/>
        </TouchableOpacity>
      </View>
        <Divider/>
      <ScrollView style={{backgroundColor:"#fff",height:"100%"}}>
        <View style={{flexDirection:"row"}}>
          <Image
            style={{width:30,height:30, margin:16}}
            source={{uri:route.params.userAvatar}}
          />
          <View style={{marginTop:16}}>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontWeight:"600",width:WIDTH/1.1}}>{route.params.userName} <Text style={{fontWeight:"400"}}>{route.params.description}</Text></Text>
              
            </View>
            
            <View style={{flexDirection:"row"}}>
              <Text style={{opacity:0.5, fontSize:13, paddingTop:5}}>{dayjs(route.params.commentDate).fromNow()}</Text>
              <Text style={{opacity:0.5, fontSize:13, paddingHorizontal:16, paddingTop:5}}>Translate</Text>
            </View>
          </View>
        </View>
        <View style={{height:0.3, backgroundColor:'#DADADA',width:WIDTH}}/>
        {route.params.comments==0?<Text>dsa</Text>:
          <Text>asd</Text>
        }
      </ScrollView>
    </View>
  )
}

export default Comments