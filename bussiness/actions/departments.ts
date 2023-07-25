import useSWR from "swr";
import client from "../../utils/client";
export function getAllDepartments() {
  return useSWR("/v1/MobileDepartment/GetDepartments/1/1000", (url) => {
    return client.get(url).then((res) => res.data);
  });
}
