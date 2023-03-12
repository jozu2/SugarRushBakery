import cakes from "./images/homecake.jpg";
import weddingCake from "./images/homecakewedding.jpg";
import birthdayCake from "./images/homebirthday.jpg";
import custom1 from "./images/customOrder.png";
import custom2 from "./images/custom2.png";
import customOrder3 from "./images/customOrder3.png";
export const images = [
  {
    mainText: "Welcome to Sugar Rush Bakery!",
    description: "",
    // "At Sugar Rush Bakery, we believe that every occasion deserves a delicious cake. That's why we've dedicated ourselves to baking the best cakes in town. From classic flavors to unique creations, we have something for everyone.",
    img: cakes,
    btnText: "Shop Now",
    customImage: custom1,
    bgcustomColor: "rgb(97, 45, 45, .85)",
  },
  {
    mainText: `Say "I Do" to Perfection`,
    description:
      "Make your wedding day unforgettable with a stunning custom wedding cake from Sugar Rush Bakery. Our talented bakers will work with you to create the perfect cake for your special day. From classic flavors to unique creations, we have something for everyone.",
    img: weddingCake,
    btnText: "Order Now",
    customImage: custom2,
    bgcustomColor: "rgb(45, 87, 97, .85)",
  },
  {
    mainText: "Celebrate with Sugar Rush Bakery",
    description:
      "Make your birthday celebration extra special with a custom birthday cake from Sugar Rush Bakery. Choose from a wide range of flavors, fillings, and frostings to create the perfect cake for your celebration. We also offer a variety of design options, including custom shapes, colors, and edible images.",
    img: birthdayCake,
    btnText: "Order Now",
    customImage: customOrder3,
    bgcustomColor: "rgb(97, 45, 94, .85)",
  },
];
