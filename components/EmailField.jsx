import { View, TextInput } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "twrnc";

const emailIcon = (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      opacity={0.4}
      d="M1.5 9.727V5.242C1.5 3.172 3.18 1.5 5.25 1.5h7.5c2.07 0 3.75 1.672 3.75 3.742v5.235a3.743 3.743 0 0 1-3.75 3.736h-1.125a.76.76 0 0 0-.6.3L9.9 16.005c-.495.66-1.305.66-1.8 0l-1.125-1.492a.834.834 0 0 0-.6-.3H5.25a3.743 3.743 0 0 1-3.75-3.736v-.75Z"
      fill="#B2AFCE"
    />
    <Path
      d="M9 9a.747.747 0 0 1-.75-.75c0-.412.338-.75.75-.75s.75.338.75.75S9.42 9 9 9Zm3 0a.747.747 0 0 1-.75-.75c0-.412.338-.75.75-.75s.75.338.75.75S12.42 9 12 9ZM6 9a.747.747 0 0 1-.75-.75c0-.412.338-.75.75-.75s.75.338.75.75S6.42 9 6 9Z"
      fill="#B2AFCE"
    />
  </Svg>
);

const EmailField = ({ value, setValue }) => {
  return (
    <View
      style={tw`h-[52px] rounded-[15px] bg-[#474C7E] flex-row items-center px-[16px]`}
    >
      {emailIcon}
      <TextInput
        value={value}
        onChangeText={(text) => setValue(text)}
        style={tw.style(
          `h-[52px] text-[#FFFFFF] text-[12px] ml-[12px] flex-1`,
          {
            fontFamily: "Sora-SemiBold",
          }
        )}
        placeholder="Email"
        placeholderTextColor="#B2AFCE"
        autoCapitalize="none"
        autoCorrect={false}
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        enablesReturnKeyAutomatically
        autoFocus={false}
      />
    </View>
  );
};

export default EmailField;
