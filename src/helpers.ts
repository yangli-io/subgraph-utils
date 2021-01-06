import { BigInt, BigDecimal } from "@graphprotocol/graph-ts"

export let ZERO_BD = BigDecimal.fromString('0')
export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export function exponent(base: BigDecimal, power: BigInt): BigDecimal {
  let bd = BigDecimal.fromString('1')
  for (let i = ZERO_BI; i.lt(power as BigInt); i = i.plus(ONE_BI)) {
    bd = bd.times(base)
  }
  return bd
}

export function exponentTen(power: BigInt): BigDecimal {
  return exponent(BigDecimal.fromString('10'), power);
}

export function convertToDecimal(value: BigInt, decimals: BigInt): BigDecimal {
  return value.toBigDecimal().div(exponentTen(decimals))
}