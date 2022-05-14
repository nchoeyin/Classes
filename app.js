// class Color {
// 	constructor(r,g,b){
// 		console.log('Inside the constructor');
// 		console.log(r,g,b);
// 	}
// }
// // Output:
// //const white = new Color(255,255,255);
// //app.js:3 Inside the constructor
// //app.js:4 255 255 255

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class Color {
// 	constructor(r,g,b,name)
// 	{
// 		this.r=r;
// 		this.g=g;
// 		this.b=b;
// 		this.name=name;
// 	}
// }

/* output
// const white = new Color(255,255,225,'white');
// console.log(white);
//Output : Color {r: 255, g: 255, b: 225, name: 'white'}
*/

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// class Color {
// 	constructor(r,g,b,name)
// 		{
// 			this.r=r;
// 			this.g=g;
// 			this.b=b;
// 			this.name=name;
// 		}
// 	greet(){
// 		console.log(`Hello from ${this.name}`);
// 	}
// 	}
// const w1 = new Color(255,0,0,'w1');

// // Output : 
// // > w1
// //   Color {r: 255, g: 0, b: 0, name: 'w1'}
// // > w1.greet();
// //   app.js:38 Hello from w1
// //   undefined

//Output2:
// > const w2 = new Color(200,200,200,'twohunnid');
//   undefined
// > w2
//   Color {r: 200, g: 200, b: 200, name: 'twohunnid'}
// > w2.greet();
//   app.js:39 Hello from twohunnid
//   undefined

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// class Color {
// 	constructor(r,g,b,name)
// 		{
// 			this.r=r;
// 			this.g=g;
// 			this.b=b;
// 			this.name=name;
// 		}
// 	greet(){
// 		console.log(`Hello from ${this.name}`);
// 	}
// 	rgb()
// 	{
// 		const {r,g,b}=this;
// 		return `${r}, ${g}, ${b}`;
// 	}
// 	}
// const w1 = new Color(255,0,0,'w1');
// const red = new Color(255,0,0,'red');
// const green = new Color(0,255,0,'green');

//Output:
/*
> w1
  Color {r: 255, g: 0, b: 0, name: 'w1'}
> w1.greet();
  app.js:71 Hello from w1
  undefined
> w1.rgb;
  ƒ rgb()
	{
		const {r,g,b}=this;
		return `${r}, ${g}, ${b}`;
	}
> w1.rgb();
  '255, 0, 0'
*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Color {
	constructor(r,g,b,name)
		{
			this.r=r;
			this.g=g;
			this.b=b;
			this.name=name;
		}
	greet(){
		console.log(`Hello from ${this.name}`);
	}
	innerRGB()
	{
		const {r,g,b}=this;
		return `${r},${g},${b}`;
	} 
	rgb()
	{
		return `${this.innerRGB()}`;
	}
	rgba(a=0.7)
	{
		return `rgba(${this.innerRGB()},${a})` 
	}
	}
const red = new Color(255,0,0,'w1');
//Output:
// > w1
//   Color {r: 255, g: 0, b: 0, name: 'w1'}
// > w1.rgb();
//   '255,0,0'
// > w1.rgba();
//   'rgba(255,0,0,0.7)'

//Output 2:
// document.body.style.backgroundColor = red.rgb();
// '255,0,0'
// document.body.style.backgroundColor = red.rgba();
// 'rgba(255,0,0,0.7)'
// document.body.style.backgroundColor = red.rgba(0.4);
// 'rgba(255,0,0,0.4)'
// document.body.style.backgroundColor = red.rgba(0.1);
// 'rgba(255,0,0,0.1)'
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------