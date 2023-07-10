import { ValueObject } from '../../../shared/vo.class'

import { SystemUrlInvalidException } from '../exceptions/system.exceptions'
import { err, ok, Result } from 'neverthrow'

interface UrlProps {
	value: string
}

export type UrlResult = Result<urlVO, SystemUrlInvalidException>

export class urlVO extends ValueObject<UrlProps> {
	private constructor(props: UrlProps) {
		super(props)
	}

	static create(url: string): UrlResult {
		yarn ruif (!url.match(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/gi)) {
			return err(new SystemUrlInvalidException())
		}
		return ok(new urlVO({ value: url }))
	}

	get value(): string {
		return this.props.value
	}
}
