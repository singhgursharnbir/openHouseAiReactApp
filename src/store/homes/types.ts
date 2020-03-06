export interface home {
  forEach: Function;
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}
export interface fetchHomes {
  homes: home[];
}

export const FETCH_HOMES = "FETCH_HOMES";
export const COUNT_HOMES = "COUNT_HOMES";

interface FetchHomesAction {
  type: typeof FETCH_HOMES;
  payload: home;
}

interface CountHomes {
  type: typeof COUNT_HOMES;
}
export type FetchHomesTypes = FetchHomesAction | CountHomes;
