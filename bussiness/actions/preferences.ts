import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import client from "../../utils/client";

export function getPreferenceList() {
  return useSWR("/v1/MobilePreferenceList/GetPreferenceList", (url) => {
    return client.get(url).then((res) => res.data);
  });
}

export function addPreferenceList() {
  return useSWRMutation(
    "/v1/MobilePreferenceList/AddPreferenceList",
    (url, { arg }) => {
      return client.post(url, arg).then((res) => res.data);
    }
  );
}

export function addPreferenceItem() {
  return useSWRMutation(
    "/v1/MobilePreferenceListItem/AddPreferenceItem",
    (url, { arg }) => {
      return client.post(url, arg).then((res) => res.data);
    }
  );
}

export function getPreferenceListItems(preferenceListId) {
  return useSWR(
    "/v1/MobilePreferenceListItem/GetPreferenceListItems/" + preferenceListId,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}

export function deletePreferenceList() {
  return useSWRMutation(
    "/v1/MobilePreferenceList/DeletePreferenceList/",
    (url, { arg }) => {
      return client.get(url + arg).then((res) => res.data);
    }
  );
}

export function deletePreferenceItem() {
  return useSWRMutation(
    "/v1/MobilePreferenceListItem/DeletePreferenceItem/",
    (url, { arg }) => {
      return client.get(url + arg).then((res) => res.data);
    }
  );
}
