import React, { useState } from "react";
import { StyleSheet, Pressable, Dimensions, Platform } from "react-native";
import { Link, useRouter } from "expo-router";
import { setSelectedDepartment } from "../../bussiness/reducers/departmentDetailsReducer";
import { Button, Stack, Text, View, YStack } from "tamagui";
import Ribbon from "../Ribbon";
import { useAppDispatch } from "../../bussiness/hooks";
// import AdItem from "../advertising-components/AdItem";
// import { getAdvLocationCount } from "../../utils/device-helper";
// const { width } = Dimensions.get("window");
const DepartmentItem = ({ item, index, changeDepartment }) => {
  const route = useRouter();
  const dispatch = useAppDispatch();
  const [background, setBackground] = useState("white");

  // const advLocation = getAdvLocationCount();

  /* {index % advLocation === 0 && !Platform.isPad && width < 700 ? (
        <AdItem />
      ) : (Platform.isPad || width > 700) &&
        (index % (advLocation * 2) == 0 || index % (advLocation * 2) == 1) ? (
        <AdItem />
      ) : null} */
  return (
    <Link
      href={{
        pathname: "/departments/details/" + item.name,
        params: {
          changeDepartment: changeDepartment,
          selectedDepartmentNameEncode: encodeURIComponent(item.name),
          selectedDepartmentId: item.id,
        },
      }}
      asChild
    >
      <Pressable style={{ flex: 1 }}>
        <YStack f={1}>
          <View
            {...{
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
              backgroundColor: background,
            }}
            // onPressIn={() => setBackground("#f7f7f7")}
            // onPressOut={() => setBackground("white")}
          >
            <Stack f={1} jc={"center"} mx={16}>
              <Text fontSize={16} fontWeight={"600"}>
                {item.name}
              </Text>
            </Stack>
            <Ribbon
              bg={
                changeDepartment == 2
                  ? null
                  : item.fourYearPointType
                  ? item.fourYearPointType == "EA"
                    ? "#3268bf"
                    : item.fourYearPointType == "DİL"
                    ? "#eda547"
                    : item.fourYearPointType == "SÖZ"
                    ? "#cc434a"
                    : item.fourYearPointType == "SAY"
                    ? "green"
                    : null
                  : item.pointType == "EA"
                  ? "#3268bf"
                  : item.pointType == "DİL"
                  ? "#eda547"
                  : item.pointType == "SÖZ"
                  ? "#cc434a"
                  : item.pointType == "SAY"
                  ? "green"
                  : null
              }
              bgb={
                changeDepartment == 2
                  ? null
                  : item.fourYearPointType
                  ? item.fourYearPointType == "EA"
                    ? "#174082"
                    : item.fourYearPointType == "DİL"
                    ? "#b37019"
                    : item.fourYearPointType == "SÖZ"
                    ? "#96171d"
                    : item.fourYearPointType == "SAY"
                    ? "darkgreen"
                    : null
                  : item.pointType == "EA"
                  ? "#174082"
                  : item.pointType == "DİL"
                  ? "#b37019"
                  : item.pointType == "SÖZ"
                  ? "#96171d"
                  : item.pointType == "SAY"
                  ? "darkgreen"
                  : null
              }
              text={
                changeDepartment == 2
                  ? "TYT"
                  : item.fourYearPointType
                  ? item.fourYearPointType == "EA"
                    ? "Eşit Ağırlık"
                    : item.fourYearPointType == "DİL"
                    ? "Dil"
                    : item.fourYearPointType == "SÖZ"
                    ? "Sözel"
                    : item.fourYearPointType == "SAY"
                    ? "Sayısal"
                    : "TYT"
                  : item.pointType == "EA"
                  ? "Eşit Ağırlık"
                  : item.pointType == "DİL"
                  ? "Dil"
                  : item.pointType == "SÖZ"
                  ? "Sözel"
                  : item.pointType == "SAY"
                  ? "Sayısal"
                  : "TYT"
              }
            />
          </View>
        </YStack>
      </Pressable>
    </Link>
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
