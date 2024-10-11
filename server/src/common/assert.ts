import {
  BadRequestException,
  Logger,
  NotAcceptableException,
} from '@nestjs/common';
import typia from 'typia';

export class TypiaExceptionHandler {
  private readonly pattern = /\$input\./g;
  private readonly error: typia.IValidation.IError;

  constructor(error: typia.IValidation.IError) {
    this.error = error;
  }

  private isNonDtoType(expected: any): boolean {
    return expected === 'undefined';
  }

  private isMissingData(expected: any, value: any): boolean {
    return expected && !value;
  }

  private isInvalidDataType(expected: any, value: any): boolean {
    return typeof expected !== typeof value;
  }

  handleValidationError(): never {
    const { expected, value, path } = this.error;
    const cleanPath = path.replace(this.pattern, '');

    if (this.isNonDtoType(expected)) {
      throw new BadRequestException(
        `Received unexpected data '${cleanPath}' [WRONG DATA SENT ERROR]`,
      );
    }

    if (this.isMissingData(expected, value)) {
      throw new BadRequestException(
        `Received unexpected data '${cleanPath}' [MISSING DATA ERROR]`,
      );
    }

    if (this.isInvalidDataType(expected, value)) {
      throw new BadRequestException(
        `Received unexpected data '${cleanPath}' [INVALID TYPE ERROR]`,
      );
    }

    Logger.error(this.error);
    Logger.error(`Not acceptable error [NOT ACCEPTABLE ERROR] [Create Board]`);
    throw new NotAcceptableException();
  }
}
