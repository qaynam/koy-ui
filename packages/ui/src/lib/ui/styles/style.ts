/* eslint-disable @typescript-eslint/no-explicit-any */
import { cx, css } from '@emotion/css';

const dev = import.meta.env.MODE === 'development';

export function getStyleLabel(namespace: string, key: string | number | symbol) {
	if (!dev) {
		return namespace;
	}

	return `${namespace}__${key.toString()}`;
}

// prettier-ignore
type Name = `${"A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"}${string}`

export function style<
	V extends string | ((...params: any[]) => string),
	P extends Record<string, V>
>(namespace: Name = 'Style', props: P) {
	if (!dev) {
		return props;
	}

	const styles = {} as P;

	Object.keys(props).forEach((key: keyof P) => {
		const item = props[key];
		if (typeof item === 'function') {
			styles[key] = ((...props: any) =>
				cx(
					item(...props),
					css`
						label: ${getStyleLabel(namespace, key)};
					`
				)) as P[keyof P];
		} else {
			styles[key] = cx(
				item,
				css`
					label: ${getStyleLabel(namespace, key)};
				`
			) as P[keyof P];
		}
	});

	return styles;
}
