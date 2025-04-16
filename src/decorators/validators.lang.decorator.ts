import {
  IsNotEmpty,
  IsUUID,
  IsString,
  IsNumber,
  ArrayNotEmpty,
  ValidationOptions,
  IsEnum,
  IsEmail,
  Length,
  MinLength,
  MaxLength,
  IsArray,
} from 'class-validator';
import * as ValidatorJS from 'validator';

import { locale } from '@/src/i18n/ru';

export const IsUUIDTranslated = (fieldName?: string) =>
  IsUUID('all', { message: `${locale.incorrect_uuid} "${fieldName}"` });

export const IsNotEmptyTranslated = (fieldName: string) =>
  IsNotEmpty({
    message: `${locale.field} '${fieldName}' ${locale.is_not_empty}`,
  });

export const IsStringTranslated = (fieldName: string) =>
  IsString({
    message: `${locale.field} '${fieldName}' ${locale.must_be_string}`,
  });

export const IsNumberTranslated = (fieldName: string, params?: any) =>
  IsNumber(params, {
    message: `${locale.field} '${fieldName}' ${locale.must_be_number}`,
  });

export const ArrayNotEmptyTranslated = (fieldName: string, params?: ValidationOptions) =>
  ArrayNotEmpty({
    message: `${locale.field} '${fieldName}' ${locale.is_not_empty}`,
    ...params,
  });

export const IsEnumTranslated = (fieldName: string, values: any) =>
  IsEnum(values, {
    message: `${locale.field} '${fieldName}' ${locale.enum_must_be}: ${Object.values(values).join(', ')}`,
  });

export const IsEmailTranslated = (fieldName: string, params?: ValidatorJS.IsEmailOptions) =>
  IsEmail(params, {
    message: `${locale.field} '${fieldName}' ${locale.must_be_email}`,
  });

export const LengthTranslated = (min: number, max: number, fieldName: string) =>
  Length(min, max, {
    message: `${locale.field} '${fieldName}' ${locale.length_must_be} ${min}`,
  });

export const MinLengthTranslated = (min: number, fieldName: string) =>
  MinLength(min, {
    message: `${locale.field} '${fieldName}' ${locale.length_less_then} ${min}`,
  });

export const MaxLengthTranslated = (max: number, fieldName: string) =>
  MaxLength(max, {
    message: `${locale.field} '${fieldName}' ${locale.length_must_be} ${max}`,
  });

export const IsArrayTranslated = (fieldName: string) =>
  IsArray({
    message: `${locale.field} '${fieldName}' ${locale.must_be_array}`,
  });
