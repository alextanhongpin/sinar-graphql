class Link {
  constructor ({
  id,
  label,
  field,
  url,
  created_at,
  updated_at,
  note,
  language_code
}) {
    this.id = id
    this.label = label
    this.field = field
    this.url = url
    this.created_at = created_at
    this.updated_at = updated_at
    this.note = note
    this.language_code = language_code
  }

  id () {
    return this.id
  }
  label () {
    return this.label
  }
  field () {
    return this.field
  }
  url () {
    return this.url
  }
  created_at () {
    return this.created_at
  }
  updated_at () {
    return this.updated_at
  }
  note () {
    return this.note
  }
  language_code () {
    return this.language_code
  }
}

module.exports = Link
