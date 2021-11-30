
$(document).ready(function(){


  // submit the time time form. this will send sms to customer and update the order status in db  
  // const sendEstimatebutton = $('#sendTimeSMS')
  // sendEstimatebutton.click(()=>{
  //   const estimatedTimeForm = $('.sendTime')
  //   estimatedTimeForm.submit()
  // })




  const adminOrders = $('#adminOrders');
  orders = []
  let newElements
  axios.get('/admin/orders/new', {
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
  })
  .then( res => {
    orders = res.data
    console.log("This is json data from ajax request")
   let newElements = generateOrders(orders)
    adminOrders.innerHTML = newElements
  }).catch(err => {
    console.log("Error fetching and creating the orders",err)
  })
 

  const generateSingleOrder = (order) => {
    let orderId = order.id;
    let orderUser =order.username; 
    let orderTime = order.order_time;
    let orderUserPhone =order.userphone;

    let SingleOrderElement = $(`
    <div class="card" style="width: 18rem;">
    <h3>Order Number: ${orderId} </h3>
    <p>${orderTime}</p>
    <div class="card-body">
      <div>
        <h5>Order Detail:</h5>
      </div>
      <div>
        <h5>Customer</h5>
        <p>Name: ${orderUser} </p>
        <p>Number: ${orderUserPhone} </p>
      </div>
    </div>
  </div>
    `)

    return SingleOrderElement

  }
  const generateOrders = (orders) => {
      for(let order of orders) {
        let singleorder = generateSingleOrder(order)
        $("#adminOrders").append(singleorder)
      }
  }





})



// $(document).ready(function(){
// console.log("admin.js is loaded")
// const adminOrdersPage = $('#adminOrdersDiv')

//   axios.get('/admin/orders', {
//     Headers: {
//       "X-Requested-With": "XMLHttpRequest"
//     }
//   })
//   .then(res => {
//     data = res.data
//     generateAdminOrders = generateAdminOrders(data)
//     // Insert data in the admin/orders page
//     adminOrdersPage.innerHTML = generateElements
//   })

// })

