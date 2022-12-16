export const hand: Card[] = reactive([]);

export const draw = () => hand.push(allDeck[Math.floor(Math.random() * allDeck.length)]);

export const set = () => {
  for (let i = 0; i < 7; i++) {
    draw();
  }
};
