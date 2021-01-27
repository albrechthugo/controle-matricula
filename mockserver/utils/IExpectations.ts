import { IHttpRequest } from './IHttpRequest';
import { IHttpResponse } from './IHttpResponse';

export interface IExpectation {
  httpRequest: IHttpRequest;
  httpResponse: IHttpResponse;
  times?: {
    remainingTimes: number,
    unlimited: boolean
  };
  timeToLive?: {
    unlimited: boolean
  };
}
