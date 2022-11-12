import {View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "./components/Header";
import Stories from "./components/Stories";
import posts from "../../data/posts";
import Post from "../../components/shared/Post";
import Divider from "../../components/shared/Divider";



function Home(){
    return(
        <SafeAreaView style={styles.container}>
             <Header />
             <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
                <Stories />
                <Divider />
                {posts.map(post => <Post key={post.id} post={post}/>)}
             </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    }
})