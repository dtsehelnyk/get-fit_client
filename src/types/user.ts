import { Measure } from "./measures";

export type User = {
  _id: string,
  username: string,
  email: string,
  measure: Measure,
  language: string,
  canTrain: string[],
  themeId?: string,
  avatarImg?: string,
  weight?: number,
}
