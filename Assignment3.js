let aastha = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50'

fetch(aastha)
    .then(output=>{
        
        return output.json()
    })
    
    .then(output=>{
        
        let html=``
        let i=1
        
        for(x of output.results)
        {   
            fetch(x.url)
            .then(response=>response.json())
            .then(response=>{
                
               
                html=html+`<section id='${response.name.replace('-','')}' onClick='showhtml(${response.name.replace('-','')})'><img src='${response.sprites.front_default}'><div class="name">${response.name.toUpperCase()}</div></section>`
               
                document.querySelector('main').innerHTML=html
                
                
                i++;
            })
            
        }
    return output
    
    })

   
    function showhtml(id){
       
        let id2=id.innerText.toLowerCase().replace('-','')
        
        fetch(aastha)
        .then(output=>output.json())
        .then(output=>{
    
        for(x of output.results)
                {  
                    fetch(x.url)
                    .then(response=>response.json())
                    .then(response=>{
                       
                        
                        if(response.name.replace('-','')===id2){
                            document.querySelector('.show').innerHTML=`<img src='${response.sprites.front_default}'> <div class='height'>Height : ${response.height}0 cm</div> <div class='weight'>Weight : ${response.weight/10}kg </div><div class='type1'>Type : ${response.types[0].type.name}</div><div class='pokename'>${response.name.toUpperCase()}</div>`
                           }
                    })
                }

    })
}
    
       
  