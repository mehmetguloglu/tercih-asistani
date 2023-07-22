import React, { useState } from "react";
import {
  StyleSheet,
  Pressable,
  Image as RNImage,
  Platform,
  Dimensions,
} from "react-native";
import { setSelectedUniversity } from "../../bussiness/reducers/universityDetailsReducer";
import { useRouter } from "expo-router";
import { useAppDispatch } from "../../bussiness/hooks";
import { Stack, Text, Image, YStack } from "tamagui";
import Ribbon from "../Ribbon";
import UniversityLogo from "../UniversityLogo";
import AdItem from "../advertising-components/AdItem";
const { width } = Dimensions.get("window");
const UniversityItem = ({ item, index }) => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const universityPress = () => {
    route.push("/universities/details/" + item.name);
    dispatch(setSelectedUniversity(item));
  };

  return (
    <YStack f={1}>
      {index % 15 === 0 && !Platform.isPad && width < 700 ? (
        <AdItem />
      ) : (Platform.isPad || width > 700) &&
        (index % 30 == 0 || index % 30 == 1) ? (
        <AdItem />
      ) : null}
      <Pressable onPress={universityPress} style={[styles.universityItem]}>
        <UniversityLogo
          item={item}
          settings={{
            resizeMode: "stretch",
            width: 38,
            height: 40,
            my: 18,
            mx: 11,
          }}
        />
        <Stack f={1} jc="center">
          <Text color={"black"} fontSize={16} fontWeight={"500"}>
            {item.name}
          </Text>
          {/* CİTY VİEW
        <View style={styles.universityCityView}>
          <EvilIcons name="location" size={16} color="black" />
          <Text style={styles.universityCity}>
            {item.type == 3 ? "YURTDIŞI" : item.city?.name}
          </Text>
        </View> */}
        </Stack>
        <Ribbon
          bg={
            item.type == 2 ? "#3268bf" : item.type == 1 ? "#eda547" : "#cc434a"
          }
          bgb={
            item.type == 2 ? "#174082" : item.type == 1 ? "#b37019" : "#96171d"
          }
          text={
            item.type == 2 ? "Devlet" : item.type == 1 ? "Vakıf" : "Yurtdışı"
          }
        />
      </Pressable>
    </YStack>
  );
};
const styles = StyleSheet.create({
  universityItem: {
    marginVertical: 4,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 16,
    flex: 1,
    flexDirection: "row",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  universityIcon: {
    width: 38,
    height: 40,
    marginVertical: 18,
    marginHorizontal: 11,
  },
});

export default UniversityItem;
