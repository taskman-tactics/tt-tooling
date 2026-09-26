import type { CellValue } from 'console-table-printer/dist/src/models/external-table.js';

export type MapValue<T> = T extends Map<unknown, infer K> ? K : never;

const numFormatter = new Intl.NumberFormat('en-IN', {
	maximumSignificantDigits: 3,
	minimumSignificantDigits: 3,
	trailingZeroDisplay: 'auto',
});

const pctFormatter = new Intl.NumberFormat('en-IN', {
	maximumFractionDigits: 0,
	style: 'percent',
});

export const hourFormatter = new Intl.NumberFormat('en-IN', {
	maximumSignificantDigits: 3,
	style: 'unit',
	unit: 'hour',
});

type IntlFormatInput = number | bigint | Intl.StringNumericLiteral;
type IntlFormatMethod = (value: IntlFormatInput) => string;

function wrapFmt(fmt: IntlFormatMethod) {
	return (origValue: IntlFormatInput | CellValue) => {
		let value: IntlFormatInput;
		if (origValue == null) {
			value = 0;
		} else if (typeof origValue === 'boolean') {
			value = origValue ? 1 : 0;
		} else if (typeof origValue === 'string') {
			value = Number(origValue);
		} else {
			value = origValue;
		}

		return fmt(value);
	};
}

export const numFmt = wrapFmt(numFormatter.format);
export const pctFmt = wrapFmt(pctFormatter.format);
export const hourFmt = wrapFmt(hourFormatter.format);
export const execFmt = (ms: number) =>
	Temporal.Duration.from({ milliseconds: Math.round(ms) })
		.round({
			largestUnit: 'seconds',
		})
		.toLocaleString('en-IN', {
			style: 'narrow',
		});
