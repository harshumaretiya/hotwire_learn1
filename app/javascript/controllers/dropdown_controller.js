// app/javascript/controllers/dropdown_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];

  showMenu() {
    this.menuTarget.classList.remove("hidden");
    this.menuTarget.classList.add("block");
    this.menuTarget.classList.add("opacity-100");
    this.menuTarget.classList.remove("opacity-0");
    this.menuTarget.classList.add("scale-100");
    this.menuTarget.classList.remove("scale-95");
  }

  hideMenu() {
    this.menuTarget.classList.add("hidden");
    this.menuTarget.classList.remove("block");
    this.menuTarget.classList.add("opacity-0");
    this.menuTarget.classList.remove("opacity-100");
    this.menuTarget.classList.add("scale-95");
    this.menuTarget.classList.remove("scale-100");
  }

  toggleMenu() {
    this.menuTarget.classList.toggle("hidden");
    this.menuTarget.classList.toggle("block");
    this.menuTarget.classList.toggle("opacity-100");
    this.menuTarget.classList.toggle("opacity-0");
    this.menuTarget.classList.toggle("scale-100");
    this.menuTarget.classList.toggle("scale-95");
  }
}
