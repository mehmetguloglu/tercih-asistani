import { ScrollView, Pressable, StyleSheet } from "react-native";
import { Stack, XStack, Text } from "tamagui";
import React, { useState } from "react";
import _ from "lodash";

import { useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../bussiness/hooks";
import {
  setInput,
  setSelectedCity,
} from "../../bussiness/reducers/universitiesReducer";
import { SearchInput } from "../../components/inputs";
import { UniversitiesFlashList } from "../../components/universities-components";
import AdItem from "../../components/advertising-components/AdItem";

const Universites = () => {
  const [governmentSelected, setGovernmentSelected] = useState(false);
  const [foundationSelected, setFoundationSelected] = useState(false);
  const [abroadSelected, setAbroadSelected] = useState(false);
  const { input } = useAppSelector((state) => state.universitiesReducer);
  const dispatch = useAppDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(setSelectedCity([]));
    }, [])
  );
  return (
    <Stack f={1}>
      <ScrollView style={styles.container}>
        {/* <UniversitiesFilters /> */}

        <SearchInput input={input} setInput={setInput} mx={15} my={8} />
        {/* UNIVERSITY TYPE FILTERS */}
        <XStack mb={4} mx={15}>
          <Pressable
            style={[
              styles.universityTypeButton,
              { backgroundColor: governmentSelected ? "#3268bf" : "white" },
            ]}
            onPress={() => setGovernmentSelected(!governmentSelected)}
          >
            <Text color={governmentSelected ? "white" : "black"}>Devlet</Text>
          </Pressable>
          <Pressable
            style={[
              styles.universityTypeButton,
              { backgroundColor: foundationSelected ? "#eda547" : "white" },
            ]}
            onPress={() => setFoundationSelected(!foundationSelected)}
          >
            <Text color={foundationSelected ? "white" : "black"}>Vakıf</Text>
          </Pressable>
          <Pressable
            style={[
              styles.universityTypeButton,
              { backgroundColor: abroadSelected ? "#cc434a" : "white" },
            ]}
            onPress={() => setAbroadSelected(!abroadSelected)}
          >
            <Text color={abroadSelected ? "white" : "black"}>Yurtdışı</Text>
          </Pressable>
        </XStack>
        <AdItem />
        <UniversitiesFlashList
          governmentSelected={governmentSelected}
          foundationSelected={foundationSelected}
          abroadSelected={abroadSelected}
        />
      </ScrollView>
    </Stack>
  );
};

export default Universites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
