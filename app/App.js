import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {Home} from "./screens/Home";
import { House } from 'phosphor-react-native';
import {colors} from "./assets/colors";
import {Text} from "react-native";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
              name="Home"
              component={Home}
              options={() => {
                  return {
                      tabBarIcon: ({focused}) => <House
                          color={focused ? colors.primary : colors.secondary}
                      />,
                      tabBarLabel: ({focused}) => <Text style={{
                          color: focused ? colors.primary : colors.secondary
                      }}>
                          Home
                      </Text>
                  }
              }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
