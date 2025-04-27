import { Pressable, TextInput, View } from "react-native";
import React, { useState } from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
import tw from "twrnc";

const keyIcon = (
  <Svg width={18} height={18} fill="none" xmlns="http://www.w3.org/2000/svg">
    <G
      clipPath="url(#a)"
      stroke="#B2AFCE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        d="M14.842 11.197a5.681 5.681 0 0 1-5.7 1.403l-3.533 3.525c-.255.262-.757.42-1.117.367l-1.635-.225c-.54-.075-1.043-.585-1.125-1.124l-.225-1.636c-.053-.36.12-.862.367-1.117L5.4 8.865a5.677 5.677 0 0 1 9.435-5.7 5.683 5.683 0 0 1 .008 8.033v0Z"
        strokeMiterlimit={10}
      />
      <Path opacity={0.4} d="m5.168 13.116 1.725 1.725" strokeMiterlimit={10} />
      <Path
        opacity={0.4}
        d="M10.875 8.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const eyeClose = (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      opacity={0.4}
      d="M14.168 6.1a9.712 9.712 0 0 0-1.087-1.407l-2.513 2.514c.08.246.127.513.127.793A2.69 2.69 0 0 1 8 10.693c-.28 0-.546-.046-.793-.126l-2.307 2.306a6.305 6.305 0 0 0 3.1.834c1.187 0 2.34-.347 3.394-.994 1.053-.653 2-1.606 2.773-2.82.667-1.04.667-2.746 0-3.793Z"
      fill="#fff"
    />
    <Path
      d="M9.347 6.653 6.653 9.347A1.934 1.934 0 0 1 6.093 8 1.91 1.91 0 0 1 8 6.093c.52 0 1 .22 1.347.56Z"
      fill="#fff"
    />
    <Path
      opacity={0.4}
      d="m12.167 3.833-2.26 2.26A2.657 2.657 0 0 0 8 5.307 2.69 2.69 0 0 0 5.307 8c0 .747.3 1.42.786 1.907l-2.253 2.26h-.007a9.522 9.522 0 0 1-2-2.274c-.666-1.046-.666-2.746 0-3.793.774-1.213 1.72-2.167 2.774-2.82C5.66 2.64 6.813 2.287 8 2.287c1.487 0 2.927.546 4.167 1.546Z"
      fill="#fff"
    />
    <Path
      d="M9.905 7.999A1.91 1.91 0 0 1 8 9.905c-.04 0-.074 0-.114-.013l2.007-2.007A.33.33 0 0 1 9.905 8Zm4.608-6.513c-.2-.2-.527-.2-.727 0l-12.3 12.307a.515.515 0 0 0 .166.836.506.506 0 0 0 .554-.116L14.513 2.206a.496.496 0 0 0 0-.72Z"
      fill="#fff"
    />
  </Svg>
);

const eyeOpen = (
  <Svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      opacity={0.4}
      d="M14.168 6.1a9.712 9.712 0 0 0-1.087-1.407l-2.513 2.514c.08.246.127.513.127.793A2.69 2.69 0 0 1 8 10.693c-.28 0-.546-.046-.793-.126l-2.307 2.306a6.305 6.305 0 0 0 3.1.834c1.187 0 2.34-.347 3.394-.994 1.053-.653 2-1.606 2.773-2.82.667-1.04.667-2.746 0-3.793Z"
      fill="#fff"
    />
    <Path
      d="M9.347 6.653 6.653 9.347A1.934 1.934 0 0 1 6.093 8 1.91 1.91 0 0 1 8 6.093c.52 0 1 .22 1.347.56Z"
      fill="#fff"
    />
    <Path
      opacity={0.4}
      d="m12.167 3.833-2.26 2.26A2.657 2.657 0 0 0 8 5.307 2.69 2.69 0 0 0 5.307 8c0 .747.3 1.42.786 1.907l-2.253 2.26h-.007a9.522 9.522 0 0 1-2-2.274c-.666-1.046-.666-2.746 0-3.793.774-1.213 1.72-2.167 2.774-2.82C5.66 2.64 6.813 2.287 8 2.287c1.487 0 2.927.546 4.167 1.546Z"
      fill="#fff"
    />
  </Svg>
);

const PasswordField = ({ value, setValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View
      style={tw`h-[52px] rounded-[15px] bg-[#474C7E] flex-row items-center px-[16px]`}
    >
      {keyIcon}
      <TextInput
        secureTextEntry={!showPassword}
        style={tw.style(
          `h-[52px] text-[#FFFFFF] text-[12px] ml-[12px] flex-1`,
          {
            fontFamily: "Sora-SemiBold",
          }
        )}
        placeholder="Password"
        placeholderTextColor="#B2AFCE"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Pressable
        onPress={() => setShowPassword(!showPassword)}
        testID={"eye-close-test-Id"}
      >
        {showPassword ? eyeOpen : eyeClose}
      </Pressable>
    </View>
  );
};

export default PasswordField;
