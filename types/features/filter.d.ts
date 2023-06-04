export interface FilterState {
  categories: { name: Categories; active: boolean }[];
}

export type Categories =
  | "All"
  | "UI"
  | "UX"
  | "Enhancement"
  | "Bug"
  | "Feature";
