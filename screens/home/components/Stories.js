import { ScrollView, Image, StyleSheet, View, Text } from "react-native";
import stories from "../../../data/stories";
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"

function Stories() {

    const navigation = useNavigation();
    const sendSubmit = () =>{
        navigation.navigate('Status');
    }
    return(
        <View
            style={styles.stories}
        >
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
            {
                stories.map(story =>(
                    <TouchableOpacity key={story.id} activeOpacity={"0.7"} onPress={sendSubmit}>
                        <View style={styles.story}>
                            <LinearGradient
                                colors={['#DE0046', '#F7A34B']}
                                style={styles.cover}
                            >
                                <Image 
                                    style={styles.avatar}
                                    source={{
                                        uri: story.user.avatar
                                    }}
                                />
                            </LinearGradient>       
                            <Text style={styles.username} numberOfLines={1}>{story.user.name}</Text>     
                        </View>
                    </TouchableOpacity>        
                ))
            }
        </ScrollView>
        </View>
    )
}

export default Stories;

const styles = StyleSheet.create({
    stories:{
        paddingVertical:10,
    },  
    story:{
        width:67,
        marginHorizontal:8,
        alignItems:'center'
    },
    cover:{
        width:68,
        height:68,
        borderRadius:33.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:5
    },
    avatar:{
        width:63,
        height:63,
        borderRadius:60,
        borderWidth:2,
        borderColor:'#fff'
    },
    username:{
        fontSize:12
    }
})