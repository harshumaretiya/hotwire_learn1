import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static get targets() {
    return ["details"]
  }

  toggle() {
    this.detailsTarget.classList.toggle("hidden")
  }
}
