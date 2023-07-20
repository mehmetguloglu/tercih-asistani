import { Suspense } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, Text, Theme, View } from "tamagui";
import { Provider } from "react-redux";
import { store } from "../bussiness/redux-store";
import config from "../tamagui.config";
import { PreferencesButton } from "../components";

export default function Layout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

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
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="index"
                  options={{
                    headerShown: true,
                    headerTitle: "Tercih Asistanı",
                    headerTitleStyle: { fontSize: 24, fontWeight: "600" },
                    headerTitleAlign: "center",
                    // headerRight: () => <PreferencesButton />,
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
