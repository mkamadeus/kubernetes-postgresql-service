import { Service } from "typedi";
import { User, UserCreateInput, UserUpdateInput } from "~/models/user";
import prisma from "~/prisma";

@Service()
export default class UserService {
  public getAllUsers(): Promise<User[]> {
    const users = prisma.user.findMany();
    return users;
  }

  public getUserById(id: number): Promise<User | null> {
    const user = prisma.user.findFirst({ where: { id } });
    return user;
  }

  public createUser(data: UserCreateInput): Promise<User> {
    const user = prisma.user.create({ data });
    return user;
  }

  public updateUser(id: number, data: UserUpdateInput): Promise<User> {
    const user = prisma.user.update({ where: { id }, data });
    return user;
  }

  public deleteUser(id: number): Promise<User> {
    const user = prisma.user.delete({ where: { id } });
    return user;
  }
}
