// CS341 Homework
// Created by Derric Smith (Some code created by Martin Cenek)

eventHandler = submission(event)
{
  /* do stuff */
}

/* Function that alerts you if "vegan" is included, says your order is placed if not. */
$function submission()
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

/* Gets id's of month menu items */
const currentMonth = document.getElementById("currentMonth");
const menu = document.getElementById("monthMenu");
const months = document.getElementsByClassName("month");

/* Open menu */
currentMonth.onclick = function ()
{
  menu.style.display = "block";
};

/* Select month */
for (let i = 0; i < months.length; i++)
{
  months[i].onclick = function ()
  {
    currentMonth.innerHTML = this.innerHTML;
    menu.style.display = "none";
  };
}