import { View, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Text, XStack, YStack } from "tamagui";
import DetailsItemText from "../DetailsItemText";
import Line from "../Line";
import Ribbon from "../Ribbon";
const PreferencesItem = () => {
  const [selected, setSelected] = useState(true);
  const item = {
    basePoint: 237.77308,
    departmentId: "64628a81bf5c2e21d455f695",
    doctorNumber: 4,
    educationTime: 4,
    employment: false,
    faculty: {
      id: "64628a78bf5c2e21d455f2ca",
      name: "İktisadi ve İdari Bilimler Fakültesi",
    },
    facultyId: "64628a78bf5c2e21d455f2ca",
    firstGradeQuota: 2,
    generalQuota: 80,
    id: "6462a4c1707c18a64b48c51d",
    kpss1: 67.569722,
    kpss2: 63.69667,
    pointType: "EA",
    professorNumber: 6,
    programCode: 104810398,
    specialCondition: "4",
    oldDepartmentName: "Aile ve Tüketici Bilimleri",
    university: {
      id: "64629381311a756d0c43aff6",
      name: "Hacettepe Üniversitesi",
      type: 2,
      typeNumber: 2,
    },
    universityId: "64629381311a756d0c43aff6",
    yksSuccessRanking: 471376,
  };
  const basePoint = item.basePoint?.toFixed(2).toString().replace(".", ",");
  const departmentName = "Aile ve Tüketici Bilimleri";
  return (
    <XStack
      bg={"white"}
      mx={15}
      my={8}
      borderRadius={8}
      borderWidth={1}
      f={1}
      borderColor={!selected ? "#0066FF" : "white"}
    >
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          setSelected(!selected);
        }}
      >
        <XStack px={15} py={12} ai="center">
          {selected ? (
            <Ionicons name="add" size={20} color="#0066FF" />
          ) : (
            <AntDesign name="minus" size={20} color="#0066FF" />
          )}
          <YStack ml={9}>
            <Text fontSize={14} fontWeight={"500"}>
              {item.university.name}
            </Text>
            <Text fontSize={12} color={"#9594A4"} fontWeight={"500"}>
              {item.oldDepartmentName ? item.oldDepartmentName : departmentName}
            </Text>
          </YStack>
        </XStack>
        <Line ml={15} mr={3} />

        <XStack ai="center" my={12} px={15}>
          <DetailsItemText info={basePoint} detailsName={"Taban Puan"} />
          <DetailsItemText
            info={item.yksSuccessRanking}
            detailsName={"Başarı Sıralaması"}
          />
        </XStack>

        {!selected ? (
          <>
            <XStack ai="center" my={12} px={15}>
              <DetailsItemText
                info={
                  item.pointType == "SAY"
                    ? "Sayısal"
                    : item.pointType == "EA"
                    ? "Eşit Ağırlık"
                    : item.pointType == "SÖZ"
                    ? "Sözel"
                    : "Dil"
                }
                detailsName={"Puan Türü"}
              />
              <DetailsItemText
                info={item.educationTime}
                detailsName={"Öğrenim Süresi"}
              />
            </XStack>

            <XStack ai="center" my={12} px={15}>
              <DetailsItemText
                info={item.generalQuota}
                detailsName={"Kontenjan"}
              />
              <DetailsItemText
                info={item.faculty.name}
                detailsName={"Fakülte Adı"}
              />
            </XStack>
          </>
        ) : null}
      </Pressable>
      <Ribbon
        bg={
          item.university.type == 2
            ? "#3268bf"
            : item.university.type == 1
            ? "#eda547"
            : "#cc434a"
        }
        bgb={
          item.university.type == 2
            ? "#174082"
            : item.university.type == 1
            ? "#b37019"
            : "#96171d"
        }
        text={
          item.university.type == 2
            ? "Devlet"
            : item.university.type == 1
            ? "Vakıf"
            : "Yurtdışı"
        }
      />
    </XStack>
  );
};

export default PreferencesItem;
