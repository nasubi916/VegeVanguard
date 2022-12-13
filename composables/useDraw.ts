export function useDraw() {
  hand.push(allDeck[Math.floor(Math.random() * allDeck.length)]);
}
export function useSet(){
	for(let i=0;i<7;i++){
		useDraw();
	}
}