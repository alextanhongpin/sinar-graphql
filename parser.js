const str = `
		page,
		next,
		previous,
		per_page,
		num_pages,
		has_more

`
const className = 'ClassName'

const output = str
.replace('\n', '')
.split(',')
.map((key) => {
  return key.trim()
})

const strOutput = `

	class ${className} {
		constructor({
			${output.join(',\n')}
		}) {
			${output.map((key) => {
			  return `this.${key} = ${key}`
}).join('\n')}
		}

		${output.map((key) => {
  return `${key} () {
				return this.${key}
			}`
}).join('\n')}
	}


`

console.log(strOutput)
