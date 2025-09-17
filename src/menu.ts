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
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    categories: ["tradicional"],
    price: 9.90,
    image: Expresso
  },
  {
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    categories: ["tradicional"],
    price: 9.90,
    image: Americano
  },
  {
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    categories: ["tradicional"],
    price: 9.90,
    image: ExpressCremoso
  },
  {
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    categories: ["tradicional", "gelado"],
    price: 9.90,
    image: ExpressoGelado
  },
  {
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: CaféLeite
  },
  {
    name: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Latte
  },
  {
    name: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Cappucino
  },
  {
    name: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Machiatto
  },
  {
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    categories: ["tradicional", "com leite"],
    price: 9.90,
    image: Mochaccino
  },
  {
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    categories: ["especial", "com leite"],
    price: 9.90,
    image: ChocolateQuente
  },
  {
    name: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    categories: ["especial", "alcoólico", "gelado"],
    price: 9.90,
    image: Cubano
  },
  {
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    categories: ["especial"],
    price: 9.90,
    image: Havaiano
  },
  {
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    categories: ["especial"],
    price: 9.90,
    image: Arabe
  },
  {
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    categories: ["especial", "alcoólico"],
    price: 9.90,
    image: Irlandes
  }
]
