import Americano from "./assets/Type=Americano.svg"
import Expresso from "./assets/Type=Expresso.svg"
import ExpressCremoso from "./assets/Type=Expresso Cremoso.svg"
import ExpressoGelado from "./assets/Type=Café Gelado.svg"
import CaféLeite from "./assets/Type=Café com Leite.svg"
import Latte from "./assets/Type=Latte.svg"
import Cappucino from "./assets/Type=Capuccino.svg"
import Machiatto from "./assets/Type=Macchiato.svg"
import Mochaccino from "./assets/Type=Mochaccino.svg"
import ChocolateQuente from "./assets/Type=Chocolate Quente.svg"
import Cubano from "./assets/Type=Cubano.svg"
import Havaiano from "./assets/Type=Havaiano.svg"
import Arabe from "./assets/Type=Árabe.svg"
import Irlandes from "./assets/Type=Irlandês.svg"



export const coffeeList = [
  { 
    id : "1",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    categories: ["tradicional"],
    price: 9.90,
    image: Expresso
  },
  { 
    id : "2",
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    categories: ["tradicional"],
    price: 9.90,
    image: Americano
  },
  {  id : "3",
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    categories: ["tradicional"],
    price: 9.90,
    image: ExpressCremoso
  },
  {
    id : "4",
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    categories: ["tradicional", "gelado"],
    price: 9.90,
    image: ExpressoGelado
  },
  {
    id : "5",
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: CaféLeite
  },
  { 
    id : "6",
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Latte
  },
  { 
    id : "7",
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Cappucino
  },
  {
    id : "8",
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Machiatto
  },
  { 
    id : "9",
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Mochaccino
  },
  { 
    id : "10",
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    categories: ["especial", "com leite"],
    price: 9.90,
    image: ChocolateQuente
  },
  { 
    id : "11",
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    categories: ["especial", "alcoólico", "gelado"],
    price: 9.90,
    image: Cubano
  },
  { 
    id : "12",
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    categories: ["especial"],
    price: 9.90,
    image: Havaiano
  },
  { 
    id : "13",
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["especial"],
    price: 9.90,
    image: Arabe
  },
  { 
    id : "14",
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    categories: ["especial", "alcoólico"],
    price: 9.90,
    image: Irlandes
  }
]
