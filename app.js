const panals = document.querySelectorAll('.panal');


panals.forEach(function(panal){
    panal.addEventListener('click', function(){
        removeClasses()
        panal.classList.add('active')
    })
})


function removeClasses() {
    panals.forEach(function(panal){
        panal.classList.remove('active')
    })
}
