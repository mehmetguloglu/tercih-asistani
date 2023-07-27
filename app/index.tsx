import React from "react";
import { Stack, YStack } from "tamagui";
import { useRouter } from "expo-router";
import HomeButtons from "../components/home-components/HomeButtons";

const App = () => {
  const route = useRouter();
  return (
    <Stack f={1} bg={"white"}>
      <YStack f={1} my={20} px={15}>
        <HomeButtons
          header={"Üniversiteler"}
          text={
            "Üniversiteler üzerinden araştırma yapmanızı sağlar. Devlet Üniversiteleri, Vakıf Üniversiteleri ve Yurtdışında Yerleşik Üniversitelerin hangileri olduğu ve Üniversitelerde hangi bölümlerin bulunduğunu, bölümlerin kontenjan bilgisi, puan türü, taban puanlarını ve başarı sıralamalarını üniversite bazlı inceleme yapmanızı sağlar."
          }
          source={require("../assets/universities.png")}
          onPress={() => {
            route.push("/universities");
          }}
        />

        <HomeButtons
          header={"Bölümler"}
          text={
            "Bölümler üzerinden araştırma yapmanızı sağlar. Sayısal, Eşit Ağırlık, Sözel ve Dil Puan türlerine göre yerleştirme yapan bölümlerin hangileri olduğunu ve seçilen bölümlerin hangi Üniversitelerde bulunduğunu ve bölümlerin kontenjan bilgisi, puan türü, taban puanlarını ve başarı sıralamalarını bölüm bazlı inceleme yapmanızı sağlar."
          }
          source={require("../assets/departments.png")}
          onPress={() => {
            route.push("/departments");
          }}
        />
      </YStack>
    </Stack>
  );
};

export default App;
