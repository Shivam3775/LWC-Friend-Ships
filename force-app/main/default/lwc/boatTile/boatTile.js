import { api, LightningElement } from 'lwc';

const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

export default class BoatTile extends LightningElement {
  @api boat;
  @api selectedBoatId;

  // Set the background image for the boat tile
  get backgroundStyle() {
    return `background-image:url(${this.boat.Picture__c});`;
  }

  // Switch tile class depending on whether this boat is selected
  get tileClass() {
    return this.boat.Id === this.selectedBoatId
      ? TILE_WRAPPER_SELECTED_CLASS
      : TILE_WRAPPER_UNSELECTED_CLASS;
  }

  // Fire custom event with selected boat Id
  selectBoat() {
    this.selectedBoatId = this.boat.Id;
    this.dispatchEvent(
      new CustomEvent('boatselect', {
        detail: { boatId: this.selectedBoatId }
      })
    );
  }
}
