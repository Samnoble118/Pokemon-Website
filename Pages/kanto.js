//Bulbasaur
const bulbNorm = document.querySelector('.normal')
const bulbShine = document.querySelector('.shiny')

    //Add event listener
bulbNorm.addEventListener('click', () =>{
    if(bulbShine.classList.contains('shiny')){
        bulbShine.classList.add('active');
        bulbNorm.classList.remove('active');
    }
});
bulbShine.addEventListener('click', () =>{
    if(bulbNorm.classList.contains('normal')){
        bulbNorm.classList.add('active');
        bulbShine.classList.remove('active');
    }
})

//Ivysaur
const ivyNorm = document.querySelector('.iNormal')
const ivyShine = document.querySelector('.iShiny')

    //Add event listener
ivyNorm.addEventListener('click', () =>{
    if(ivyShine.classList.contains('iShiny')){
        ivyShine.classList.add('iActive');
        ivyNorm.classList.remove('iActive');
    }
});
ivyShine.addEventListener('click', () =>{
    if(ivyNorm.classList.contains('iNormal')){
        ivyNorm.classList.add('iActive');
        ivyShine.classList.remove('iActive');
    }
})

//Venasaur
const venNorm = document.querySelector('.vNormal')
const venShine = document.querySelector('.vShiny')

    //Add event listener
venNorm.addEventListener('click', () =>{
    if(venShine.classList.contains('vShiny')){
        venShine.classList.add('vActive');
        venNorm.classList.remove('vActive');
    }
});
venShine.addEventListener('click', () =>{
    if(venNorm.classList.contains('vNormal')){
        venNorm.classList.add('vActive');
        venShine.classList.remove('vActive');
    }
})

//Mega Venasaur
const megVenNorm = document.querySelector('.mvNormal')
const megVenShine = document.querySelector('.mvShiny')

    //Add event listener
megVenNorm.addEventListener('click', () =>{
    if(megVenShine.classList.contains('mvShiny')){
        megVenShine.classList.add('mvActive');
        megVenNorm.classList.remove('mvActive');
    }
});
megVenShine.addEventListener('click', () =>{
    if(megVenNorm.classList.contains('mvNormal')){
        megVenNorm.classList.add('mvActive');
        megVenShine.classList.remove('mvActive');
    }
})

//Gigantamax Venasaur
const giVenNorm = document.querySelector('.gvNormal')
const giVenShine = document.querySelector('.gvShiny')

    //Add event listener
giVenNorm.addEventListener('click', () =>{
    if(giVenShine.classList.contains('gvShiny')){
        giVenShine.classList.add('gvActive');
        giVenNorm.classList.remove('gvActive');
    }
});
giVenShine.addEventListener('click', () =>{
    if(giVenNorm.classList.contains('gvNormal')){
        giVenNorm.classList.add('gvActive');
        giVenShine.classList.remove('gvActive');
    }
})