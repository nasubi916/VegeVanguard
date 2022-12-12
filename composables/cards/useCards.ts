export const useCards = () => {
  const atkCards: Card = useAtk();
  const defCards: Card = useDef();
  const supCards: Card = useSup();

  const allCards: Card = Object.assign({}, atkCards, defCards, supCards);

  console.log(atkCards);
  console.log(defCards);
  console.log(supCards);
  console.log(allCards);

  return allCards;
};
