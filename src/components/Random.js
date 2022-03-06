import '../components-css/Random.css';
import React from 'react'

const random = () => {
    
    const random_item = () => {
        var numero = Math.floor(Math.random() * 238);
        var obj;
        var resultado;
        console.log(numero)
        fetch('https://api.open5e.com/magicitems/?limit=238')
            .then(response => response.json())
            .then(data => obj = data)
            .then(() => resultado = document.getElementById("item").innerHTML =   ("Te ha tocado: "
                +obj.results[numero].name+
                "<br>Tipo:"
                +obj.results[numero].type+
                "<br>Descripción: "
                +obj.results[numero].desc+
                "<br>Rareza: "
                +obj.results[numero].rarity
                                            )  
                )
        console.log(obj)
      }

  return (
    <div className='random-container'>
            <div className='random-parent'>
                <div className='random-details'>
                    <div className='random-details-name'>
                        <span className='random-text'>
                            {" "}
                            It's dangerous to go alone take <span className="random-text">this!</span>
                        </span>
                    </div>
                    <div className='random-details-role'>
                    <button  class="btn" onClick={random_item} >
                    <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-chest-fairytale-wanicon-lineal-color-wanicon.png"/>
                    </button>
                    <div id='item'></div>
                    </div>
                </div>
            </div>
        </div>
  )
}



export default random