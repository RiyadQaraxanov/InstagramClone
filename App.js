import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screens from "./screens";
import Status from './screens/home/components/Direct';
import { StatusBar } from 'expo-status-bar';

function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar style="dark" />
      <NavigationContainer >
          <Screens />
      </NavigationContainer> 
    </SafeAreaView>
  );

  
}

export default App;