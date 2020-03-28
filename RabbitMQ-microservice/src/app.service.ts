import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public accumulate(data: number[]): number {
      return (data || []).reduce((a, b) => Number(a) + Number(b));
  }
}

(one more error page if card decline)
we are building your phone no
review to go to next step