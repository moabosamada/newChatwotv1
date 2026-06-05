import type { DefaultSession } from "next-auth";
import type { Role } from "@/server/permissions/roles";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      tenantId: string;
      isActive: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    role: Role;
    tenantId: string;
    isActive: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: Role;
    tenantId: string;
    isActive: boolean;
  }
}
