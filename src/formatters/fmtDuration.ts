const MAX_SPECIFIERS = 3;

export interface ISpecifier {
  base: number;
  unit: string;
}

const MSEC = 1;
const SECOND = 1000 * MSEC;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const FORMAT: ISpecifier[] = [
  {
    base: DAY,
    unit: 'day',
  },
  {
    base: HOUR,
    unit: 'h',
  },
  {
    base: MINUTE,
    unit: 'm',
  },
  {
    base: SECOND,
    unit: 's',
  },
  {
    base: MSEC,
    unit: 'ms',
  },
];

export default function fmtDuration(value: number, format: ISpecifier[] = FORMAT): string {
  const durationParts: string[] = [];

  for (let i = 0; i < format.length && durationParts.length < MAX_SPECIFIERS; i++) {
    const part: ISpecifier = format[i];
    const val: number = Math.floor(value / part.base);
    if (val) {
      durationParts.push(val + part.unit);
    }
    value = value % part.base;
  }

  if (durationParts.length === 0) {
    return '0ms';
  } else {
    return durationParts.join(' ');
  }
}
