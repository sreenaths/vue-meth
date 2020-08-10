import fmtDuration from './fmtDuration';

const MSEC = 1;
const SECOND = 1000 * MSEC;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

describe('fmtDuration UTs', () => {
  test('fmtDuration not found', () => {
    expect(fmtDuration).toBeTruthy();
  });

  test('MIllie seconds', () => {
    expect(fmtDuration(0)).toBe('0ms');
    expect(fmtDuration(10)).toBe('10ms');
    expect(fmtDuration(100)).toBe('100ms');
    expect(fmtDuration(999)).toBe('999ms');
  });

  test('Seconds', () => {
    expect(fmtDuration(10 * SECOND)).toBe('10s');
    expect(fmtDuration(15 * SECOND)).toBe('15s');
    expect(fmtDuration(59 * SECOND)).toBe('59s');
  });

  test('Minutes', () => {
    expect(fmtDuration(10 * MINUTE)).toBe('10m');
    expect(fmtDuration(15 * MINUTE)).toBe('15m');
    expect(fmtDuration(59 * MINUTE)).toBe('59m');
  });

  test('Hours', () => {
    expect(fmtDuration(10 * HOUR)).toBe('10h');
    expect(fmtDuration(15 * HOUR)).toBe('15h');
    expect(fmtDuration(23 * HOUR)).toBe('23h');
  });

  test('Days', () => {
    expect(fmtDuration(10 * DAY)).toBe('10day');
    expect(fmtDuration(15 * DAY)).toBe('15day');
    expect(fmtDuration(24 * DAY)).toBe('24day');
    expect(fmtDuration(365 * DAY)).toBe('365day');
  });

  test('Mixed - Incremental', () => {
    expect(fmtDuration(10 * SECOND + 10)).toBe('10s 10ms');
    expect(fmtDuration(10 * MINUTE + 10 * SECOND + 10)).toBe('10m 10s 10ms');
    expect(fmtDuration(10 * HOUR + 10 * MINUTE + 10 * SECOND + 10)).toBe('10h 10m 10s');
    expect(fmtDuration(10 * DAY + 10 * HOUR + 10 * MINUTE + 10 * SECOND + 10)).toBe('10day 10h 10m');

    expect(fmtDuration(400 * DAY + 4 * HOUR + 4 * MINUTE + 4 * SECOND + 4)).toBe('400day 4h 4m');
  });

  test('Mixed - Random', () => {
    expect(fmtDuration(400 * DAY + 4 * MINUTE + 4 * SECOND + 4)).toBe('400day 4m 4s');
    expect(fmtDuration(400 * DAY + 4 * HOUR + 4)).toBe('400day 4h 4ms');
    expect(fmtDuration(400 * DAY + 4 * MINUTE + 4)).toBe('400day 4m 4ms');
    expect(fmtDuration(4 * HOUR + 4 * SECOND)).toBe('4h 4s');
  });
});
