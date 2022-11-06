import { StyleSheet,View,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"

import {
    Logo,DropDownArrow,Messenger
} from "../../../icons";

function Header(){
    const navigation = useNavigation();
    const goDirect = () =>{
        navigation.push('Direct');
    }
    return (
        <View style={styles.header}>
            <View style={styles.headerLogo}>
                <Logo size={104} fill="#000"/>
                <DropDownArrow style={styles.dropDownArrow}/>
            </View>
            <TouchableOpacity activeOpacity={"0.7"} onPress={goDirect}>
                <Messenger style={styles.messenger}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerLogo:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropDownArrow: {
        paddingLeft: 26,
    },
    messenger: {
        marginTop: 10,
    },
    header: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft:16,
        paddingRight:5,
        justifyContent:'space-between',
    }
})