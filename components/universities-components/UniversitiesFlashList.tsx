import React, { useRef, useState } from "react";
import { Dimensions, Platform, View } from "react-native";
import UniversityItem from "./UniversityItem";
import _ from "lodash";
import { FlashList } from "@shopify/flash-list";
import LoadingIndicator from "../LoadingIndicator";
import { useFocusEffect } from "@react-navigation/native";
import {
  setUniversityDetailsFilterModalVisible,
  setFilterPointType,
  setFilterPoints,
  setFilterRanking,
} from "../../bussiness/reducers/universityDetailsReducer";
import { useAppDispatch, useAppSelector } from "../../bussiness/hooks";
import { getAllUniversities } from "../../bussiness/actions/universities";
import { Text } from "tamagui";
import AdItem from "../advertising-components/AdItem";
import LoadMoreButton from "../buttons/LoadMoreButton";
import LoadMoreDetailsButton from "../buttons/LoadMoreDetailsButton";
const { height, width } = Dimensions.get("window");

const UniversitiesFlashList = ({
  governmentSelected,
  foundationSelected,
  abroadSelected,
}) => {
  const flatref = useRef(null);
  const { input } = useAppSelector((state) => state.universitiesReducer);
  const { data, isLoading } = getAllUniversities();
  const [showUniversity, setShowUniversity] = useState(50);

  const dispatch = useAppDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(setUniversityDetailsFilterModalVisible(false));
      dispatch(setFilterPointType([false, false, false, false]));
      dispatch(setFilterPoints([0, 500]));
      dispatch(setFilterRanking([0, 10000000]));

      return () => {};
    }, [])
  );

  const filterData = data?.filter(
    ({ name, city, type }) =>
      (input == "" ? true : name.toLowerCase().includes(input.toLowerCase())) &&
      // (selectedCity == [] ? true : city == selectedCity) &&
      ((governmentSelected && type == 2 ? true : false) ||
        (foundationSelected && type == 1 ? true : false) ||
        (abroadSelected && type == 3 ? true : false) ||
        (!governmentSelected && !foundationSelected && !abroadSelected
          ? true
          : false))
  );
  let filterCity = _.map(data, "city");
  filterCity = _.uniqBy(filterCity);
  return (
    <>
      <FlashList
        nestedScrollEnabled
        estimatedItemSize={76}
        showsVerticalScrollIndicator={false}
        ref={flatref}
        keyExtractor={(item: any) => item.name}
        data={filterData?.slice(0, showUniversity)}
        renderItem={({ item, index }) => (
          <UniversityItem item={item} index={index} />
        )}
        numColumns={
          Platform.isPad || width > 700 || Platform.OS == "macos" ? 2 : 1
        }
        ListEmptyComponent={
          isLoading ? (
            <LoadingIndicator />
          ) : filterData.length == 0 ? (
            <Text m={15}>Sonuç bulunamadı.</Text>
          ) : null
        }
      />
      <View style={{ paddingBottom: height / 33 }}>
        {!isLoading && filterData?.length > showUniversity ? (
          <LoadMoreDetailsButton
            onPress={() => setShowUniversity(showUniversity + 100)}
          />
        ) : null}
      </View>
    </>
  );
};

export default UniversitiesFlashList;
