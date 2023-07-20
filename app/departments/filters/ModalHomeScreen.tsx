import { View, Pressable, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
import { Line } from "../../../components";
import { Input, XStack, Text, YStack, ScrollView } from "tamagui";
import {
  setFilterPoint,
  setFilterRanking,
} from "../../../bussiness/reducers/departmentDetailsReducer";

const ModalHomeScreen = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { filterPoint, filterRanking } = useAppSelector(
    (state) => state.departmentDetailsReducer
  );
  const [minPoint, setMinPoint] = useState(filterPoint[0]);
  const [maxPoint, setMaxPoint] = useState(filterPoint[1]);
  const [minRank, setMinRank] = useState(filterRanking[0]);
  const [maxRank, setMaxRank] = useState(filterRanking[1]);
  // const [languageSelected, setLanguageSelected] = useState(false);
  // const languageSwitch = () =>
  //   setLanguageSelected((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <ScrollView pt={16} pb={24} ml={17} mr={7} separator={<Line my={15} />}>
        {/* <ModalHomeButtons
          text={"Şehir"}
          navigatePress={() => {
            router.push("/departments/filters/ModalCityScreen");
            // navigation.navigate("ModalCityScreen");
          }}
        /> */}

        <YStack>
          <Text py={8} style={{ fontWeight: "500" }}>
            Taban Puanı
          </Text>

          <XStack>
            <Input
              f={1}
              mr={4}
              size={"$3"}
              borderColor={"lightgray"}
              placeholder="Minimum değer giriniz"
              keyboardType="number-pad"
              inputMode="numeric"
              value={minPoint.toString()}
              onChangeText={(e) =>
                Number(e) <= 500 ? setMinPoint(Number(e)) : null
              }
            />
            <Input
              f={1}
              ml={4}
              size={"$3"}
              borderColor={"lightgray"}
              placeholder="Maximum değer giriniz"
              value={maxPoint.toString()}
              keyboardType="number-pad"
              inputMode="numeric"
              onChangeText={(e) =>
                Number(e) <= 500 ? setMaxPoint(Number(e)) : null
              }
            />
          </XStack>
          {minPoint >= maxPoint ? (
            <Text color="red" fontWeight="600" fontSize={13} my={4}>
              Lütfen sola düşük olan, sağa yüksek olan değeri yazınız!
            </Text>
          ) : null}
        </YStack>

        <YStack>
          <Text py={8} style={{ fontWeight: "500" }}>
            Başarı Sıralaması
          </Text>

          <XStack>
            <Input
              f={1}
              mr={4}
              size={"$3"}
              borderColor={"lightgray"}
              placeholder="Minimum değer giriniz"
              keyboardType="number-pad"
              inputMode="numeric"
              value={minRank.toString()}
              onChangeText={(e) =>
                Number(e) <= 10000000 ? setMinRank(Number(e)) : null
              }
            />
            <Input
              f={1}
              ml={4}
              size={"$3"}
              borderColor={"lightgray"}
              placeholder="Maximum değer giriniz"
              value={maxRank.toString()}
              keyboardType="number-pad"
              inputMode="numeric"
              onChangeText={(e) =>
                Number(e) <= 10000000 ? setMaxRank(Number(e)) : null
              }
            />
          </XStack>
          {minRank >= maxRank ? (
            <Text
              color="red"
              fontWeight="600"
              fontSize={13}
              ml={17}
              my={4}
              mr={7}
            >
              Lütfen sola düşük olan, sağa yüksek olan değeri yazınız!
            </Text>
          ) : null}
        </YStack>

        {/* YABANCI DİL BİLGİSİ
        <Pressable
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 17,
            paddingRight: 7,
            paddingVertical:
              Platform.OS == "ios" || Platform.OS == "macos" ? 4.5 : 0,
          }}
        >
          <Text style={{ fontWeight: "500" }}>Yabancı Dil</Text>
          <Switch
            trackColor={{ false: "black", true: "#0066FF" }}
            ios_backgroundColor={"black"}
            thumbColor={Platform.OS == "android" ? "#777777" : "white"}
            onValueChange={languageSwitch}
            value={languageSelected}
          />
        </Pressable>
         */}
      </ScrollView>
      <SafeAreaView
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Pressable
          style={{
            paddingVertical: 10,
            backgroundColor: "#F3F3F3",
            marginRight: 5,
            borderRadius: 8,
            flex: 1,
            alignItems: "center",
            margin: 15,
          }}
          onPressIn={() => {
            return (
              dispatch(setFilterRanking([0, 10000000])),
              setMaxRank(10000000),
              setMinRank(0),
              dispatch(setFilterPoint([0, 500])),
              setMaxPoint(500),
              setMinPoint(0)
            );
          }}
        >
          <Text fontSize={14} color={"#BD1E07"} fontWeight={"500"}>
            Temizle
          </Text>
        </Pressable>
        <Pressable
          disabled={
            (minRank >= maxRank ? true : false) || minPoint >= maxPoint
              ? true
              : false
          }
          style={{
            paddingVertical: 10,
            backgroundColor:
              minRank > maxRank || minPoint > maxPoint ? "gray" : "#0066FF",
            marginLeft: 5,
            borderRadius: 8,
            flex: 1,
            alignItems: "center",
            margin: 15,
          }}
          onPressIn={() => {
            dispatch(
              setFilterRanking([
                minRank < maxRank || !maxRank ? Number(minRank) : 0,
                minRank < maxRank || !minRank ? Number(maxRank) : 10000000,
              ])
            );
            dispatch(
              setFilterPoint([
                minPoint == 0 || minPoint > maxPoint ? 0 : Number(minPoint),
                maxPoint == 0 || minPoint > maxPoint ? 500 : Number(maxPoint),
              ])
            );
            router.back();
          }}
        >
          <Text fontSize={14} color={"white"} fontWeight={"500"}>
            Uygula
          </Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default ModalHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  },

  modalHeaderView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#777777",
  },
  headerButtonsView: {
    flexDirection: "row",
    alignItems: "center",
  },
});
