import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./screens/Home";
import { House } from 'phosphor-react-native';
import {colors} from "./assets/colors";
import {SafeAreaView, Text} from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
  return <SafeAreaView style={{flex: 1}}>
        <Home />
    </SafeAreaView>
  ;
}
