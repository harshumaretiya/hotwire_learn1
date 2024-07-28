import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header"];

  connect() {
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll(); // Initial check
  }

  disconnect() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 50) { // Adjust scroll position as needed
      this.element.classList.add("scrolled");
    } else {
      this.element.classList.remove("scrolled");
    }
  }
}
