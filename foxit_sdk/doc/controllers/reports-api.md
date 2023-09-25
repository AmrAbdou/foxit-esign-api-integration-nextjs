# Reports API

```ts
const reportsAPIController = new ReportsAPIController(client);
```

## Class Name

`ReportsAPIController`


# Download Report

To create a new user via API, please make a call to /users/create with the following parameters.

```ts
async downloadReport(
  accept: string,
  body: Report,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accept` | `string` | Header, Required | - |
| `body` | [`Report`](../../doc/models/report.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accept = 'application/vnd.ms-excel';
const body: Report = {
  status: 'EXECUTED',
  creationDateFrom: '2022-01-01',
  creationDateTo: '2022-04-01',
};

try {
  const { result, ...httpResponse } = await reportsAPIController.downloadReport(accept, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

