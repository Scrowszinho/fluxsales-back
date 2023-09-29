import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class GlobalFilterException implements ExceptionFilter {
  constructor(private readonly _httpAdapterHost: HttpAdapterHost) {}
  catch(exception: Error, host: ArgumentsHost) {
    const { httpAdapter } = this._httpAdapterHost;
    const context = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      code: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(context.getRequest()),
    };

    httpAdapter.reply(context.getResponse(), responseBody, httpStatus);
  }
}
