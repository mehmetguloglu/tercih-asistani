import useSWR from "swr";
import client from "../../utils/client";
export function getAllUniversities() {
  return useSWR("/v1/MobileUniversity/GetAllUniversities", (url) => {
    return client.get(url).then((res) => res.data);
  });
}
