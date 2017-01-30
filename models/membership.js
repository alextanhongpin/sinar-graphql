class Membership {
  constructor ({
  id,
  person,
  person_id,
  organization,
  organization_id,
  member,
  member_id,
  on_behalf_of,
  on_behalf_of_id,
  area,
  area_id,
  post,
  post_id,
  contact_details,
  links,
  start_date,
  end_date,
  created_at,
  updated_at,
  label,
  role,
  language_code
}) {
    this.id = id
    this.person = person
    this.person_id = person_id
    this.organization = organization
    this.organization_id = organization_id
    this.member = member
    this.member_id = member_id
    this.on_behalf_of = on_behalf_of
    this.on_behalf_of_id = on_behalf_of_id
    this.area = area
    this.area_id = area_id
    this.post = post
    this.post_id = post_id
    this.contact_details = contact_details
    this.links = links
    this.start_date = start_date
    this.end_date = end_date
    this.created_at = created_at
    this.updated_at = updated_at
    this.label = label
    this.role = role
    this.language_code = language_code
  }

  id () {
    return this.id
  }
  person () {
    return this.person
  }
  person_id () {
    return this.person_id
  }
  organization () {
    return this.organization
  }
  organization_id () {
    return this.organization_id
  }
  member () {
    return this.member
  }
  member_id () {
    return this.member_id
  }
  on_behalf_of () {
    return this.on_behalf_of
  }
  on_behalf_of_id () {
    return this.on_behalf_of_id
  }
  area () {
    return this.area
  }
  area_id () {
    return this.area_id
  }
  post () {
    return this.post
  }
  post_id () {
    return this.post_id
  }
  contact_details () {
    return this.contact_details
  }
  links () {
    return this.links
  }
  start_date () {
    return this.start_date
  }
  end_date () {
    return this.end_date
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

module.exports = Membership
