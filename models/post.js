
class Post {
  constructor ({
    id = '',
    organization,
    organization_id = '',
    area_id = '',
    start_date = '',
    end_date = '',
    contact_details = '',
    links = [],
    created_at = '',
    updated_at = '',
    label = '',
    role = '',
    language_code = ''
  }) {
    this.id = id
    this.organization = organization
    this.organization_id = organization_id
    this.area_id = area_id
    this.start_date = start_date
    this.end_date = end_date
    this.contact_details = contact_details
    this.links = links
    this.created_at = created_at
    this.updated_at = updated_at
    this.label = label
    this.role = role
    this.language_code = language_code
  }

  id () {
    return this.id
  }
  organization () {
    return this.organization
  }
  organization_id () {
    return this.organization_id
  }
  area_id () {
    return this.area_id
  }
  start_date () {
    return this.start_date
  }
  end_date () {
    return this.end_date
  }
  contact_details () {
    return this.contact_details
  }
  links () {
    return this.links
  }
  created_at () {
    return this.created_at
  }
  updated_at () {
    return this.updated_at
  }
  label () {
    return this.label
  }
  role () {
    return this.role
  }
  language_code () {
    return this.language_code
  }
}

module.exports = Post
