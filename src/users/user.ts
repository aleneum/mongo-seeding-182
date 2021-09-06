import { getObjectId } from "mongo-seeding";
import { IUserData } from "../schemata/User.schema";

const users: IUserData[] = [
  {
    _id: getObjectId("JonDoe"),
    id: 1,
    firstName: "Jon",
    lastName: "Doe",
  },
];

export = users;
