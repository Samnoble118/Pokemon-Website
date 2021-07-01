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

//Charmander
const mandNorm = document.querySelector('.cNormal')
const mandShine = document.querySelector('.cShiny')

    //Add event listener
mandNorm.addEventListener('click', () =>{
    if(mandShine.classList.contains('cShiny')){
        mandShine.classList.add('cActive');
        mandNorm.classList.remove('cActive');
    }
});
mandShine.addEventListener('click', () =>{
    if(mandNorm.classList.contains('cNormal')){
        mandNorm.classList.add('cActive');
        mandShine.classList.remove('cActive');
    }
})

//Charmeleon
const melNorm = document.querySelector('.clNormal')
const melShine = document.querySelector('.clShiny')

    //Add event listener
melNorm.addEventListener('click', () =>{
    if(melShine.classList.contains('clShiny')){
        melShine.classList.add('clActive');
        melNorm.classList.remove('clActive');
    }
});
melShine.addEventListener('click', () =>{
    if(melNorm.classList.contains('clNormal')){
        melNorm.classList.add('clActive');
        melShine.classList.remove('clActive');
    }
})

//Charizard
const rizNorm = document.querySelector('.chaNormal')
const rizShine = document.querySelector('.chaShiny')

    //Add event listener
rizNorm.addEventListener('click', () =>{
    if(rizShine.classList.contains('chaShiny')){
        rizShine.classList.add('chaActive');
        rizNorm.classList.remove('chaActive');
    }
});
rizShine.addEventListener('click', () =>{
    if(rizNorm.classList.contains('chaNormal')){
        rizNorm.classList.add('chaActive');
        rizShine.classList.remove('chaActive');
    }
})

//Mega Charizard X
const rizXNorm = document.querySelector('.chaXNormal')
const rizXShine = document.querySelector('.chaXShiny')

    //Add event listener
rizXNorm.addEventListener('click', () =>{
    if(rizXShine.classList.contains('chaXShiny')){
        rizXShine.classList.add('chaXActive');
        rizXNorm.classList.remove('chaXActive');
    }
});
rizXShine.addEventListener('click', () =>{
    if(rizXNorm.classList.contains('chaXNormal')){
        rizXNorm.classList.add('chaXActive');
        rizXShine.classList.remove('chaXActive');
    }
})

//Mega Charizard Y
const rizYNorm = document.querySelector('.chaYNormal')
const rizYShine = document.querySelector('.chaYShiny')

    //Add event listener
rizYNorm.addEventListener('click', () =>{
    if(rizYShine.classList.contains('chaYShiny')){
        rizYShine.classList.add('chaYActive');
        rizYNorm.classList.remove('chaYActive');
    }
});
rizYShine.addEventListener('click', () =>{
    if(rizYNorm.classList.contains('chaYNormal')){
        rizYNorm.classList.add('chaYActive');
        rizYShine.classList.remove('chaYActive');
    }
})

//Gigantamax Charizard
const gRizNorm = document.querySelector('.gChaNormal')
const gRizShine = document.querySelector('.gChaShiny')

    //Add event listener
    gRizNorm.addEventListener('click', () =>{
    if(gRizShine.classList.contains('gChaShiny')){
        gRizShine.classList.add('gChaActive');
        gRizNorm.classList.remove('gChaActive');
    }
});
gRizShine.addEventListener('click', () =>{
    if(gRizNorm.classList.contains('gChaNormal')){
        gRizNorm.classList.add('gChaActive');
        gRizShine.classList.remove('gChaActive');
    }
})

//Squritle
const squNorm = document.querySelector('.sNormal')
const squShine = document.querySelector('.sShiny')

    //Add event listener
squNorm.addEventListener('click', () =>{
    if(squShine.classList.contains('sShiny')){
        squShine.classList.add('sActive');
        squNorm.classList.remove('sActive');
    }
});
squShine.addEventListener('click', () =>{
    if(squNorm.classList.contains('sNormal')){
        squNorm.classList.add('sActive');
        squShine.classList.remove('sActive');
    }
})

//Wartortle
const warNorm = document.querySelector('.wNormal')
const warShine = document.querySelector('.wShiny')

    //Add event listener
warNorm.addEventListener('click', () =>{
    if(warShine.classList.contains('wShiny')){
        warShine.classList.add('wActive');
        warNorm.classList.remove('wActive');
    }
});
warShine.addEventListener('click', () =>{
    if(warNorm.classList.contains('wNormal')){
        warNorm.classList.add('wActive');
        warShine.classList.remove('wActive');
    }
})

//Blastoise
const blaNorm = document.querySelector('.bNormal')
const blaShine = document.querySelector('.bShiny')

    //Add event listener
blaNorm.addEventListener('click', () =>{
    if(blaShine.classList.contains('bShiny')){
        blaShine.classList.add('bActive');
        blaNorm.classList.remove('bActive');
    }
});
blaShine.addEventListener('click', () =>{
    if(blaNorm.classList.contains('bNormal')){
        blaNorm.classList.add('bActive');
        blaShine.classList.remove('bActive');
    }
})

//Mega Blastoise
const megBlaNorm = document.querySelector('.mbNormal')
const megBlaShine = document.querySelector('.mbShiny')

    //Add event listener
megBlaNorm.addEventListener('click', () =>{
    if(megBlaShine.classList.contains('mbShiny')){
        megBlaShine.classList.add('mbActive');
        megBlaNorm.classList.remove('mbActive');
    }
});
megBlaShine.addEventListener('click', () =>{
    if(megBlaNorm.classList.contains('mbNormal')){
        megBlaNorm.classList.add('mbActive');
        megBlaShine.classList.remove('mbActive');
    }
})

//Gigantamax Blastoise
const gBlaNorm = document.querySelector('.gbNormal')
const gBlaShine = document.querySelector('.gbShiny')

    //Add event listener
gBlaNorm.addEventListener('click', () =>{
    if(gBlaShine.classList.contains('gbShiny')){
        gBlaShine.classList.add('gbActive');
        gBlaNorm.classList.remove('gbActive');
    }
});
gBlaShine.addEventListener('click', () =>{
    if(gBlaNorm.classList.contains('gbNormal')){
        gBlaNorm.classList.add('gbActive');
        gBlaShine.classList.remove('gbActive');
    }
})