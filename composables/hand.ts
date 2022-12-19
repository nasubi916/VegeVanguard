export const hand: Card[] = reactive([]);

export const draw = () => {
  hand.push(allDeck[Math.floor(Math.random() * allDeck.length)]);
  hand.splice(14);
};

export const set = () => {
  for (let i = 0; i < 7; i++) draw();
};

export const isChoose = ref(false);
// isChoose.value = !isChoose.value;
type change={
	//!改善予定
  [index:number]:void;
}
export const change= {
	"1":function(index:number){hand.splice(index);},
	"2":function(index:number){hand.splice(index);},
	"3":function(index:number){hand.splice(index);},
	"4":function(index:number){hand.splice(index);},
	"5":function(index:number){hand.splice(index);},
	"6":function(index:number){hand.splice(index);},
	"7":function(index:number){hand.splice(index);},
	"8":function(index:number){hand.splice(index);},
	"9":function(index:number){hand.splice(index);},
	"10":function(index:number){hand.splice(index);},
	"11":function(index:number){hand.splice(index);},
	"12":function(index:number){hand.splice(index);},
	"13":function(index:number){hand.splice(index);},
	"14":function(index:number){hand.splice(index);},
};