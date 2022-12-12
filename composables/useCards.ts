type Details = {
  name: string;
  atk?: number;
  def?: number;
  special?: any; //!後で変更する
  hungry: number;
};
type Card = { [key: number]: Details };

export const useCards = () => {
  const atkCards: Card = {
    0: {
      name: "肉",
      atk: 0,
      hungry: 0,
    },
  };
  const defCards: Card = {
    1: {
      name: "牛乳",
      def: 0,
      hungry: 0,
    },
  };
  const supCards: Card = {
    2: {
      name: "いちご",
      special: 0,
      hungry: 0,
    },
  };

  const allCards: Card = Object.assign({}, atkCards, defCards, supCards);

  console.log(atkCards);
  console.log(defCards);
  console.log(supCards);
  console.log(allCards);

  return allCards;
};
