import {View} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
//Icons
import {Home} from "./icons";
import {HomeFilled} from "./icons";
import {Search} from "./icons";
import {SearchFilled} from "./icons";
import {Create} from "./icons";
import {CreateFilled} from "./icons";
import {Heart} from "./icons";
import {HeartFilled} from "./icons";
import {HeartDotted} from "./icons";
import {Profile} from "./icons";
import {ProfileFilled} from "./icons";
//Screens
import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import CreateScreen from "./screens/create";
import HeartScreen from "./screens/heart";
import ProfileScreen from "./screens/profile";
import Direct from "./screens/home/components/Direct"
import Status from "./screens/home/components/Status"
import Comments from "./components/shared/Comments";

function Screens() {
   

    const bottomTabScreen =()=>{
        return(
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel : false,
                headerShown: false,
                tabBarActiveTintColor:'#000',
                tabBarInactiveTintColor:'#262626',

            }}
        >
            <Tab.Screen 
                name="home" 
                component={HomeScreen} 
                options={{
                    headerTitle:'Anasayfa',
                    tabBarIcon:({focused,color,size})=>{
                        if(focused) 
                            return <HomeFilled size={size} fill={color}/>
                        return <Home size={size} fill={color}/>
                    }
                }}
            />
            <Tab.Screen 
                name="search" 
                component={SearchScreen} 
                options={{
                    headerTitle:'Ara',
                    tabBarIcon:({focused,color,size})=>{
                        if(focused) 
                            return <SearchFilled size={size} fill={color}/>
                        return <Search size={size} fill={color}/>
                    }
                }}
            />
            <Tab.Screen 
                name="create" 
                component={CreateScreen}
                options={{
                    headerTitle:'Create',
                    tabBarIcon:({focused,color,size})=>{
                        if(focused) 
                            return <CreateFilled size={size} fill={color}/>
                        return <Create size={size} fill={color}/>
                    }
                }} 
            />
            <Tab.Screen 
                name="heart" 
                component={HeartScreen} 
                options={{
                    headerTitle:'Heart',
                    tabBarIcon:({focused,color,size})=>{
                        if(focused) 
                            return <HeartFilled size={size} fill={color}/>
                        return <Heart size={size} fill={color}/>
                    },
                    tabBarIconStyle:{marginTop:7}
                }}
                
            />
            <Tab.Screen 
                name="profile" 
                component={ProfileScreen}
                options={{
                    headerTitle:'Profile',
                    tabBarIcon:({focused,color,size})=>{
                        if(focused) 
                            return <ProfileFilled size={size} fill={color}/>
                        return <Profile size={size} fill={color}/>
                    }
                }} 
            />
        </Tab.Navigator>
        )
    };
    return(
        <>
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    tabBarShowLabel : false,
                    headerShown: false,
                    tabBarActiveTintColor:'#000',
                    tabBarInactiveTintColor:'#262626',
                    
                }}
            >
                <Stack.Screen name="Bottom" component={bottomTabScreen}/>
                <Stack.Screen name="Direct" component={Direct}/>
                <Stack.Screen name="Comments" component={Comments}/>
            </Stack.Navigator>
        </NavigationContainer>
        </>
    ) 
}

export default Screens;
