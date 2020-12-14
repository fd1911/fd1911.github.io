//Mostrar el carrito

(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
    });
})();

//add items from json

let HTMLCard = "";
let contenidoJSON = []

function addItems() {
   $.ajax({
      url: "js/items.json",
      dataType: "json",
      success: function(response) {
         console.log(status)
         //debugger
         contenidoJSON = response
         $.each(response, function(i) {
            HTMLCard +=`<div class="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
            <div class="card ">
              <div class="img-container">
                <img src="${response[i].img}" class="card-img-top store-img" alt="">
                <span class="store-item-icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </div>
              <div class="card-body">
                <div class="card-text d-flex justify-content-between text-capitalize">
                  <h5 id="store-item-name">${response[i].name}</h5>
                  <h5 class="store-item-value">$ <strong id="store-item-price" class="font-weight-bold">${response[i].price}</strong></h5>
  
                </div>
              </div>
            </div>
            </div>`
         })
         $("#store-items").html(HTMLCard)
        },
        error:function(){
            HTMLCard = `<h4>Ocurrio un error</h4>`
            $('#store-items').html(HTMLCard)
         } 
      })
   }

   setTimeout(()=>{
    addItems()
})   
//Agregar items al carrito


console.log("hello");


(function () {
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            // console.log(event.target);
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullpath = event.target.parentElement.previousElementSibling.src;
                let pos = fullpath.indexOf("img") + 3;
                let partpath = fullpath.slice(pos);
                const item = {};
                item.img = `img-cart${partpath}`;
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalprice = price.slice(1).trim();
                item.price = finalprice;

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item',
                    'd-flex',
                    'justify-content-between',
                    'text-capitalize',
                    'my-3');

                cartItem.innerHTML =
                    `<img src=${item.img} class="img-fluid rounded-circle" id="item-img" alt="">
                <div class="item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                </div>
                <a href="#" id='cart-item-remove' onclick="itemRemove();return false;"class="cart-item-remove">
                <i class="fas fa-trash"></i>
                </a>
                </div>`

                //Seleccionar el carrito
                const cart = document.getElementById("cart");
                const total = document.querySelector(".cart-total-container");

                cart.insertBefore(cartItem, total);
                alert(`${item.name} añadido al carrito con un valor de ${item.price}`)

                showTotal();
                //removido para no llenar tanto la consola
                // console.log(pos);
                // console.log(fullpath);
                // console.log(partpath);
                // console.log(name);
                // console.log(price);
                // console.log(finalprice);
                // console.log(item);
            }
        });
    });

    function showTotal() {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");

        items.forEach(function (item) {
            total.push(parseFloat(item.textContent));
        })

        console.log(total);
        const totalPrice = total.reduce(function (total, item) {
            total += item;
            return total;
        }, 0);
        const precioFinal = totalPrice.toFixed(2);
        console.log(`El precio final es $${precioFinal}`);

        document.getElementById('cart-total').textContent = precioFinal;
        document.querySelector('.item-total').textContent = precioFinal;
        document.getElementById('item-count').textContent = total.length;
    }

})();

//Remover item del carrito
function itemRemove() {
    //obtiene el elemento del boton para remover un objeto y como es un child element
    const deleteBTN = document.getElementById("cart-item-remove")
    //obtenemos el objeto parent
    const deleteBTNparent = deleteBTN.parentElement;

    //mostrar en consola
    console.log(deleteBTNparent)
    //remueve el elemento
    deleteBTNparent.remove()
    const itemQTY = document.getElementById("item-count")
    console.log(itemQTY.innerText);
    itemQTY - itemQTY.innerHTML

};
//TODO falta el actualizar el item count y los precios totales por que no me funciona bien

// deleteBTN.addEventListener('click', function(){
//     let deleteBTNparent = deleteBTN.parentElement.parentElement;
// })

//  console.log(deleteBTN);
//  deleteBTN.addEventListener('click', function(){
//      clg(deleteBTN.parentElement)
//  })
// document.querySelector("#cart-item-remove > i")

