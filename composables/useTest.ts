export const useTest = () => {
  return useState("hello", ():string => 'bye');
};
