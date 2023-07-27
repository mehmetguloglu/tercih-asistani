import useSWR from "swr";
import client from "../../utils/client";
export function getUniversityDetails(universityId, isFourYear = true) {
  return useSWR(
    `/v1/MobileUniversityPreference/GetUniversityPreference/${universityId}/${isFourYear}`,
    (url) => {
      return client.get(url).then((res) => res.data);
    }
  );
}
