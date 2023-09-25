/**
 * Foxit eSign testLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, Schema } from '../schema';

export interface EnvelopeIdentifiers {
  folderIds: number[];
}

export const envelopeIdentifiersSchema: Schema<EnvelopeIdentifiers> = object({
  folderIds: ['folderIds', array(number())],
});
