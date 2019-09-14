let popover_state = true;
clickMe.addEventListener('click', function(e){
    if(popover_state){
        popover.style.display = 'block'  
        
    }else{
        popover.style.display = 'none'  
    }
    popover_state = !popover_state
    e.stopPropagation()
})
popover.addEventListener('click', function(e){
    e.stopPropagation()
})

document.addEventListener('click', function(){
    popover.style.display = 'none'
    popover_state = true
})