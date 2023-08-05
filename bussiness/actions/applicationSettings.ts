import useSWR from "swr";
import client from "../../utils/client";
export function getMobileVersionSetting() {
  return useSWR(
    `v1/MobileApplicationSetting/GetMobileVersionSetting`,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}
