export const useDeck = () => {
  const atkDeck: Card[] = useAtk();
  const defDeck: Card[] = useDef();
  const supDeck: Card[] = useSup();
  const allDeck: Card[] = atkDeck.concat(defDeck, supDeck);

  // console.log(atkDeck);
  // console.log(defDeck);
  // console.log(supDeck);
  // console.log(allDeck);

  return allDeck;
};
