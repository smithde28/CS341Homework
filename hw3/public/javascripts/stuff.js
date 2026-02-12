// CS341 Homework
// Created by Derric Smith (Some code created by Martin Cenek)

/* Function that alerts you if "vegan" is included, says your order is placed if not. */
function submission()
{
  const notes = document.getElementById("notes").value.trim().toLowerCase();

  if (notes.includes("vegan"))
  {
    alert("Warning: These cheesecakes contain dairy, proceed with caution!");
  }
  else
  {
    /* Gets the id's of each element */
    const element1 = document.getElementById("notes"); 
    const element2 = document.getElementById("orderForm"); 
    const element3 = document.getElementById("amount"); 
    const element4 = document.getElementById("orderButton"); 
    
    /* Removes elements */
    element1.remove(); 
    element2.remove();  
    element3.remove(); 
    element4.remove();

    alert("Your order has been placed!");
  }

  return false;
}

/* Function that updates the list of orders */
function updateOrders(orders)
{
  let output = '<ul>';

  for (let i = 0; i < orders.length; i++)
  {
    output += `<li>${orders[i].quantity} ${orders[i].topping}</li>`;
  }

  output += '</ul>';

  document.getElementById('orderList').innerHTML = output;
}

/* Wrapped in window.onload to fix month selection issue (not sure if this is actually needed, will test later) */
window.onload = function () {

  const currentMonth = document.getElementById("currentMonth");
  const menu = document.getElementById("monthMenu");
  const months = document.getElementsByClassName("month");

  currentMonth.onclick = function () {
    menu.style.display = "block";
  };

  // Changes the month selected
  for (let i = 0; i < months.length; i++) {
    months[i].onclick = function () {
      currentMonth.innerHTML = this.innerHTML;
      menu.style.display = "none";

      // Updates the orders
      $.post('/orders', function (data) {
        updateOrders(data);
      });
    };
  }
};
