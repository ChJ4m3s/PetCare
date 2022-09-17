import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from "./screens/Home";
import {CloudLightning, Coins, WarningCircle} from 'phosphor-react-native';
import {SafeAreaView, Text, View} from "react-native";
import React from "react";


const Tab = createBottomTabNavigator();

export default function App() {
  return <SafeAreaView style={{flex: 1}}>
      <View style={{
          flexDirection: 'row'
      }}>
          <View
              style={{
                  marginLeft: 20,
                  flexDirection: 'row'
              }}
          >
              <CloudLightning />
              <Text style={{marginLeft: 10}}>
                  Storm
              </Text>
              <WarningCircle
                  size={20}
                  color={"#d62828"}
                  style={{marginLeft: 10}}
              />
          </View>
          <View style={{flex: 1}} />
          <View
              style={{
                  flexDirection: 'row',
                  marginRight: 20,
                  borderStyle: 'solid',
                  borderWidth: 0.5,
                  paddingVertical: 3,
                  paddingHorizontal: 10,
                  borderRadius: 100,
                  borderColor: '#bc6c25'
              }}
          >
              <Coins
                  style={{marginRight: 10}}
                  color={"#bc6c25"}
                  size={20}
              />
              <Text>
                  124
              </Text>
          </View>
      </View>
      <Home />
    </SafeAreaView>
  ;
}
