import { StyleSheet,View,TouchableOpacity,Modal,Text } from "react-native";
import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import LogoModal from "./../modals/LogoModal"

import {
    Logo,DropDownArrow,Messenger
} from "../../../icons";

function Header(){
    const [isModal,setIsModal] = useState(false)
    const changeModalVisible = (bool) =>{
        setIsModal(bool)
    }

    const navigation = useNavigation();
    const goDirect = () =>{
        navigation.push('Direct');
    }
    return (
        <View style={styles.header}>
            <TouchableOpacity
                onPress={()=>{
                    setIsModal(true)
                    }} activeOpacity={0.7} style={styles.headerLogo}>
                <Logo size={104} fill="#000"/>
                <DropDownArrow style={styles.dropDownArrow}/>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={"0.7"} onPress={goDirect}>
                <Messenger style={styles.messenger}/>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType="fade"
                visible={isModal}
                nRequestClose={()=> changeModalVisible(false)}
            >
                <LogoModal
                    changeModalVisible={changeModalVisible}
                />
            </Modal>
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