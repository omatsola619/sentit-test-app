import { View, Text, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";
import TokenAssetContainer from "./TokenAssetContainer";
import SwipeableFlatList from "react-native-swipeable-list";

const plusIcon = (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75h-3.25V16c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25V8c0-.41.34-.75.75-.75s.75.34.75.75v3.25H16c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill="#1F1B57"
    />
  </Svg>
);

const emptyBox = (
  <Svg width={184} height={148} fill="none">
    <Path fill="#fff" d="M0 0h184v147.2H0z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.368 98.624h66.976c.379 0 .749-.04 1.104-.119a5.17 5.17 0 0 0 1.104.119h38.272a5.152 5.152 0 1 0 0-10.304h-4.416a5.152 5.152 0 0 1 0-10.304h13.984a5.152 5.152 0 1 0 0-10.304H147.2a5.152 5.152 0 1 0 0-10.304h-47.104a5.152 5.152 0 1 0 0-10.304H58.144a5.152 5.152 0 1 0 0 10.304h-29.44a5.152 5.152 0 1 0 0 10.304h18.4a5.152 5.152 0 1 1 0 10.304h-29.44a5.152 5.152 0 1 0 0 10.304h28.704a5.152 5.152 0 1 0 0 10.304Zm119.968 0a5.152 5.152 0 1 0 0-10.304 5.152 5.152 0 0 0 0 10.304Z"
      fill="#F3F7FF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M83.255 82.658a8.832 8.832 0 1 0 17.49 0h21.431v19.646a2.208 2.208 0 0 1-2.208 2.208H64.032a2.208 2.208 0 0 1-2.208-2.208V82.658h21.431Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M101.568 82.432a9.568 9.568 0 1 1-19.122-.51H61.824l7.037-20.805a2.208 2.208 0 0 1 2.091-1.501h42.096c.947 0 1.788.604 2.092 1.5l7.036 20.806h-20.621c.009.169.013.339.013.51Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100.168 83.135c0 4.083-3.657 8.129-8.168 8.129-4.51 0-8.168-4.046-8.168-8.13 0-.132.004-1 .012-1.13H68.448L74.455 67.4c.259-.692.977-1.159 1.785-1.159h31.52c.808 0 1.527.467 1.785 1.16l6.007 14.604h-15.395c.007.13.011.998.011 1.13Z"
      fill="#E8F0FE"
    />
    <Path
      clipRule="evenodd"
      d="M62.744 82.073v19.495c0 .711.577 1.288 1.288 1.288h55.936c.711 0 1.288-.577 1.288-1.288V82.073l-6.988-20.662a1.288 1.288 0 0 0-1.22-.875H70.952c-.552 0-1.043.352-1.22.875l-6.988 20.662Z"
      stroke="#206EAD"
      strokeWidth={1.84}
    />
    <Path
      d="M72.128 81.696h9.38c1.381 0 1.381.97 1.381 1.472 0 4.878 4.045 8.832 9.035 8.832s9.035-3.954 9.035-8.832c0-.502 0-1.472 1.381-1.472h18.364m-54.042 0h1.786-1.786Z"
      stroke="#206EAD"
      strokeWidth={1.84}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m110.473 42.91-8.169 9.166M91.337 39.744v12.332-12.332Zm-19.21 3.167 8.17 9.165-8.17-9.165Z"
      stroke="#3D8DCD"
      strokeWidth={1.84}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TokensTab = ({
  navigation,
  loadingAsset,
  newAsset,
  testID1,
  testID2,
  setNewAsset,
  setLoading,
  setErrorMsg,
  setIsVisible,
}: any) => {
  const [noticeModal, setNoticeModal] = useState(false);
  const [selectDelete, setSelectDelete] = useState();
  const [success, setSuccess] = useState(false);

  return (
    <View style={tw`bg-[#FFFFFF] mx-[19px] h-full rounded-t-[20px]`}>
      <View
        style={tw`flex flex-row items-center justify-between mx-[27px] mt-[17px]`}
      >
        <View style={tw`flex-row items-center`}>
          <Text
            style={tw.style(`text-[14px] text-[#5D5A7E] pr-[5px]`, {
              fontFamily: "Sora-SemiBold",
            })}
          >
            Assets
          </Text>
          <Text
            style={tw.style(`text-[8px] pt-[4px] text-[#9B9B9B]`, {
              fontFamily: "Sora-SemiBold",
            })}
          >
            Net worth spread
          </Text>
        </View>
        <Pressable
          testID={testID1}
          onPress={() => navigation.navigate("Assets")}
        >
          {plusIcon}
        </Pressable>
      </View>
      {/* list of assets here is not showing the last asset in the container */}
      {loadingAsset ? (
        <View style={tw`items-center mt-[100px]`}>
          <ActivityIndicator size="large" color="#1F1B57" />
        </View>
      ) : (
        <>
          {newAsset?.length === 0 ? (
            <>
              <View style={tw`justify-center items-center mt-[40px]`}>
                {emptyBox}
              </View>
              <Text
                style={tw`text-center text-[12px] text-[#323B4B] font-semibold`}
              >
                No assets added yet
              </Text>
            </>
          ) : (
            <View style={tw`mx-[24px] mt-[25px] mb-[525px] android:mb-[475px]`}>
              <SwipeableFlatList
                testID={testID2}
                data={[]}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                keyExtractor={(index: number) => index}
                shouldBounceOnMount={true}
                maxSwipeDistance={100}
                renderItem={({ item, index }: any) => (
                  <TokenAssetContainer
                    testID3={`asset-${index}`}
                    key={index}
                    assetCode={item.asset_code}
                    amount={item.usd_bal}
                    assetBal={item.asset_bal}
                    onPress={() => {}}
                    image={item.image}
                    assetDesc={item.name}
                    assetIssuer={item.asset_issuer}
                  />
                )}
                renderQuickActions={({ item, index }: any) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Pressable
                        testID={`delete-${index}`}
                        style={{
                          backgroundColor: "#DE3F44",
                          justifyContent: "center",
                          alignItems: "center",
                          borderTopRightRadius: 10,
                          borderBottomRightRadius: 10,
                        }}
                        onPress={() => {}}
                      >
                        <Text style={tw`mx-[25px] my-[11px]`}>Delete</Text>
                      </Pressable>
                    </View>
                  );
                }}
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default TokensTab;
