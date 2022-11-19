import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const PlusCircle = () => {
  return (
    <TouchableOpacity style={{margin:25,justifyContent:"center",alignItems:"center"}}>
        <AntDesign name="pluscircleo" style={{fontSize:40,opacity:0.5}}/>
    </TouchableOpacity>
  )
}

export default PlusCircle