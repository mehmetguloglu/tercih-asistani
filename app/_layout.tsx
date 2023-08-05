import { Suspense, useEffect } from "react";
import { useColorScheme, Platform } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PortalHost, TamaguiProvider, Text, Theme, View } from "tamagui";
import { Provider } from "react-redux";
import { store } from "../bussiness/redux-store";
import config from "../tamagui.config";
import { PreferencesButton } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../utils/client";
import StorageKeys from "../utils/storage-keys";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as StoreReview from "expo-store-review";
import CheckVersionModal from "../components/CheckVersionModal";

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    userControl();
    storeReviewOpen();
  }, []);

  const userControl = async () => {
    let user = await AsyncStorage.getItem(StorageKeys.USER_BEARER_TOKEN);
    if (user === null) {
      const result = await client.post("/v1/MobileUser/RegisterUser");
      if (result.data.isSuccessfull) {
        await AsyncStorage.setItem(
          StorageKeys.USER_BEARER_TOKEN,
          result.data.data
        );
      }
    }
    user = await AsyncStorage.getItem(StorageKeys.USER_BEARER_TOKEN);
    if (user) {
      let token;
      if (Device.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          return;
        }
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId: Constants.expoConfig.extra.eas.projectId,
          })
        ).data;
        await client.post(
          "/v1/MobileUser/InsertOrUpdateUserPushNotificationToken",
          {
            token: token,
            deviceType: Platform.OS === "ios" ? 1 : 2,
          }
        );
        //apiye token gönderilecek
      }
    }
  };

  const storeReviewOpen = async () => {
    let openCount = await getOpenCount();
    if (openCount / 10 === 1 || openCount % 100 === 0) {
      let hasAction = await StoreReview.hasAction();
      if (hasAction) {
        StoreReview.requestReview();
      }
    }
  };

  const getOpenCount = async (): Promise<number> => {
    let openCount = await AsyncStorage.getItem(
      StorageKeys.APPLICATION_OPEN_COUNT
    );
    if (!openCount) {
      openCount = "1";
      if (openCount)
        await AsyncStorage.setItem(
          StorageKeys.APPLICATION_OPEN_COUNT,
          openCount
        );
    } else {
      openCount = (parseInt(openCount) + 1).toString();
      if (openCount)
        await AsyncStorage.setItem(
          StorageKeys.APPLICATION_OPEN_COUNT,
          openCount
        );
    }
    return parseInt(openCount);
  };

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <Suspense
          fallback={
            <View f={1} ai="center" jc="center">
              <Text>Loading...</Text>
            </View>
          }
        >
          <Theme name={colorScheme}>
            <ThemeProvider
              value={colorScheme === "light" ? DefaultTheme : DefaultTheme}
            >
              <CheckVersionModal />
              <PortalHost name={"loadingindicatorportal"} />
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="index"
                  options={{
                    headerShown: true,
                    headerTitle: "Tercih Asistanı",
                    headerTitleStyle: { fontSize: 24, fontWeight: "600" },
                    headerTitleAlign: "center",
                    headerRight: () => <PreferencesButton />,
                  }}
                />
                <Stack.Screen
                  name="preferences"
                  options={{
                    presentation: "modal",
                  }}
                />
              </Stack>
            </ThemeProvider>
          </Theme>
        </Suspense>
        <StatusBar />
      </TamaguiProvider>
    </Provider>
  );
}
