import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["pagination"]

  connect() {
    this.loadMore = this.loadMore.bind(this)
    window.addEventListener('scroll', this.loadMore)
    console.log("Infinite scroll controller connected")
  }

  disconnect() {
    window.removeEventListener('scroll', this.loadMore)
    console.log("Infinite scroll controller disconnected")
  }

  loadMore() {
    console.log("loadMore called")
    console.log("Pagination target:", this.paginationTargets)
    const nextPageLink = this.paginationTargets.querySelector('a[rel="next"]')
    if (nextPageLink) {
      console.log("Next page link found")
    } else {
      console.log("Next page link not found")
    }
    if (nextPageLink && window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      nextPageLink.click()
    }
  }
}
