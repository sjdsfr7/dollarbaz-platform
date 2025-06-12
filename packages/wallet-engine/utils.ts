import { Decimal } from '@prisma/client/runtime/library';

/**
 * Ensures a Decimal with precision to 2 digits (e.g., for fiat).
 */
export function toFixedDecimal(
  value: number | string | Decimal,
  precision = 2,
): Decimal {
  return new Decimal(value).toDecimalPlaces(precision, Decimal.ROUND_HALF_UP);
}

/**
 * Validates that a Decimal is positive and non-zero.
 */
export function assertPositiveAmount(amount: Decimal) {
  if (amount.lte(0)) throw new Error('Amount must be greater than zero');
}

/**
 * Converts input to Decimal safely.
 */
export function parseAmount(value: number | string | Decimal): Decimal {
  const decimal = new Decimal(value);
  if (!decimal.isFinite()) throw new Error('Invalid amount');
  return decimal;
}

/**
 * Converts Decimal to float for frontend or simple arithmetic.
 */
export function toNumber(decimal: Decimal): number {
  return decimal.toNumber();
}
