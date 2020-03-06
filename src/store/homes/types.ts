export interface home {
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

interface FetchHomesAction {
  type: typeof FETCH_HOMES;
  payload: home;
}
export type FetchHomesTypes = FetchHomesAction;
