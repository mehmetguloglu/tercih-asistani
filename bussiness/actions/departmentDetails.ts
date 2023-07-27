import useSWR from "swr";
import client from "../../utils/client";
export function getDepartmentDetails(departmentId, isFourYear = true) {
  return useSWR(
    `/v1/MobileUniversityPreference/GetDepartmentPreference/${departmentId}/${isFourYear}`,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}
