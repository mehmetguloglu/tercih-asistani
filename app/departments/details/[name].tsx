import { useAppSelector } from "../../../bussiness/hooks";
import { Button, ScrollView, Text, XStack } from "tamagui";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Pressable, Dimensions, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SearchInput } from "../../../components/inputs";
import { FlashList } from "@shopify/flash-list";
import { DepartmentDetailsItem } from "../../../components/department-details-components";
import { setInput } from "../../../bussiness/reducers/departmentDetailsReducer";
import { turkishToEnglish } from "../../../utils/text-helper";
import { getDepartmentDetails } from "../../../bussiness/actions/departmentDetails";
import { LoadingIndicator } from "../../../components";

const { width, height } = Dimensions.get("window");

const Detail = () => {
  const [selectedUniversityType, setSelectedUniversityType] = useState([
    false,
    false,
    false,
  ]);

  const {
    input,
    filterPoint,
    filterRanking,
    selectedDepartment,
  }: {
    input: any;
    filterPoint: any;
    filterRanking: any;
    selectedDepartment: any;
  } = useAppSelector((state) => state.departmentDetailsReducer);
  const router = useRouter();
  const departmentId = selectedDepartment.id;
  const { data, isLoading } = getDepartmentDetails(departmentId);

  let filterData = data;

  if (input != "") {
    filterData = filterData.filter((item) =>
      turkishToEnglish(item.university.name).includes(turkishToEnglish(input))
    );
  }
  if (
    selectedUniversityType[0] ||
    selectedUniversityType[1] ||
    selectedUniversityType[2]
  ) {
    filterData = filterData.filter((item) => {
      return (
        (selectedUniversityType[0] && item.university.type == 2) ||
        (selectedUniversityType[1] && item.university.type == 1) ||
        (selectedUniversityType[2] && item.university.type == 3)
      );
    });
  }
  if (filterPoint[0] != 0 || filterPoint[1] != 500) {
    filterData = filterData.filter((item) => {
      return item.basePoint
        ? filterPoint[0] <= item.basePoint && filterPoint[1] >= item.basePoint
        : true;
    });
  }
  if (filterRanking[0] != 0 || filterRanking[1] != 10000000) {
    filterData = filterData.filter((item) => {
      return item.yksSuccessRanking
        ? filterRanking[0] <= item.yksSuccessRanking &&
            filterRanking[1] >= item.yksSuccessRanking
        : true;
    });
  }
  return (
    <ScrollView f={1} nestedScrollEnabled={true}>
      {/* SEARCH INPUT AND FILTER BUTTON */}
      <XStack px={16} pt={16} pb={8}>
        <SearchInput input={input} setInput={setInput} my={0} mx={0} />
        <Button
          ai="center"
          jc="center"
          p={8}
          size={40}
          bg={"white"}
          ml={8}
          onPress={() => router.push("/departments/filters")}
        >
          <Feather name="filter" size={24} color="#777777" />
        </Button>
      </XStack>
      {/* UNIVERSITY TYPE FILTERS */}
      <XStack mb={4} mx={15}>
        <Pressable
          style={[
            styles.universityTypeButton,
            {
              backgroundColor: selectedUniversityType[0] ? "#3268bf" : "white",
            },
          ]}
          onPress={() =>
            setSelectedUniversityType([
              !selectedUniversityType[0],
              selectedUniversityType[1],

              selectedUniversityType[2],
            ])
          }
        >
          <Text color={selectedUniversityType[0] ? "white" : "black"}>
            Devlet
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.universityTypeButton,
            {
              backgroundColor: selectedUniversityType[1] ? "#eda547" : "white",
            },
          ]}
          onPress={() =>
            setSelectedUniversityType([
              selectedUniversityType[0],
              !selectedUniversityType[1],

              selectedUniversityType[2],
            ])
          }
        >
          <Text color={selectedUniversityType[1] ? "white" : "black"}>
            Vakıf
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.universityTypeButton,
            {
              backgroundColor: selectedUniversityType[2] ? "#cc434a" : "white",
            },
          ]}
          onPress={() =>
            setSelectedUniversityType([
              selectedUniversityType[0],
              selectedUniversityType[1],
              !selectedUniversityType[2],
            ])
          }
        >
          <Text color={selectedUniversityType[2] ? "white" : "black"}>
            Yurtdışı
          </Text>
        </Pressable>
      </XStack>
      <FlashList
        ListEmptyComponent={() => {
          return isLoading ? (
            <LoadingIndicator />
          ) : filterData.length === 0 ? (
            <Text m={15}>Sonuç bulunamadı.</Text>
          ) : null;
        }}
        nestedScrollEnabled={false}
        contentContainerStyle={{ paddingBottom: height / 33 }}
        estimatedItemSize={113}
        data={filterData}
        keyExtractor={(item: any) => item.id}
        numColumns={
          Platform.isPad || Platform.OS == "macos" || width > 700 ? 2 : 1
        }
        renderItem={({ item, index }) => (
          <DepartmentDetailsItem
            item={item}
            index={index}
            departmentName={selectedDepartment.name}
          />
        )}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  universityTypeButton: {
    paddingVertical: 8,
    flex: 1,
    alignItems: "center",
    borderRadius: 24,
    marginHorizontal: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
export default Detail;
