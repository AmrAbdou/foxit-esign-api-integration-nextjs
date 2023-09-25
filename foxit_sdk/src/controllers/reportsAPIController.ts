/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Report, reportSchema } from '../models/report';
import { string, unknown } from '../schema';
import { BaseController } from './baseController';

export class ReportsAPIController extends BaseController {
  /**
   * To create a new user via API, please make a call to /users/create with the following parameters.
   *
   * @param accept Example: application/vnd.ms-excel
   * @param body
   * @return Response from the API call
   */
  async downloadReport(
    accept: string,
    body: Report,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/folders/getFolders/download');
    const mapped = req.prepareArgs({
      accept: [accept, string()],
      body: [body, reportSchema],
    });
    req.header('Accept', mapped.accept);
    req.json(mapped.body);
    return req.callAsJson(unknown(), requestOptions);
  }
}
