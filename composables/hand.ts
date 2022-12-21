import _ from 'lodash'
export let hand: Card[] = reactive([]);

export const draw = () => {
  // push unshift concat hand=...hand(スプレッド)代入
	//allDeck[Math.floor(Math.random() * allDeck.length)]
  hand.push(allDeck[Math.floor(Math.random() * allDeck.length)]);
  hand.splice(14);
};

export const set = () => [...Array(7)].map(() => draw());

export const isChoose = ref(false);
// isChoose.value = !isChoose.value;

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