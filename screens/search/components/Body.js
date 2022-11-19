import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import posts from '../../../data/posts'
import searchdata from '../../../data/searchdata'

const Body = (props) => {

    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height

    return (
        <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
            {searchdata.map((data,index)=>{
                return(
                    <>
                        {data.id===1?(
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row",justifyContent:"space-between",width:WIDTH*(2/3),flexWrap:'wrap'}}>
                                    {data.images.slice(0,4).map((imageData,imgIndex)=>{
                                    return(
                                        <TouchableOpacity
                                            onPressIn={()=>props.data(imageData)}
                                            onPressOut={()=>props.data(null)}
                                        >
                                            <Image source={imageData} 
                                            style={{
                                                width:WIDTH/3,
                                                height:WIDTH/3,
                                                borderWidth:1,
                                                borderColor:"white"
                                            }} />
                                        </TouchableOpacity>
                                    )
                                })}
                                </View>
                                <TouchableOpacity
                                    onPressIn={()=>props.data(imageData[4])}
                                    onPressOut={()=>props.data(null)}
                                > 
                                
                                    <Image style={{height:WIDTH/1.5,width:WIDTH/3}} source={data.images[4]}/>
                                </TouchableOpacity>
                             </View>
                        ):null} 
                        {data.id===2?(
                            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                <TouchableOpacity
                                    onPressIn={()=>props.data(imageData[4])}
                                    onPressOut={()=>props.data(null)}
                                >
                                    <Image style={{height:WIDTH/1.5,width:WIDTH/3}} source={data.images[4]}/>
                                </TouchableOpacity>
                                <View style={{flexDirection:"row",justifyContent:"space-between",width:WIDTH*(2/3),flexWrap:'wrap'}}>
                                    {data.images.slice(0,4).map((imageData,imgIndex)=>{
                                    return(
                                        <TouchableOpacity
                                            onPressIn={()=>props.data(imageData)}
                                            onPressOut={()=>props.data(null)}
                                        >
                                            <Image source={imageData} 
                                            style={{
                                                width:WIDTH/3,
                                                height:WIDTH/3,
                                                borderWidth:1,
                                                borderColor:"white"
                                            }} />
                                        </TouchableOpacity>
                                    )
                                })}
                                </View>
                             </View>
                        ):null} 
                    </>
                )
            })}
        </View>
    )
}

export default Body