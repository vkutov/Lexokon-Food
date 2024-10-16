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

