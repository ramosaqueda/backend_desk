import System from "./system";
import { SystemProperties } from "./system";
import {urlVO} from "./value-objects/url.vo";
import { Result, err,ok} from "neverthrow";
import {
	SystemNameRequiredException,
	SystemDescriptionRequiredException,
	SystemUrlRequiredException,
	SystemUrlInvalidException,

} from "./exceptions/system.exceptions"

export type SystemResult = Result<System, SystemNameRequiredException | SystemDescriptionRequiredException | SystemUrlRequiredException | SystemUrlInvalidException>
export default class SystemFactory {
	public static create(props: SystemProperties): SystemResult {
		const { name, description, url } = props
		if (!name) return err(new SystemNameRequiredException())
		if (!description) return err(new SystemDescriptionRequiredException())
		if (!url) return err(new SystemUrlRequiredException())
		if (!urlVO.isUrl(url)) return err(new SystemUrlInvalidException())
		return ok(new System(props))
	}
}
