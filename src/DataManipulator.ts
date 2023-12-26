import { ServerRespond } from './DataStreamer';

interface Row {
  ratio: number;
  upper_bound: number;
  lower_bound: number;
  trigger_alert: number | undefined;
  price_abc: number;
  price_def: number;
  timestamp: Date;
}

export class DataManipulator {
  static generateRow(serverRespond: ServerRespond[]): Row {
    const price_abc = /* calculate price_abc based on serverRespond */;
    const price_def = /* calculate price_def based on serverRespond */;
    const ratio = price_abc / price_def;
    const upper_bound = ratio * 1.1; // Adjust as needed
    const lower_bound = ratio * 0.99; // Adjust as needed
    const trigger_alert = ratio > upper_bound || ratio < lower_bound ? ratio : undefined;

    return {
      ratio,
      upper_bound,
      lower_bound,
      trigger_alert,
      price_abc,
      price_def,
      timestamp: new Date(),
    };
  }
}
