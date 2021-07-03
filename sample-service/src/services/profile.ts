import { Service } from "typedi";
import {
  Profile,
  ProfileCreateInput,
  ProfileUpdateInput,
} from "~/models/profile";
import prisma from "~/prisma";

@Service()
export default class ProfileService {
  public getAllProfiles(): Promise<Profile[]> {
    const profiles = prisma.profile.findMany();
    return profiles;
  }

  public getProfileById(id: number): Promise<Profile | null> {
    const profile = prisma.profile.findFirst({ where: { id } });
    return profile;
  }

  public createProfile(data: ProfileCreateInput): Promise<Profile> {
    const profile = prisma.profile.create({ data });
    return profile;
  }

  public updateProfile(id: number, data: ProfileUpdateInput): Promise<Profile> {
    const profile = prisma.profile.update({ where: { id }, data });
    return profile;
  }

  public deleteProfile(id: number): Promise<Profile> {
    const profile = prisma.profile.delete({ where: { id } });
    return profile;
  }
}
