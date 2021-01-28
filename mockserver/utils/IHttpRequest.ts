export interface IHttpRequest {
  method?: string;
  path: string;
  body?: {
    type?: string,
    string?: any
    json?: any
    matchType?: string
  };
  queryStringParameters?: any;
}
