import { Text, Pressable, useWindowDimensions } from "react-native";
import React from "react";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

const rightArrow = (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M10.822 4.448 15.375 9l-4.553 4.553M2.626 9h12.623"
      stroke="#1F1B57"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AuthButton = ({ name, onPress, testID }) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      style={tw.style(
        `flex-row bg-[#00B3FF] h-[68px] w-[197px] rounded-[20px] justify-center items-center`,
        {
          position: "absolute",
          bottom: -30,
          marginHorizontal: width / 2 - 100,
        }
      )}
    >
      <Text
        testID={`${testID}.label`}
        style={tw.style("text-[16px] text-[#1F1B57] pr-[8px]", {
          fontFamily: "Sora-Bold",
        })}
      >
        {name}
      </Text>
      {rightArrow}
    </Pressable>
  );
};

export default AuthButton;
