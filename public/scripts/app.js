

// Client facing scripts here
$(document).ready(function(){

  // Console.log to check if this file if loaded in browser properly
  console.log("app.js is loaded")

  const addInCart = (foodItem) => {
    axios.post('/cart-update', foodItem)
    .then((res) => {
        console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  //Select all the add to cart buttons -> this will give an array of all the btns
  let addToCartBtn = document.querySelectorAll('.add-to-cart')
  // attach event listener on individual button to add it to cart
  addToCartBtn.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
      let foodItem = JSON.parse(btn.dataset.fooditem);
      addInCart(foodItem)


    })
  })


})
