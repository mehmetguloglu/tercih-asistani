import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
export function getAllUniversities() {
  return useSWR(
    "https://university-app.azurewebsites.net/mapi/v1/MobileUniversity/GetAllUniversities",
    fetcher
  );
}
