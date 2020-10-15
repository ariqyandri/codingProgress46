const countries = {
    USA: 'Burger',
    Japan: 'Tempura',
    France: 'Criossant'
}

const pretty = JSON.stringify(countries, null, 2);

const parsed = JSON.parse(pretty);

console.log(parsed)