//Mostrar el carrito

(function () {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    cartInfo.addEventListener('click', function () {
        cart.classList.toggle('show-cart')
    });
})();

//Agregar items al carrito

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
                <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
                </a>
                </div>`

                //Seleccionar el carrito
                const cart = document.getElementById("cart");
                const total = document.querySelector(".cart-total-container");

                cart.insertBefore(cartItem,total);
                alert(`${item.name} añadido al carrito con un valor de ${item.price}`)

                showTotal();

                console.log(pos);
                console.log(fullpath);
                console.log(partpath);
                console.log(name);
                console.log(price);
                console.log(finalprice);
                console.log(item);
            }
        });
    });
function showTotal(){
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");

    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    
    console.log(total);
    const totalPrice = total.reduce(function(total,item){
        total+=item;
        return total;
    },0);
    const precioFinal = totalPrice.toFixed(2);
    console.log(`El precio final es $${precioFinal}`);

    document.getElementById('cart-total').textContent = precioFinal;
    document.querySelector('.item-total').textContent = precioFinal;
    document.getElementById('item-count').textContent = total.length;
    }

})();