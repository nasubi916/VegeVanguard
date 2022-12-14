export const atkDeck: Card[] = [
  {
    name: "肉",
    atk: 0,
    hungry: 0,
    bad: 8,
  },
];

export const defDeck: Card[] = [
  {
    name: "牛乳",
    def: 0,
    hungry: 0,
    bad: 8,
  },
];

export const supDeck: Card[] = [
  {
    name: "いちご",
    special: () => draw(), //?関数の呼び出し とりあえずカード一枚引く
    hungry: 0,
    bad: 8,
  },
];

export const allDeck: Card[] = atkDeck.concat(defDeck, supDeck);
