import { Component } from "@angular/core";
import { DxSelectBoxComponent } from "devextreme-angular/ui/select-box";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  categories = new Array<String>("1", "2", "3", "4");

  searchModeOption = "startsWith";
  searchTimeoutOption = 0;
  minSearchLengthOption = 0;
  currentFitting: String;
  showDataBeforeSearchOption = false;
  currentEvent: DOMTokenList;
  dropdownContent: DOMTokenList;
  noResults = "noResults";
  fittings = "filters.fittings";
  isFitting = true;

  selectFitting(event: any) {
    if (!event.itemData) {
      return;
    }

    if (
      !this.currentFitting ||
      (this.currentFitting && this.currentFitting !== event.itemData)
    ) {
      this.currentFitting = event.itemData;
    }
  }

  inputValueChange(event: any, items: String[]) {
    this.currentEvent = event.element.classList;

    this.dropdownContent = document.querySelector(
      ".dx-dropdownlist-popup-wrapper.dx-popup-wrapper .dx-overlay-content"
    ).classList;

    const startsWith = items.some(a =>
      a.toUpperCase().startsWith(event.event.target.value.toUpperCase())
    );

    if (startsWith) {
      this.currentEvent.remove("red-margins");
      this.dropdownContent.remove("red-margins", "no-top-margin");
    } else {
      this.currentEvent.add("red-margins");
      this.dropdownContent.add("red-margins", "no-top-margin");
    }
  }

  resetSearchTextOnCloseDropdown(
    selectBox: DxSelectBoxComponent,
    selectedItem: String
  ) {
    const element = selectBox.instance.element().classList;
    if (selectBox.value !== selectedItem) {
      selectBox.instance.reset();
      selectBox.value = selectedItem;
      selectBox.selectedItem = selectedItem;
    }
    if (element) {
      this.dropdownContent.remove("red-margins");
      element.remove("red-margins", "no-top-margin");
    }
    if (selectBox.opened) {
      selectBox.instance.close();
    }
  }

  openList(event: any) {
    if (event.event.keyCode === 9) {
      if (!event.component.opened) {
        event.component.open();
      }
    }
  }
}
