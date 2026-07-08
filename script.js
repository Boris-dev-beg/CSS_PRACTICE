const TabCard = [
    {
        image_url: "pizza_1.jpg",
        title: "Cheese",
        description: "Get our Manhattan classic Cheese Pizza with your choice of source and crust."
    },
    {
        image_url: "pizza_2.jpg",
        title: "Pepperoni",
        description: "Get our classic Pepperoni pizza with your choice of source and crust."
    },
    {
        image_url: "pizza_3.jpg",
        title: "Vegetarian",
        description: "Tomato Sauce, Mozzarella, Green Pepper, Onions, Fresh Mushrooms, Tomatoes, and Black Olives."
    },
    {
        image_url: "pizza_4.jpg",
        title: "Rustica",
        description: "Tomato Sauce, Mozzarella, sausage, cripsy bacon, roased red peppers, and Black Olives."
    },
    {
        image_url: "pizza_5.jpg",
        title: "Delicious",
        description: "A mix of Porcini Mushrooms and Decadent Truffle Paste, Mozzarella, Fresh Mushrooms, caramelized Onions."
    },
    {
        image_url: "pizza_6.jpg",
        title: "Tomato",
        description: "The classic Marinara Sauce, Roma Tomatoes, Fresh Mozzarella, Fresh Basil, and an Extra Virgin Olive Oil drizzle."
    },
    {
        image_url: "pizza_7.jpg",
        title: "Cheese ",
        description: "Get our Manhattan classic Cheese Pizza with your choice of source and crust."
    },
]

window.addEventListener("load", start())

function start(){
    const card_container = document.getElementById("card_container")

    TabCard.forEach((card) => (
        card_container.innerHTML += `
        <div class="card">
        <!-- ? Image -->
        <div class="card-image-container">
          <img src="./images/${card.image_url}" alt=${card.title} />
        </div>
        <!-- ? Description -->
        <div class="card-description">
          <h2>${card.title} Pizza</h2>
          <p>
            ${card.description}
          </p>
        </div>
      </div>
        `
    ))
}
