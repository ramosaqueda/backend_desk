import { SystemOptional } from "../interfaces/systemoptional.interface";
import { SystemRequired } from "../interfaces/systemRequired.interface"
export type SystemProperties = Required<SystemRequired> & Partial<SystemOptional>
