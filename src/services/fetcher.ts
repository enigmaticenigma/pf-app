import axios from "axios"

export const fetcher = ([url, variables]: [
  string,
  Record<string, string>,
]): Promise<unknown> =>
  axios
    .get<unknown>(url, {
      params: {
        ...variables,
      },
    })
    .then((res) => res.data)
