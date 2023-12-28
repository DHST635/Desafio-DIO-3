let hero = {
    nome: "mestretodelo",
    idade: 28,
    tipo: {
        0: ["mago"],
        1: ["guerreiro"],
        2: ["monge"],
        3: ["ninja"]
    },
    ataque: {
        0: ["magia"],
        1: ["espada"],
        2: ["artes marciais"],
        3: ["shuriken"]
    }
}
generateHero(hero)
function generateHero(hero) {
    console.log(` O ${hero.tipo[0]}`)
    console.log(` atacou usando ${hero.ataque[0]}`)
}

