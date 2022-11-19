import {View, Text, ScrollView, StatusBar, Dimensions, Image} from "react-native";
import Header from "./components/Header"
import Body from "./components/Body"
import PlusCircle from "../../components/shared/PlusCircle";
import { useState } from "react";


function Search(){

    const [image,setImage] = useState()

    const getData = data =>{
        setImage(data);
    }

    const WIDTH = Dimensions.get("window").width
    const HEIGHT = Dimensions.get("window").height

    return(
        <View>
            <ScrollView 
                style={{backgroundColor:"#fff"}}
                showsVerticalScrollIndicator={false}    
            >
                <Header />
                <Body data={getData}/>
                <PlusCircle/>
            </ScrollView>

            {
                image ?
                (
                    <View style={{position:"relative",zIndex:1,width:"100%",height:"100%",}}>
                        <StatusBar  backgroundColor="#525252" barStyle="dark-content"/>
                        <View
                            style={{
                                position:"absolute",
                                top:HEIGHT/6,
                                left:WIDTH/18,
                                width:350,
                                height:465,
                                borderRadius:50,
                                zIndex:1,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection:"row",
                                    alignItems:"center",
                                    paddingVertical:10,
                                    paddingHorizontal:15
                                }}
                            >
                                <Image 
                                    source={image}
                                    style={{width:30,height:30,borderRadius:100}}
                                />
                                <View>
                                    <Text style={{marginLeft:5}}>iamkharakhan</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    
                                    alignItems:"center",
                                }}
                            >
                                <Image 
                                    source={image}
                                    style={{width:WIDTH/1.5,height:HEIGHT/2}}
                                />

                            </View>
                        </View>
                    </View>

                ):null
            }

        </View>
        
    )
}

export default Search;