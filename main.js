const burgerBtn = document.querySelector(".burger-btn");
const navToggle = document.querySelector(".nav-wrapper");
const profileImg = document.querySelector(".profile-img");

burgerBtn.addEventListener("click", function () {
  console.log("clicked");
  navToggle.classList.toggle("nav-wrapper-active");
});

//js algorithms --> omw to advanced
// function getIndexToIns(arr, num) {
//   console.log(arr.filter((a) => num > a).length);
// }

// getIndexToIns([30, 40, 60, 70], 50);

//new challenge
//mutations
//if the first string cotains all of the letters of the 2nd one return true
// function mutation(arr) {
//   //all to lowercase
//   const lowerCase = arr.map((str) => {
//     return str.toLowerCase();
//   });
//   console.log(lowerCase);
//   lowerCase.reduce((acc, cur, i) => {
//     if (cur[i] === acc[i]) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//     // console.log(acc[0], cur[0]);
//   });
//   //loop over [1] and compare letters to [0]
//   // so if [0] contains all letters of [1] return true
// }

// mutation(["HELLO", "Hey"]);
// mutation(["voodoo", "no"]);
// mutation(["no", "yes"]);
// mutation(["jay", "jad"]);
// mutation(["byej", "bzzz"]);

// function chunkArrayInGroups(arr, size) {
//   // const slice = arr.slice(size);
//   // const splice = arr.splice(size);
//   // let newarr = [];
//   // for (let i = 0; i < size; i++) {
//   //   newarr.push(arr[i]);
//   // }
//   // console.log([newarr, slice]);
//   // console.log(slice, splice);
//   // const output = arr.map(function (a, i) {
//   //   console.log(a, i);
//   // });
// }
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
// chunkArrayInGroups(["a", "b", "c", "d"], 2);
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// // chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

const projectsBtn = document.querySelector(".project-btn");

//smooth scrolling
// projectsBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   const id = this.getAttribute("href");

//   //scroll to 'id' -> use queryselector
//   document.querySelector(id).scrollIntoView({ behavior: "smooth" });
// });
