import useSWR from "swr";
import client from "../../utils/client";
export function getAllDepartments(isFourYear = true) {
  return useSWR(
    "/v1/MobileDepartment/GetDepartments/1/1000/" + isFourYear,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}
