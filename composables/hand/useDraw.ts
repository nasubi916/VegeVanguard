export function useDraw(){
  const card = ref(Math.floor(Math.random() * allDeck.length));
  console.log(card.value);
};
