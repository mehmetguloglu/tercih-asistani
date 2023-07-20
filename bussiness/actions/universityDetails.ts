import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
export function getUniversityDetails(universityId) {
  return useSWR(
    "https://university-app.azurewebsites.net/mapi/v1/MobileUniversityPreference/GetUniversityPreference/" +
      universityId,
    fetcher
  );
}
