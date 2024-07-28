import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];

  connect() {
    this.hideMenu();
  }

  showMenu() {
    this.menuTarget.classList.remove("hidden");
    this.menuTarget.classList.add("opacity-100", "scale-100");
    this.menuTarget.classList.remove("opacity-0", "scale-95");
  }

  hideMenu() {
    this.menuTarget.classList.add("hidden");
    this.menuTarget.classList.remove("opacity-100", "scale-100");
    this.menuTarget.classList.add("opacity-0", "scale-95");
  }
}
