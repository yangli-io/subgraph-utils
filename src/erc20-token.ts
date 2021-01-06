import { BigInt, Address } from '@graphprotocol/graph-ts'
import { ERC20 } from './abi/ERC20';

export class ERC20Token {
  contract;

  constructor(tokenAddress: Address) {
    this.contract = ERC20.bind(tokenAddress)
  }

  decimals(): BigInt {
    // try types uint8 for decimals
    let decimalValue = null
    let decimalResult = this.contract.try_decimals()
    if (!decimalResult.reverted) {
      decimalValue = decimalResult.value
    }
    return BigInt.fromI32(decimalValue as i32)
  }

  symbol(): string {
    // try types string and bytes32 for symbol
    let symbolValue = 'unknown'
    let symbolResult = this.contract.try_symbol()
  
    if (!symbolResult.reverted) {
      symbolValue = symbolResult.value
    }
  
    return symbolValue
  }

  name(): string {
    // try types string and bytes32 for symbol
    let nameValue = 'unknown'
    let nameResult = this.contract.try_name()
  
    if (!nameResult.reverted) {
      nameValue = nameResult.value
    }
  
    return nameValue
  }
}