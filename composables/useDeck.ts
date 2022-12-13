export const useAtk = () => {
  const atkDeck: Card[] = [
    {
      name: "肉",
      atk: 0,
      hungry: 0,
    },
  ];
  return atkDeck;
};

export const useDef = () => {
  const defDeck: Card[] = [
    {
      name: "牛乳",
      def: 0,
      hungry: 0,
    },
  ];
  return defDeck;
};

export const useSup = () => {
  const supDeck: Card[] = [
    {
      name: "いちご",
      special: 0,
      hungry: 0,
    },
  ];
  return supDeck;
};

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
