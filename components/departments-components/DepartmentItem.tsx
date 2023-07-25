import React, { useState } from "react";
import { StyleSheet, Pressable, Dimensions, Platform } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setSelectedDepartment } from "../../bussiness/reducers/departmentDetailsReducer";
import { Stack, Text, YStack } from "tamagui";
import Ribbon from "../Ribbon";
// import AdItem from "../advertising-components/AdItem";
// import { getAdvLocationCount } from "../../utils/device-helper";
// const { width } = Dimensions.get("window");
const DepartmentItem = ({ item, index }) => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [background, setBackground] = useState("white");
  const departmentPress = () => {
    route.push("/departments/details/" + item.name);
    dispatch(setSelectedDepartment(item));
  };
  // const advLocation = getAdvLocationCount();

  return (
    <YStack f={1}>
      {/* {index % advLocation === 0 && !Platform.isPad && width < 700 ? (
        <AdItem />
      ) : (Platform.isPad || width > 700) &&
        (index % (advLocation * 2) == 0 || index % (advLocation * 2) == 1) ? (
        <AdItem />
      ) : null} */}
      <Pressable
        style={[styles.departmentItem, { backgroundColor: background }]}
        onPress={departmentPress}
        onPressIn={() => setBackground("#f7f7f7")}
        onPressOut={() => setBackground("white")}
      >
        <Stack f={1} jc={"center"} mx={16}>
          <Text fontSize={16} fontWeight={"600"}>
            {item.name}
          </Text>
        </Stack>
        <Ribbon
          bg={
            item.pointType == "EA"
              ? "#3268bf"
              : item.pointType == "DİL"
              ? "#eda547"
              : item.pointType == "SÖZ"
              ? "#cc434a"
              : "green"
          }
          bgb={
            item.pointType == "EA"
              ? "#174082"
              : item.pointType == "DİL"
              ? "#b37019"
              : item.pointType == "SÖZ"
              ? "#96171d"
              : "darkgreen"
          }
          text={
            item.pointType == "EA"
              ? "Eşit Ağırlık"
              : item.pointType == "DİL"
              ? "Dil"
              : item.pointType == "SÖZ"
              ? "Sözel"
              : "Sayısal"
          }
        />
      </Pressable>
    </YStack>
  );
};

const styles = StyleSheet.create({
  departmentItem: {
    marginVertical: 4,
    marginHorizontal: 15,
    borderRadius: 16,
    flex: 1,
    flexDirection: "row",
    height: 76,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default DepartmentItem;
