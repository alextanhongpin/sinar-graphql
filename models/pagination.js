class PageInfo {
  constructor ({
	page,
	next,
	previous,
	per_page,
	num_pages,
	has_more
}) {
    this.page = page
    this.next = next
    this.previous = previous
    this.per_page = per_page
    this.num_pages = num_pages
    this.has_more = has_more
  }

  page () {
    return this.page
  }
  next () {
    return this.next
  }
  previous () {
    return this.previous
  }
  perPage () {
    return this.per_page
  }
  numPages () {
    return this.num_pages
  }
  hasMore () {
    return this.has_more
  }
}

module.exports = PageInfo
