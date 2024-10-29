import { Fruit } from "../entities/fruit-item";
import { GroupType } from "../configs/filters.config";

export interface IGroupFilter {
    [key: string]: Fruit[]
}

export function groupFruits(fruits: Fruit[], groupBy: GroupType): IGroupFilter {
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