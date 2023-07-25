import useSWR from "swr";
import client from "../../utils/client";
export function getDepartmentDetails(departmentId) {
  return useSWR(
    "/v1/MobileUniversityPreference/GetDepartmentPreference/" + departmentId,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}
