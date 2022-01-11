import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  RacerAssignEvent,
} from "../Scholarship/Scholarship"
import { ScholarshipHolder, Trade } from "../schema"
import {
  Marketplace2_0,
  RacerTradeEvent
} from "../Marketplace2_0/Marketplace2_0"

export function handleRacerAssignEvent(event: RacerAssignEvent): void {
  let entity = ScholarshipHolder.load(event.params.tokenId.toHex())
  if (!entity) {
    entity = new ScholarshipHolder(event.params.tokenId.toHex())
  }
  entity.racerId = event.params.tokenId
  if (event.params.getEvent) {
    if (event.params.role===1) {
      entity.manager = event.params.to
    } else if (event.params.role===2) {
      entity.scholar = event.params.to
    }
  } else {
    if (event.params.role===1) {
      entity.manager = Address.empty()
    } else if (event.params.role===2) {
      entity.scholar = Address.empty()
    }
  }
  entity.save()
}

export function handleRacerTradeEvent(event: RacerTradeEvent): void {
  let entity = Trade.load(event.params.tokenId.toHex())
  if (!entity) {
    entity = new Trade(event.params.tokenId.toHex())
  }
  entity.status = BigInt.fromI32(event.params.status)
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.tokenId = event.params.tokenId
  entity.timestamp = event.params.timestamp
  entity.save()
}