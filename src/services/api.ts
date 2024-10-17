import { IFood } from './../interfaces';
// import { faTrashRestore } from "@fortawesome/free-solid-svg-icons";
// import {  } from "././api";
const url = "././api/foods_data.json";
export const getSupply = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // localStorage.setItem("supply", JSON.stringify(data));
         return data;        
    } catch (error) {
        console.error("Error fetching cocktail by name:", error);
        throw error;
    }
};

export function sortByBestBefore(food: { best_before_date: string }[]): { best_before_date: string }[] {

    return food.sort((a, b) => {
        const dateA = new Date(a.best_before_date);
        const dateB = new Date(b.best_before_date);
        return dateA.getTime() - dateB.getTime();
    });

}

export function getExpiring(food:IFood[]): IFood[] {
    let startDate = new Date(Date.now());
    // add 1 month
    let endDate = startDate.setMonth(startDate.getMonth() + 1);
    const period = new Date(endDate);
    return food.filter(item => {
         let bestDate = new Date(item.best_before_date); // Convert item's date to a Date object
        return bestDate <= period; // Check if it's within range of one month
   });
}


export function getMissing(food:IFood[]): IFood[] {

    return food.filter(item => {
        return item.quantity == "0"; // The supply is out of stock 
   });
}
