import React from "react";
import { Platform, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";
import UniversityDetailsItem from "./UniversityDetailsItem";
import LoadingIndicator from "../LoadingIndicator";
import { turkishToEnglish } from "../../utils/text-helper";
import { useAppSelector } from "../../bussiness/hooks";
import { Text } from "tamagui";
import { getUniversityDetails } from "../../bussiness/actions/universityDetails";
import AdItem from "../advertising-components/AdItem";
import AdDetailsItem from "../advertising-components/AdDetailsItem";

const { width, height } = Dimensions.get("window");
const UniversityDetailsFlashList = () => {
  const {
    selectedUniversity,
    filterPointType,
    filterPoints,
    filterRanking,
    input,
  }: {
    selectedUniversity: any;
    filterPointType: string[];
    filterPoints: any;
    filterRanking: any;
    input: any;
  } = useAppSelector((state) => state.universityDetailsReducer);

  const { data, isLoading } = getUniversityDetails(selectedUniversity.id);
  let filterData = data;

  if (input != "") {
    filterData = filterData.filter((item) =>
      turkishToEnglish(item.department.name).includes(turkishToEnglish(input))
    );
  }
  if (
    filterPointType[0] == "say" ||
    filterPointType[1] == "ea" ||
    filterPointType[2] == "soz" ||
    filterPointType[3] == "dil"
  ) {
    filterData = filterData.filter(
      (item) =>
        (filterPointType.find((x) => x == "say") && item.pointType == "SAY") ||
        (filterPointType.find((x) => x == "ea") && item.pointType == "EA") ||
        (filterPointType.find((x) => x == "soz") && item.pointType == "SÖZ") ||
        (filterPointType.find((x) => x == "dil") && item.pointType == "DİL")
    );
  }
  if (filterPoints[0] != 0 || filterPoints[1] != 500) {
    filterData = filterData.filter(
      (item) =>
        (filterPoints[0] <= item.basePoint &&
          filterPoints[1] >= item.basePoint) ||
        !item.basePoint
    );
  }
  if (filterRanking[0] != 0 || filterRanking[1] != 10000000) {
    filterData = filterData.filter((item) =>
      item.yksSuccessRanking
        ? filterRanking[0] <= item.yksSuccessRanking &&
          filterRanking[1] >= item.yksSuccessRanking
        : true
    );
  }
  return (
    <FlashList
      ListHeaderComponent={() => <AdDetailsItem />}
      ListEmptyComponent={() => {
        return isLoading ? (
          <LoadingIndicator />
        ) : filterData.length === 0 ? (
          <Text m={15}>Sonuç bulunamadı</Text>
        ) : null;
      }}
      contentContainerStyle={{
        paddingBottom: height / 33,
      }}
      nestedScrollEnabled={false}
      estimatedItemSize={120}
      numColumns={
        Platform.isPad || Platform.OS == "macos" || width > 700 ? 2 : 1
      }
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      data={filterData}
      renderItem={({ item, index }) => {
        return <UniversityDetailsItem item={item} index={index} />;
      }}
    />
  );
};

export default UniversityDetailsFlashList;
