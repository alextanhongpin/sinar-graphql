class Organization {
  constructor ({
    id,
    // parent
    // memberships
    parent_id,
    founding_date,
    dissolution_date,
    links,
    contact_details,
    image,
    created_at,
    updated_at,
    area,
    name,
    classification,
    abstract,
    description,
    language_code
  }) {
    this.id = id
    this.parent_id = parent_id
    this.founding_date = founding_date
    this.dissolution_date = dissolution_date
    this.links = links
    this.contact_details = contact_details
    this.image = image
    this.created_at = created_at
    this.updated_at = updated_at
    this.area = area
    this.name = name
    this.classification = classification
    this.abstract = abstract
    this.description = description
    this.language_code = language_code
  }

  id () {
    return this.id
  }
  parent_id () {
    return this.parent_id
  }
  founding_date () {
    return this.founding_date
  }
  dissolution_date () {
    return this.dissolution_date
  }
  links () {
    return this.links
  }
  contact_details () {
    return this.contact_details
  }
  image () {
    return this.image
  }
  created_at () {
    return this.created_at
  }
  updated_at () {
    return this.updated_at
  }
  area () {
    return this.area
  }
  name () {
    return this.name
  }
  classification () {
    return this.classification
  }
  abstract () {
    return this.abstract
  }
  description () {
    return this.description
  }
  language_code () {
    return this.language_code
  }
}

module.exports = Organization
