import React, { useState } from "react";
import { Stack, Text, Image, XStack } from "tamagui";
import { useRouter } from "expo-router";
import { StyleSheet, Pressable, ScrollView, Dimensions } from "react-native";
// import * as WebBrowser from "expo-web-browser";
import { Feather } from "@expo/vector-icons";
import { useAppDispatch, useAppSelector } from "../../../bussiness/hooks";
import UniversityLogo from "../../../components/UniversityLogo";
import { SearchInput } from "../../../components/inputs";
import {
  setFilterPointType,
  setInput,
} from "../../../bussiness/reducers/universityDetailsReducer";
import { UniversityDetailsFlashList } from "../../../components/university-details-components";

const Detail = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    selectedUniversity,
    input,
    filterPointType,
  }: { selectedUniversity: any; input: any; filterPointType: any } =
    useAppSelector((state) => state.universityDetailsReducer);
  const [background, setBackground] = useState("white");

  return (
    <Stack f={1}>
      <ScrollView nestedScrollEnabled={true} style={styles.container}>
        <Stack jc="center" ai="center" px={15} pt={12}>
          <Stack
            width={64}
            height={64}
            bg={"white"}
            jc="center"
            ai="center"
            borderRadius={8}
          >
            <UniversityLogo
              item={selectedUniversity}
              settings={{
                resizeMode: "stretch",
                width: 50,
                height: 50,
              }}
            />
          </Stack>
          <Text my={8} fontWeight={"600"} fontSize={16} ta="center">
            {selectedUniversity.name}
          </Text>
          {/* CONTACT UNİVERSİTY BUTTON 
          <Pressable
            style={styles.contactButton}
            onPress={() =>
              WebBrowser.openBrowserAsync("https://reactnative.dev/docs/modal")
            }
          >
            <Text style={styles.contactButtonText}>İletişim Bilgileri</Text>
          </Pressable> */}

          <XStack mt={8} ai="center">
            <SearchInput mx={0} my={0} input={input} setInput={setInput} />
            <Pressable
              style={[styles.filterButton, { backgroundColor: background }]}
              onPress={() => router.push("/universities/filters")}
              onPressIn={() => setBackground("#f7f7f7")}
              onPressOut={() => setBackground("white")}
            >
              <Feather name="filter" size={24} color="#777777" />
            </Pressable>
          </XStack>
          <XStack mt={8} mb={4}>
            <Pressable
              style={[
                styles.departmentTypeButton,
                {
                  backgroundColor:
                    filterPointType[0] == "say" ? "green" : "white",
                },
              ]}
              onPress={() =>
                dispatch(
                  setFilterPointType([
                    filterPointType[0] == "say" ? "" : "say",
                    filterPointType[1],
                    filterPointType[2],
                    filterPointType[3],
                  ])
                )
              }
            >
              <Text color={filterPointType[0] == "say" ? "white" : "black"}>
                Sayısal
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.departmentTypeButton,
                {
                  backgroundColor:
                    filterPointType[1] == "ea" ? "#3268bf" : "white",
                  marginLeft: 8,
                  marginRight: 4,
                },
              ]}
              onPress={() =>
                dispatch(
                  setFilterPointType([
                    filterPointType[0],
                    filterPointType[1] == "ea" ? "" : "ea",
                    filterPointType[2],
                    filterPointType[3],
                  ])
                )
              }
            >
              <Text color={filterPointType[1] == "ea" ? "white" : "black"}>
                Eşit Ağırlık
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.departmentTypeButton,
                {
                  backgroundColor:
                    filterPointType[2] == "soz" ? "#cc434a" : "white",
                  marginRight: 8,
                  marginLeft: 4,
                },
              ]}
              onPress={() =>
                dispatch(
                  setFilterPointType([
                    filterPointType[0],
                    filterPointType[1],
                    filterPointType[2] == "soz" ? "" : "soz",
                    filterPointType[3],
                  ])
                )
              }
            >
              <Text color={filterPointType[2] == "soz" ? "white" : "black"}>
                Sözel
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.departmentTypeButton,

                {
                  backgroundColor:
                    filterPointType[3] == "dil" ? "#eda547" : "white",
                },
              ]}
              onPress={() =>
                dispatch(
                  setFilterPointType([
                    filterPointType[0],
                    filterPointType[1],
                    filterPointType[2],
                    filterPointType[3] == "dil" ? "" : "dil",
                  ])
                )
              }
            >
              <Text color={filterPointType[3] == "dil" ? "white" : "black"}>
                Dil
              </Text>
            </Pressable>
          </XStack>
        </Stack>

        <UniversityDetailsFlashList />
      </ScrollView>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },

  // contactButton: {
  //   backgroundColor: "#07094E",
  //   paddingHorizontal: 16,
  //   paddingVertical: 8,
  //   borderRadius: 8,
  // },
  // contactButtonText: {
  //   fontWeight: "500",
  //   color: "white",
  // },

  filterButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginLeft: 8,
    borderRadius: 8,
  },

  departmentTypeButton: {
    justifyContent: "center",
    paddingVertical: 8,
    flex: 1,
    alignItems: "center",
    borderRadius: 24,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default Detail;
