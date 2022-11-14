import {View, Text, ScrollView} from "react-native";
import Header from "./components/Header"
import Body from "./components/Body"


function Search(){
    return(
        <ScrollView style={{backgroundColor:"#fff"}}>
            <Header />
            <Body />
        </ScrollView>
    )
}

export default Search;