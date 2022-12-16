export const hand: Card[] = reactive([]);

export const useDraw = () => hand.push(allDeck[Math.floor(Math.random() * allDeck.length)]);

export const useSet = () => {
  for (let i = 0; i < 7; i++) {
    useDraw();
  }
};
