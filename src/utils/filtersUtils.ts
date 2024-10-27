import { GroupType } from "../configs/filters.config";
import { Fruit } from "../types/fruit-item";

export function groupFruits(fruits: Fruit[], groupBy: GroupType): { [key: string]: Fruit[] } {
    if (groupBy === GroupType.None) {
        return { [GroupType.None]: fruits };
    }
    
    const propertyKey = groupBy?.toLowerCase() as keyof Fruit;

    return fruits.reduce((groupedFruits, fruit) => {
        const key = String(fruit[propertyKey]);

        if (!groupedFruits[key]) {
            groupedFruits[key] = [];
        }

        groupedFruits[key].push(fruit);
        
        return groupedFruits;
    }, {} as { [key: string]: Fruit[] });
}