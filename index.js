const pokeName = document.getElementById('name')
const pokeSprite = document.getElementById('sprite')
const pokePick = document.getElementById('pokeInput')    //Who's that pokemon!
const pokeAbilities = document.getElementById('attributes')
const pokeStats = document.getElementById('statistics')
const pokeHeight = document.getElementById('height')
const pokeWeight = document.getElementById('weight')

let poke = '1'

let pokeListAbilities = ''
let pokeListStats = ''

let endpoint = `http://pokeapi.co/api/v2/pokemon/${poke}/`


fetch(endpoint).then(blob => blob.json()).then(data =>{
  //pokeSprite.innerHTML = `<img src='${}' class='center animated fadeInUp' />`
  pokeName.innerHTML = `<h6 class='animated fadeInUp'>Type in a Pokemon above!</h6>`
  pokePick.innerHTML = `<input></input>`

  pokePick.addEventListener('keydown', (e) =>{
    if(e.keyCode == 13){
        endpoint = `http://pokeapi.co/api/v2/pokemon/${e.path[0].value}/`
        fetch(endpoint).then(blob => blob.json()).then(data =>{
          console.log(data)
          pokeListStats = ''
          pokeListAbilities = ''
          data.stats.forEach(element =>{
            pokeListStats += `<li>${element.stat.name} : ${element.base_stat}</li>`
          })
          data.abilities.forEach(element =>{
              pokeListAbilities += `<li>${element.ability.name}</li>`

          })
          pokeAbilities.innerHTML = pokeListAbilities
          pokeStats.innerHTML = pokeListStats

          pokeSprite.innerHTML = `<img src='${data.sprites.front_default}' class='center animated fadeInUp' />`
          pokeName.innerHTML = `<h4 class='animated fadeInUp'>${data.name.toUpperCase()}</h4>`
          pokeHeight.innerHTML = `<p class='animated fadeInUp'>Height: ${data.height}</p>`
          pokeWeight.innerHTML = `<p class='animated fadeInUp'>Weight: ${data.weight}</p>`

          //pokePick.innerHTML = `<input value='${}'></input>`
          while(e.path[0].value !== data.name){
            pokeName.innerHTML = `<h4>No Results Found</h4>`
            pokeSprite.innerHTML = `<h5>No Img</h5>`
          }
      })
    }else{
        return
      }
    })
  })

  const stat = `http://pokeapi.co/api/v2/stat/4/`

  fetch(stat).then(blob => blob.json()).then(data => console.log(data))
