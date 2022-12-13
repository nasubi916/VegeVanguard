export const atkDeck: Card[] = [
    {
      name: "肉",
      atk: 0,
      hungry: 0,
    },
  ];

export const defDeck: Card[] = [
    {
      name: "牛乳",
      def: 0,
      hungry: 0,
    },
  ];

export const supDeck: Card[] = [
    {
      name: "いちご",
      special: 0,
      hungry: 0,
    },
  ];

export const allDeck: Card[] = atkDeck.concat(defDeck, supDeck);