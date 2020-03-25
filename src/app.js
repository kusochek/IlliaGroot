import { getNumber, setNumber} from './fetch.js';
import { getValueDomSetter, clickListener} from './counterView';

(async () => {
  let value = await getNumber();
  let domSetter = await getValueDomSetter();
  domSetter(value);

  let num = +value;

  async function setNewNumberOnServer() {
    num += 1;
    domSetter(num);
      try {
        const data = await setNumber(num);
  
        console.log('Request succeeded with JSON response', data);  
      } catch (err) {
        console.log(err);
      }
  };
  let vvv = await clickListener(setNewNumberOnServer);
  
  // clickListener(setNewNumberOnServer);
})()

// (async () => {
//   let urls = ['http://illya.brutgroot.com/value', 
//               'http://illya.brutgroot.com/value', 
//               'http://illya.brutgroot.com/value',
//               'http://illya.brutgroot.com/value',
//               'http://illya.brutgroot.com/value'];


//     let values = await Promise.all(
//       urls.map(async url => {
//         let value = await fetch(url)
//         return value.text()
//       })
//     )
//     console.log(values)

//     let num = +values.shift();
//     const allValuesEqual = values.every( value => +value === num);

//     if(!allValuesEqual) {
//       return;
//     }

//     let sumOfClick =  document.querySelector('.numOfClick');
//     sumOfClick.textContent = num;

//     document.querySelector('.buttonSum').addEventListener('click', async function() {
//       num += 1;
//       sumOfClick.textContent = num;
      
//       try {
//         const data = await fetch(`http://illya.brutgroot.com/value/${num}/`, {
//           method: "POST"
//         });
  
//         console.log('Request succeeded with JSON response', data);  
//       } catch (err) {
//         console.log(err);
//       }
//     });
// })()

// import getNumber from './fetch.js';

// (async () => {
//   let urls = ['http://illya.brutgroot.com/value', 
//               'http://illya.brutgroot.com/value', 
//               'http://illya.brutgroot.com/value',
//               'http://illya.brutgroot.com/value',
//               'http://illya.brutgroot.com/value'];

//   // const requests = Promise.all(urls.map(
//   //   async url => {
//   //     const r = await fetch(url);
//   //     return r.text();
//   //   }
//   // ));



//     const values = await requests;

//     let num = +values.shift();
//     const allValuesEqual = values.every( value => +value === num);

//     if(!allValuesEqual) {
//       return;
//     }

//     let sumOfClick =  document.querySelector('.numOfClick');
//     sumOfClick.textContent = num;

//     document.querySelector('.buttonSum').addEventListener('click', async function() {
//       num += 1;
//       sumOfClick.textContent = num;
      
//       try {
//         const data = await fetch(`http://illya.brutgroot.com/value/${num}/`, {
//           method: "POST"
//         });
  
//         console.log('Request succeeded with JSON response', data);  
//       } catch (err) {
//         console.log(err);
//       }
//     });
// })()

  // fetch(url)
  // .then(response => response.text())
  // .then(value => {
  //   let sumOfClick =  document.querySelector('.numOfClick');
  //   let num = +value;

  //   sumOfClick.textContent = num;


  //     document.querySelector('.buttonSum').addEventListener('click', function() {
  //       num += 1;
  //       sumOfClick.textContent = num;
        
  //       fetch("http://illya.brutgroot.com/value/ " + num + '/', {
  //         method: "POST"
  //       }) 
  //       .then(function (data) {  
  //         console.log('Request succeeded with JSON response', data);  
  //       })  
  //       .catch(function (error) {  
  //         console.log('Request failed', error);  
  //       });
  //     })
  // })



// request({method:'GET', url:'http://illya.brutgroot.com/value', json:true}, on_response);
 
// function on_response(er, response) {
//   if(er) {
//     throw er;
//   } else {
//     let num = +response.body;
//     let sumOfClick =  document.querySelector('.numOfClick');

//     document.querySelector('.buttonSum').addEventListener('click', function() {
//       num += 1;
//       sumOfClick.textContent = num; 

//       request.post({url:"http://illya.brutgroot.com/value/ " + num + '/'}, function optionalCallback(err, body) {
//         if (err) {
//           return console.error('upload failed:', err);
//         }
//         console.log('Upload successful!  Server responded with:', body);
//       });
//     })
//   }
// };