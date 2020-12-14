// let HTMLCard = "";
// let contenidoJSON = []
//  //Template Literals o Template Strings ``
//  // ${}
//  //VENTAJAS: Concatenar o interpolar Strings.
//  //          Basta de caracteres de escape cuando usamos comillas simples
//  //          Armar strings en varias líneas de manera más cómoda (sin concatenación!)
//  //          https://latteandcode.medium.com/javascript-como-funcionan-las-comillas-invertidas-88c7fb209e9e
//  //          https://uniwebsidad.com/tutoriales/las-nuevas-cadenas-de-texto-de-javascript-6


 
// function cargoContenidoStreaming() {

// }

//    setTimeout(() => {
//       cargoContenidoStreaming()
//          $('#contenido').fadeIn("slow")
//    }, 2000)

// function verDetalle(i) {

// }

let HTMLCard = "";
let contenidoJSON = []

function cargoContenidoStreaming() {
   $.ajax({
      url: "js/api.json",
      dataType: "json",
      success: function(response) {
         console.log(status)
         //debugger
         contenidoJSON = response
         $.each(response, function(i) {
            HTMLCard += `<div class="col s12 m6 l3">
                           <div class="card z-depth-2">
                           <div class="card-image">
                              <img src="${response[i].poster}">
                              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons" onclick="verDetalle(${response[i].id})">search</i></a>
                           </div>
                           <div class="card-content black">
                              <p class="yellow-text">GÉNERO: <span class="white-text">${response[i].genero}</span></p>
                              <p class="yellow-text">TEMPORADAS: <span class="white-text">${response[i].temporadas}</span></p>
                           </div>
                           </div>
                        </div>`
         })
         $("#contenido").html(HTMLCard)
      },
      error: function() {
         console.error("Ocurrió un error... :(")
         HTMLCard = `<div class="center white-text"> 
                     <br><br> 
                     <br><br> 
                     <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                     <br><br> 
                     <i class="large material-icons">sentiment_very_dissatisfied</i> 
                     <br><br> 
                     </div>`
         $("#contenido").html(HTMLCard)
      } 
   })
}

setTimeout(() => {
   cargoContenidoStreaming()
      $('#contenido').fadeIn("fast", function() {
         $('#cargando').fadeOut(200)
      })
}, 2000)

function verDetalle(i) {
   //debugger
   let detalleJSON = contenidoJSON.find(item => item.id == i)
      if (detalleJSON != null) {
         localStorage.setItem("contenido", JSON.stringify(detalleJSON))
         location.href = "detail.html"
         console.log(detalleJSON)
      } else {
         console.error("No se encontró el elemento: " + i)
      }
}