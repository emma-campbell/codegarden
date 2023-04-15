import { Kysely } from "kysely";
import {
  PlanetScaleDialect,
  PlanetScaleDialectConfig,
} from "kysely-planetscale";

export interface Stats {
  slug: string;
  likes: number;
  views: number;
}

export interface Session {
  id: string;
  createdAt: Date;
}

interface Database {
  stats: Stats;
  session: Session;
}

const config: PlanetScaleDialectConfig = {
  url: process.env.DATABASE_URL,
};

export const db = new Kysely<Database>({
  dialect: new PlanetScaleDialect(config),
});
