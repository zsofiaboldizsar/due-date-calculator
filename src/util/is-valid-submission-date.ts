export const isValidSumbissionDate = (date: Date): boolean => {
 return [1, 2, 3, 4, 5].includes(date.getDay()) && date.getHours() >= 9 && date.getHours() < 17;
}