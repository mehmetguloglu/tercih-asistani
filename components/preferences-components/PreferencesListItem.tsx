import React from "react";
import { AlertDialog, Button, Spinner, Text, XStack, YStack } from "tamagui";
import {
  deletePreferenceList,
  getPreferenceList,
} from "../../bussiness/actions/preferences";
import { Link } from "expo-router";
import * as Burnt from "burnt";
import { MaterialIcons } from "@expo/vector-icons";
import LoadingIndicator from "../LoadingIndicator";

const PreferencesListItem = ({ item }) => {
  const { data, isLoading, mutate, error } = getPreferenceList();
  const { trigger: deleteTrigger, isMutating } = deletePreferenceList();

  const _handleDeletePreferenceList = async () => {
    const result = await deleteTrigger(item.id);
    if (result.isSuccessfull) {
      Burnt.toast({
        title: "Silindi",
        preset: "done",
        duration: 2,
        haptic: "success",
      });
      mutate();
    } else {
      Burnt.toast({
        title: "Silme başarısız oldu",
        preset: "error",
        duration: 2,
        haptic: "error",
      });
    }
  };
  return (
    <Link
      disabled={isMutating}
      href={{
        pathname: "/preferences/preferenceList/",
        params: { id: item.id, name: item.name },
      }}
      asChild
    >
      <Button
        size={"$5"}
        bw={1}
        mx={15}
        my={4}
        p={0}
        bg={"white"}
        shadowColor="#000"
        shadowOffset={{
          width: 0,
          height: 2,
        }}
        shadowOpacity={0.27}
        shadowRadius={4.65}
        elevation={6}
      >
        <Text mx={15} f={1} color={"black"} fontSize={16} fontWeight={"500"}>
          {item.name}
        </Text>
        <AlertDialog native>
          <AlertDialog.Trigger asChild>
            <Button
              borderWidth={0}
              bg={"white"}
              size={"$3"}
              disabled={isMutating}
            >
              {isMutating ? (
                <Spinner />
              ) : (
                <MaterialIcons name="delete" size={24} color="darkred" />
              )}
            </Button>
          </AlertDialog.Trigger>

          <AlertDialog.Portal>
            <AlertDialog.Overlay
              key="overlay"
              animation="quick"
              opacity={0.5}
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
            <AlertDialog.Content
              bordered
              elevate
              key="content"
              animation={[
                "quick",
                {
                  opacity: {
                    overshootClamping: true,
                  },
                },
              ]}
              enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
              exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
              x={0}
              scale={1}
              opacity={1}
              y={0}
            >
              <YStack space>
                <AlertDialog.Description>
                  Tercih listesini silmek istediğinize emin misiniz?
                </AlertDialog.Description>

                <XStack space="$3" justifyContent="flex-end">
                  <AlertDialog.Cancel asChild>
                    <Button>İptal</Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action
                    onPress={() => _handleDeletePreferenceList()}
                    asChild
                  >
                    <Button>Sil</Button>
                  </AlertDialog.Action>
                </XStack>
              </YStack>
            </AlertDialog.Content>
          </AlertDialog.Portal>
        </AlertDialog>
      </Button>
    </Link>
  );
};

export default PreferencesListItem;
