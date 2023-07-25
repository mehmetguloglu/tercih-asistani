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
