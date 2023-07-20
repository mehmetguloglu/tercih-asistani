import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Platform,
  Dimensions,
} from "react-native";
import DepartmentItem from "../../components/departments-components/DepartmentItem";
import { SearchInput } from "../../components/inputs";
// import FiltersButton from "../../components/buttons/FiltersButton";
import { FlashList } from "@shopify/flash-list";
import { setInput } from "../../bussiness/reducers/departmentsReducer";
import { turkishToEnglish } from "../../utils/text-helper";
import {
  setSelectedCity,
  setFilterPoint,
  setFilterRanking,
} from "../../bussiness/reducers/departmentDetailsReducer";
import { useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../bussiness/hooks";
import { Stack, XStack } from "tamagui";
import { getAllDepartments } from "../../bussiness/actions/departments";
import { LoadingIndicator } from "../../components";
import { Text } from "tamagui";
const { height, width } = Dimensions.get("window");
const Departments = () => {
  const { input } = useAppSelector((state) => state.departmentsReducer);
  const dispatch = useAppDispatch();
  const { data, isLoading } = getAllDepartments();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setFilterRanking([0, 10000000]));
      dispatch(setFilterPoint([0, 500]));
      dispatch(setSelectedCity([]));
      return () => {};
    }, [])
  );

  const [saySelected, setSaySelected] = useState(false);
  const [eaSelected, setEaSelected] = useState(false);
  const [sozSelected, setSozSelected] = useState(false);
  const [dilSelected, setDilSelected] = useState(false);

  const filterData = data?.filter(
    (item) =>
      turkishToEnglish(item.name).includes(turkishToEnglish(input)) &&
      ((saySelected && item.pointType == "SAY"
        ? true
        : eaSelected && item.pointType == "EA"
        ? true
        : sozSelected && item.pointType == "SÖZ"
        ? true
        : dilSelected && item.pointType == "DİL"
        ? true
        : false) ||
        (!saySelected && !eaSelected && !sozSelected && !dilSelected
          ? true
          : false))
  );
  return (
    <Stack f={1}>
      <ScrollView style={{ flex: 1 }}>
        {/* <FiltersButton onPress={() => setShowModal(true)} /> */}

        <SearchInput input={input} setInput={setInput} mx={15} my={8} />

        <XStack mb={4} mx={15}>
          <Pressable
            style={[
              styles.departmentTypeButton,
              { backgroundColor: saySelected ? "green" : "white" },
            ]}
            onPress={() => setSaySelected(!saySelected)}
          >
            <Text color={saySelected ? "white" : "black"}>Sayısal</Text>
          </Pressable>
          <Pressable
            style={[
              styles.departmentTypeButton,
              {
                backgroundColor: eaSelected ? "#3268bf" : "white",
                marginLeft: 8,
                marginRight: 4,
              },
            ]}
            onPress={() => setEaSelected(!eaSelected)}
          >
            <Text color={eaSelected ? "white" : "black"}>Eşit Ağırlık</Text>
          </Pressable>
          <Pressable
            style={[
              styles.departmentTypeButton,
              {
                backgroundColor: sozSelected ? "#cc434a" : "white",
                marginRight: 8,
                marginLeft: 4,
              },
            ]}
            onPress={() => setSozSelected(!sozSelected)}
          >
            <Text color={sozSelected ? "white" : "black"}>Sözel</Text>
          </Pressable>

          <Pressable
            style={[
              styles.departmentTypeButton,
              { backgroundColor: dilSelected ? "#eda547" : "white" },
            ]}
            onPress={() => setDilSelected(!dilSelected)}
          >
            <Text color={dilSelected ? "white" : "black"}>Dil</Text>
          </Pressable>
        </XStack>

        <View style={{ minHeight: 500 }}>
          <FlashList
            contentContainerStyle={{ paddingBottom: height / 33 }}
            numColumns={
              Platform.isPad || width > 700 || Platform.OS == "macos" ? 2 : 1
            }
            nestedScrollEnabled
            estimatedItemSize={76}
            data={filterData}
            keyExtractor={(item: any) => item.name}
            renderItem={({ item }) => <DepartmentItem item={item} />}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              isLoading ? (
                <LoadingIndicator />
              ) : filterData.length == 0 ? (
                <Text m={15}>Sonuç bulunamadı.</Text>
              ) : null
            }
          />
        </View>
      </ScrollView>
    </Stack>
  );
};
export default Departments;

const styles = StyleSheet.create({
  departmentTypeButton: {
    paddingVertical: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,

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
