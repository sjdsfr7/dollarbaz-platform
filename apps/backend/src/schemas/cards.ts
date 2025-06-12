import { Type } from '@sinclair/typebox';
import type { Static } from '@sinclair/typebox';

export const CreateCardRequestSchema = Type.Object({
  userId: Type.String({ format: 'uuid' }),
  cardType: Type.Union([Type.Literal('virtual'), Type.Literal('physical')]),
  metadata: Type.Optional(Type.Record(Type.String(), Type.String())),
});

export type CreateCardRequestInput = Static<typeof CreateCardRequestSchema>;
