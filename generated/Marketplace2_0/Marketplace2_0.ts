// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class RacerTradeEvent extends ethereum.Event {
  get params(): RacerTradeEvent__Params {
    return new RacerTradeEvent__Params(this);
  }
}

export class RacerTradeEvent__Params {
  _event: RacerTradeEvent;

  constructor(event: RacerTradeEvent) {
    this._event = event;
  }

  get status(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class TradeRacer__tradesResult {
  value0: i32;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: i32,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }
}

export class Marketplace2_0 extends ethereum.SmartContract {
  static bind(address: Address): Marketplace2_0 {
    return new Marketplace2_0("Marketplace2_0", address);
  }

  CANCELLED(): i32 {
    let result = super.call("CANCELLED", "CANCELLED():(uint8)", []);

    return result[0].toI32();
  }

  try_CANCELLED(): ethereum.CallResult<i32> {
    let result = super.tryCall("CANCELLED", "CANCELLED():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  CEO(): Bytes {
    let result = super.call("CEO", "CEO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CEO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CEO", "CEO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CFO(): Bytes {
    let result = super.call("CFO", "CFO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CFO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CFO", "CFO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CTO(): Bytes {
    let result = super.call("CTO", "CTO():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CTO(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CTO", "CTO():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  KRL(): Address {
    let result = super.call("KRL", "KRL():(address)", []);

    return result[0].toAddress();
  }

  try_KRL(): ethereum.CallResult<Address> {
    let result = super.tryCall("KRL", "KRL():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  LISTED(): i32 {
    let result = super.call("LISTED", "LISTED():(uint8)", []);

    return result[0].toI32();
  }

  try_LISTED(): ethereum.CallResult<i32> {
    let result = super.tryCall("LISTED", "LISTED():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  RACE(): Address {
    let result = super.call("RACE", "RACE():(address)", []);

    return result[0].toAddress();
  }

  try_RACE(): ethereum.CallResult<Address> {
    let result = super.tryCall("RACE", "RACE():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  SOLD(): i32 {
    let result = super.call("SOLD", "SOLD():(uint8)", []);

    return result[0].toI32();
  }

  try_SOLD(): ethereum.CallResult<i32> {
    let result = super.tryCall("SOLD", "SOLD():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): Bytes {
    let result = super.call(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC721Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC721Received",
      "onERC721Received(address,address,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromBytes(param3)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  trades(param0: BigInt): TradeRacer__tradesResult {
    let result = super.call(
      "trades",
      "trades(uint256):(uint8,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new TradeRacer__tradesResult(
      result[0].toI32(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_trades(param0: BigInt): ethereum.CallResult<TradeRacer__tradesResult> {
    let result = super.tryCall(
      "trades",
      "trades(uint256):(uint8,address,address,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TradeRacer__tradesResult(
        value[0].toI32(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }
}

export class BuyRacerCall extends ethereum.Call {
  get inputs(): BuyRacerCall__Inputs {
    return new BuyRacerCall__Inputs(this);
  }

  get outputs(): BuyRacerCall__Outputs {
    return new BuyRacerCall__Outputs(this);
  }
}

export class BuyRacerCall__Inputs {
  _call: BuyRacerCall;

  constructor(call: BuyRacerCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyRacerCall__Outputs {
  _call: BuyRacerCall;

  constructor(call: BuyRacerCall) {
    this._call = call;
  }
}

export class CancelRacerListingCall extends ethereum.Call {
  get inputs(): CancelRacerListingCall__Inputs {
    return new CancelRacerListingCall__Inputs(this);
  }

  get outputs(): CancelRacerListingCall__Outputs {
    return new CancelRacerListingCall__Outputs(this);
  }
}

export class CancelRacerListingCall__Inputs {
  _call: CancelRacerListingCall;

  constructor(call: CancelRacerListingCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelRacerListingCall__Outputs {
  _call: CancelRacerListingCall;

  constructor(call: CancelRacerListingCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _RACE(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _KRL(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class ListRacerCall extends ethereum.Call {
  get inputs(): ListRacerCall__Inputs {
    return new ListRacerCall__Inputs(this);
  }

  get outputs(): ListRacerCall__Outputs {
    return new ListRacerCall__Outputs(this);
  }
}

export class ListRacerCall__Inputs {
  _call: ListRacerCall;

  constructor(call: ListRacerCall) {
    this._call = call;
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListRacerCall__Outputs {
  _call: ListRacerCall;

  constructor(call: ListRacerCall) {
    this._call = call;
  }
}

export class OnERC721ReceivedCall extends ethereum.Call {
  get inputs(): OnERC721ReceivedCall__Inputs {
    return new OnERC721ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC721ReceivedCall__Outputs {
    return new OnERC721ReceivedCall__Outputs(this);
  }
}

export class OnERC721ReceivedCall__Inputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class OnERC721ReceivedCall__Outputs {
  _call: OnERC721ReceivedCall;

  constructor(call: OnERC721ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}
