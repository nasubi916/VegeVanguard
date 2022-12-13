export function Hello(name: string): string {
  return name + " hello!";
}
//!↓↑どちらも同じ出力結果になる
/**
 * export function XX(){
 * 
 * }
 * export const XX =()=>{
 * 
 * }
 */
export const Night = (name: string): string => {
  return name + " Good night!";
};