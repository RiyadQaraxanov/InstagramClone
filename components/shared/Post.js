import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { BookMark, More, Like, Comment, Share, LikeFilled } from "../../icons";
import ReadMore from '@fawazahmed/react-native-read-more';
import FitImage from "./FitImage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

// function time({post}){
//     const timeFrom = post.date;
//     console.log(timeFrom);
// }

function Post({post}) {
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
                <FitImage media={media}/>
            ))}
            </ScrollView>
            <View style={styles.actions}>
                <View style={styles.leftActions}>
                    <TouchableOpacity style={styles.action} activeOpacity={0.7}>
                        <Like />
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
                <Text style={styles.likes}>{post.likes} likes</Text>
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

})