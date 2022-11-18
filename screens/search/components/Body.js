import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import posts from '../../../data/posts'


const Body = () => {

    const WIDTH = Dimensions.get("window").width

    return (
        <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
            {posts.map((data,index)=>{
                return(
                    <>
                        {/* {data.id===0?(
                            <View> */}
                                {data.medias.map((imageData,imgIndex)=>{
                                    return(
                                        <TouchableOpacity>
                                            <Image source={
                                                {uri:imageData.src}
                                            } 
                                            style={{
                                                width:WIDTH/3,
                                                height:WIDTH/3,
                                                borderWidth:1,
                                                borderColor:"white"
                                            }} />
                                        </TouchableOpacity>
                                    )
                                })}
                            {/* </View>
                        ):null} */}
                    </>
                )
            })}
        </View>
    )
}

export default Body