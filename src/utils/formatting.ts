export const decapitalizeFirstChart = (value: string): string => {  
  return value.charAt(0)?.toLowerCase() + value.slice(1);
}
