import { ValueObject } from "src/modules/shared/vo.class"
import {err, ok, Result} from 'neverthrow'
import { SystemUrlInvalidException } from "../exceptions/system.exceptions"
interface UrlProps {
	value:string
}

export class urlVO extends ValueObject<UrlProps> {
	private constructor(props: UrlProps) {
		super(props)
	}

	static create(url: string): Result<urlVO, Error> {
		if (!url.match(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/gi)) {
			return err(new SystemUrlInvalidException)
		}
		return ok(new urlVO({ value: url }))
	}

	get value(): string {
		return this.props.value
	}
}


