import fmtDuration from './fmtDuration';
import FmtTypes from './FmtTypes';

export default function fmt(value: number, type: FmtTypes): string {
  switch (type) {
    case FmtTypes.DURATION:
      return fmtDuration(value);
      break;
  }
}
