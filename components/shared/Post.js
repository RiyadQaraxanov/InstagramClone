import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, SafeAreaView,useWindowDimensions, } from "react-native";
import Animated, {Easing,useAnimatedStyle,useSharedValue,withDelay,withTiming} from "react-native-reanimated"
import { BookMark, More, Like, Comment, Share, LikeFilled } from "../../icons";
import ReadMore from '@fawazahmed/react-native-read-more';
import FitImage from "./FitImage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import React, {useState,useCallback, useRef} from 'react';
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionic from "react-native-vector-icons/Ionicons"
import { TapGestureHandler } from "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler'



dayjs.extend(relativeTime)

// function time({post}){
//     const timeFrom = post.date;
//     console.log(timeFrom);
// }

function Post({post}) {
   


    //like
    const isLiked = useSharedValue(false);
    const scale = useSharedValue(0);

    const style = useAnimatedStyle(()=>{
        return{
            transform: [{scale: scale.value}]
        }
    })

    const likeAnimation = ()=>{
        isLiked.value = true;
        scale.value = withTiming(
            1,
            {
                duration: 200,
                easing: Easing.bezier(0.68, 0, 0.32, 1.6),
            },
            (isFinished)=>{
                if(isFinished){
                    scale.value = withDelay(
                        500,
                        withTiming(0, {
                            easing: Easing.bezier(1, 0, 0, 1),
                        })
                    )
                }
            }
        )
        
        if(post.isLiked===false) {setLike(!like)
        post.isLiked=true
        }
        console.log(postHeight)
    }

    const [like,setLike] = useState(post.isLiked)

    //Share

    const ShareBtn = ()=>{
        console.log("as")
        return(
            <GestureHandlerRootView>
                <ShareBtn />
            </GestureHandlerRootView>
            
        )
    }

    return(
        <View style={{marginBottom:15}}>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image 
                        style={styles.avatar}
                        source = {{
                            uri: post.user.avatar
                        }}
                    />
                    <Text style={styles.title}>{post.user.name}</Text>
                </View>
                <More />
            </View>
            {/* <FitImage src={post.image} /> */}
            <ScrollView style={{flexDirection:'row'}} horizontal={true}>
            {post.medias.map(media =>(
                
                <TapGestureHandler
                    numberOfTaps={2}
                    onActivated={likeAnimation}
                >   
                <View style={{position:"relative"}}>
                    <View>
                        <FitImage media={media}/>
                    </View>
                    <Animated.View
                        style={[styles.doubleTapIcon, style]}
                    > 
                        <Ionic
                        name="heart"
                        size={100}
                        color="white"
                        style={styles.shadow}
                        />
                    </Animated.View>
                </View>
                </TapGestureHandler>

            ))}
            </ScrollView>
            <View style={styles.actions}>
                <View style={styles.leftActions}>
                    <TouchableOpacity onPress={()=>{
                        if(post.isLiked == false) {
                            post.isLiked = true
                        }
                        else if(post.isLiked==true) post.isLiked = false
                        setLike(!like)
                    }} style={styles.action} >
                        <AntDesign
                            name={like ? 'heart' : 'hearto'}
                            style={{
                                fontSize:21,
                                marginBottom:4,
                                paddingRight:6,
                                color: like ? 'red':'black',
                                fontWeight:700
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                        <Comment />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                        <Share />
                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                        <BookMark />
                </TouchableOpacity>
            </View>
            <View style={styles.like}>
                <Text style={styles.likes}>
                {like ? post.likes +1: post.likes} likes</Text>
            </View>
            <View style={styles.description}>
                <ReadMore numberOfLines={1} seeMoreStyle={{color:'#999'}} animate={true} ellipsis={'  ...'} expandOnly={true} seeMoreText={'more'}>
                    
                        <Text style={styles.descriptionName}>{post.user.name}</Text> {post.description}
                    
                </ReadMore>
            </View>
            {post.comments> 0 &&(
                <TouchableOpacity style={{paddingTop:5,paddingHorizontal:12}} activeOpacity={0.7}>
                    <Text style={{color:'#999'}}> View all {post.comments} comments</Text>
                </TouchableOpacity>
            )}
            <View>
                <Text style={{opacity:0.5, fontSize:13, paddingHorizontal:16, paddingTop:5}}>{dayjs(post.date).fromNow()}</Text>
            </View>
            
        </View>
    )
};

export default Post;

const postHeight = Dimensions.get('screen').height
const styles = StyleSheet.create({
    
    header:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height:49,
        paddingLeft:8,
        paddingRight: 14
    },
    avatar: {
        width:30,
        height:30,
        borderRadius:30,
        marginRight:9
    },
    username:{
        flexDirection:'row',
        alignItems:'center',
    },
    title:{
        
        fontSize:14,
        fontWeight:'600'
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:40,
        paddingLeft:12,
        paddingRight:9,
    },
    action:{
        marginRight: 8
    },
    leftActions:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    shadow: {
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },
    likes:{
        paddingLeft: 16,
        fontWeight:'700'
    },
    like:{
        height:22,
        justifyContent:'center',
    },
    description:{
        marginHorizontal:16
    },
    descriptionName:{
        fontWeight:'700',
    },
    doubleTapIcon: {
        position: "absolute",
        alignSelf: "center",
        alignItems:"center",
        justifyContent:"center",
        height: postHeight/2
    },
})