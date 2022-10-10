// var deta = {
//   bar: "asdf",
//   menu: [
//     {
//       name: "populer",
//       manu_item: [
//         {
//           id: 121,
//           title: "hello wolrd,my name is emrul ahssan biplob",
//         },
//       ],
//     },
//   ],
// };

var data = {
  title: "title1",
  bar: "asdf",
  menu: [
    {
      name: "emrul hassan",
      innerData: [
        {
          title: "This problem is solved",
          foo: "asdf",
        },
        {
          title: "inner-title2",
          foo: "asdf",
        },
      ],
    },
  ],
};


let {bar,menu:[{innerData:[{title}]}]}=data;
console.log(title); //output will be= This problem is solved;


