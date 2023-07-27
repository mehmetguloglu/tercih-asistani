import React, { useState } from "react";
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
import { Stack, XStack, Text, Button, ZStack } from "tamagui";
import { getAllDepartments } from "../../bussiness/actions/departments";
import { LoadingIndicator } from "../../components";
import AdItem from "../../components/advertising-components/AdItem";
import { MaterialIcons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
const Departments = () => {
  const { input } = useAppSelector((state) => state.departmentsReducer);
  const dispatch = useAppDispatch();
  const [changeDepartment, setChangeDepartment] = useState(1);
  const { data, isLoading } = getAllDepartments(changeDepartment == 1);
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
  let filterData = data?.filter((item) =>
    turkishToEnglish(item.name).includes(turkishToEnglish(input))
  );
  if (changeDepartment == 1) {
    filterData = filterData?.filter(
      (item) =>
        (saySelected && item.pointType == "SAY"
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
          : false)
    );
  }
  console.log(filterData);

  return (
    <Stack f={1}>
      <ZStack
        position="absolute"
        width={80}
        height={80}
        bottom={20}
        left={10}
        zIndex={1}
      >
        <Button
          shadowColor="#000"
          shadowOffset={{
            width: 0,
            height: 12,
          }}
          shadowOpacity={0.58}
          shadowRadius={16.0}
          elevation={24}
          br={50}
          bg={changeDepartment === 1 ? "#D1ECFF" : "#FFF5D1"}
          f={1}
          p={0}
          ai="center"
          jc="center"
          fd="column"
          bw={0}
          onPress={() => {
            changeDepartment === 1
              ? setChangeDepartment(2)
              : setChangeDepartment(1);
          }}
        >
          {/* <FontAwesome5 name="exchange-alt" size={13} color="black" /> */}
          <MaterialIcons
            name="published-with-changes"
            size={24}
            color="black"
          />
          <Text textAlign="center" fontSize={13} fontWeight={"600"}>
            {changeDepartment === 1 ? "Lisans" : "Önlisans"}
          </Text>
        </Button>
      </ZStack>
      <ScrollView style={{ flex: 1 }}>
        {/* <FiltersButton onPress={() => setShowModal(true)} /> */}

        <SearchInput input={input} setInput={setInput} mx={15} my={8} />

        {changeDepartment === 1 ? (
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
        ) : null}

        <View style={{ minHeight: 500 }}>
          <FlashList
            ListHeaderComponent={() => <AdItem />}
            // ListFooterComponent={() => <AdItem />}
            contentContainerStyle={{ paddingBottom: height / 33 }}
            numColumns={
              Platform.isPad || width > 700 || Platform.OS == "macos" ? 2 : 1
            }
            nestedScrollEnabled
            estimatedItemSize={76}
            data={filterData}
            keyExtractor={(item: any) => item.name}
            renderItem={({ item, index }) => (
              <DepartmentItem
                item={item}
                index={index}
                changeDepartment={changeDepartment}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              isLoading ? (
                <LoadingIndicator />
              ) : filterData?.length == 0 ? (
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
