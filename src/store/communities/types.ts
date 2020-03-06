export interface community {
  sort: Function;
  id: string;
  name: string;
  imgUrl: string;
  group: string;
}

export const FETCH_COMMUNITIES = "FETCH_COMMUNITIES";

interface FetchCommunityAction {
  type: typeof FETCH_COMMUNITIES;
  payload: community;
}
export type FetchCommunityTypes = FetchCommunityAction;
