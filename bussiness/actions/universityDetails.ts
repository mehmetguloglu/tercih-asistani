import useSWR from "swr";
import client from "../../utils/client";
export function getUniversityDetails(universityId) {
  return useSWR(
    "/v1/MobileUniversityPreference/GetUniversityPreference/" + universityId,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}
