
class Person {
  constructor ({
    id,
    other_names,
    identifiers,
    birth_date,
    death_date,
    links,
    contact_details,
    memberships,
    email,
    image,
    created_at,
    updated_at,
    name,
    family_name,
    given_name,
    additional_name,
    honorific_prefix,
    honorific_suffix,
    patronymic_name,
    sort_name,
    gender,
    summary,
    biography,
    national_identity,
    language_code
    }) {
    this.id = id
    this.other_names = other_names
    this.identifiers = identifiers
    this.birth_date = birth_date
    this.death_date = death_date
    this.links = links
    this.contact_details = contact_details
    this.email = email
    this.image = image
    this.created_at = created_at
    this.memberships = memberships
    this.updated_at = updated_at
    this.name = name
    this.family_name = family_name
    this.given_name = given_name
    this.additional_name = additional_name
    this.honorific_prefix = honorific_prefix
    this.honorific_suffix = honorific_suffix
    this.patronymic_name = patronymic_name
    this.sort_name = sort_name
    this.gender = gender
    this.summary = summary
    this.biography = biography
    this.national_identity = national_identity
    this.language_code = language_code
  }

  id () {
    return this.id
  }
  other_names () {
    return this.other_names
  }
  identifiers () {
    return this.identifiers
  }
  birth_date () {
    return this.birth_date
  }
  death_date () {
    return this.death_date
  }
  links () {
    return this.links
  }
  contact_details () {
    return this.contact_details
  }
  email () {
    return this.email
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
  name () {
    return this.name
  }
  family_name () {
    return this.family_name
  }
  given_name () {
    return this.given_name
  }
  additional_name () {
    return this.additional_name
  }
  honorific_prefix () {
    return this.honorific_prefix
  }
  honorific_suffix () {
    return this.honorific_suffix
  }
  patronymic_name () {
    return this.patronymic_name
  }
  sort_name () {
    return this.sort_name
  }
  gender () {
    return this.gender
  }
  summary () {
    return this.summary
  }
  biography () {
    return this.biography
  }
  national_identity () {
    return this.national_identity
  }
  language_code () {
    return this.language_code
  }
}

module.exports = Person
