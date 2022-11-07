import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { BackArrow, Share } from '../../icons'
import Divider from './Divider'
import { useNavigation } from '@react-navigation/native'

const Comments = () => {

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
        
      </ScrollView>
    </View>
  )
}

export default Comments