import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import { BottomTabData } from "../data/BottomTabData";

const Tab = createBottomTabNavigator();

const shape = (
  <Svg width={99} height={56} fill="none">
    <Path
      d="M99 28C80.112 22.69 76.838 0 49.5 0S18.237 22.69 0 28c0 15.464 22.162 28 49.5 28S99 43.464 99 28Z"
      fill="#fff"
    />
  </Svg>
);

const TabButton = ({ icon, accessibilityState, onPress, testID }: any) => {
  const focused = accessibilityState.selected;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      activeOpacity={1}
      style={tw`items-center flex-1 pt-[20px]`}
    >
      <View style={tw`justify-center items-center`}>
        {icon}
        {focused && (
          <View
            style={tw`w-[5px] h-[5px] bg-[#01D6DC] rounded-full mt-[5px]`}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
const { width, height } = Dimensions.get("window");

const BottomTabNav = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ECF7FF",
      }}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 65,
            position: "absolute",
            backgroundColor: "#1F1B57",
            left: 18,
            right: 18,
            bottom: Platform.OS === "ios" ? 15 : 0,
            borderRadius: 20,
            marginHorizontal: Platform.OS !== "web" ? 20 : 0,
          },
        }}
      >
        {BottomTabData.map(({ title, icon, component, id, testID }) => (
          <Tab.Screen
            key={id}
            name={title}
            component={component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => (
                <TabButton {...props} icon={icon} testID={testID} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
      <View
        style={tw.style(
          `bg-[#01D6DC] h-[9px] rounded-b-[20px] w-[280px] ios:bottom-[15px] web:flex web:flex-row web:justify-center
          web:w-[80%] web:mx-auto`,
          {
            left: Platform.OS !== "web" && width / 2 - 140,
          }
        )}
      />
    </View>
  );
};

export default BottomTabNav;
