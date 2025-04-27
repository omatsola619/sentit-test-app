import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SvgUri } from "react-native-svg";

const TokenAssetContainer = ({
  assetCode,
  amount,
  assetBal,
  onPress,
  image,
  assetDesc,
  assetIssuer,
  testID3,
}: any) => {
  return (
    <TouchableOpacity
      testID={testID3}
      onPress={onPress}
      style={tw`bg-[#FFFFFF] rounded-[5px]`}
    >
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row items-center`}>
          {image?.includes("svg") ? (
            <SvgUri width="30" height="30" uri={image} />
          ) : image ? (
            <Image source={{ uri: image }} style={tw`w-[30px] h-[30px]`} />
          ) : (
            <View
              style={tw`w-[30px] h-[30px] rounded-full bg-[#00B3FF] justify-center items-center`}
            >
              <Text style={tw`text-[16px] text-[#FFFFFF] font-semibold`}>
                {assetCode[0]}
              </Text>
            </View>
          )}
          <View style={tw`pl-[15px]`}>
            <Text
              style={tw.style(`text-[12px] text-[#4C4B63]`, {
                fontFamily: "Sora-SemiBold",
              })}
            >
              {assetCode}
            </Text>
            <Text
              style={tw.style(`text-[10px] text-[#9B9B9B]`, {
                fontFamily: "Sora-Regular",
              })}
            >
              {assetDesc}
            </Text>
          </View>
        </View>
        <Text style={tw`text-[12px] text-[#8A94A6]`}>
          {assetIssuer?.substring(0, 4)}...{assetIssuer?.slice(-4)}
        </Text>
        <View>
          <Text
            style={tw.style(`text-[12px] text-[#4C4B63]`, {
              fontFamily: "Sora-SemiBold",
            })}
          >
            $ {Number(amount).toFixed(2)}
          </Text>
          <Text
            style={tw.style(`text-[10px] text-[#08B844] self-end`, {
              fontFamily: "Sora-Regular",
            })}
          >
            {Number(assetBal).toFixed(4)}
          </Text>
        </View>
      </View>
      <View style={tw`bg-[#D7E6F1] h-[1px] w-full my-[11px]`} />
    </TouchableOpacity>
  );
};

export default TokenAssetContainer;
