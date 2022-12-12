export const useDeck = () => {
  const atkDeck: Deck = useAtk();
  const defDeck: Deck = useDef();
  const supDeck: Deck = useSup();

  const allDeck: Deck = Object.assign({}, atkDeck, defDeck, supDeck);

  console.log(atkDeck);
  console.log(defDeck);
  console.log(supDeck);
  console.log(allDeck);

  return allDeck;
};
