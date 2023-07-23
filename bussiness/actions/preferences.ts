import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
export function getAllDepartments() {
  return useSWR(
    "https://university-app.azurewebsites.net/mapi/v1/MobileDepartment/GetDepartments/1/10000",
    fetcher
  );
}
