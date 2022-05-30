import { IUser } from "./user";

export interface IPost {
  id: string;
  title: string;
  status: "published" | "draft" | "rejected";
  content: string;
  createdAt: string;
  user: IUser;
}
