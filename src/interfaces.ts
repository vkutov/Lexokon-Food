export interface IFood {
  id: string;
  food_item: string;
  best_before_date: string;
  quantity: string;
  energy: string;
  image: string;
}
 
export interface IFoodContext {
  food: IFood[];
  setFood: (food: IFood[]) => void;
  removeFood: (food: IFood) => void;
  addFood: (food: IFood) => void;


  // best?: IFood[];
  // setBest?: (food: IFood[]) => void;
}



//         "id":0,
//         "food_item": "Apple Juice",
//         "best_before_date": "2024-11-20",
//         "image": "Apple Juice Concentrate, Water",
//         "quantity": "1 liter",
//         "energy": "45 kcal per 100 ml"
//     },