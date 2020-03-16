import request from 'browser-request';

request
.get("http://illya.brutgroot.com/value")
.on('response', function (response) {
  // if (response.statusCode != 200) {
  //   alert(`Ошибка ${response.status}`);
  // } else {
  //   let num = +response;
  //   let sumOfClick =  document.querySelector('.numOfClick');

  //   document.querySelector('.buttonSum').addEventListener('click', function() {
  //     num += 1;
  //     sumOfClick.textContent = num; 
  //   })
  // }
    
});

// request.post({url:"http://illya.brutgroot.com/value/" + num + "/"}, function optionalCallback(err, httpResponse, body) {
//   if (err) {
//     return console.error('upload failed:', err);
//   }
//   console.log('Upload successful!  Server responded with:', body);
// });


// let xhr = new XMLHttpRequest();
// xhr.open("GET", "http://illya.brutgroot.com/value/ ", true);
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status != 200) {
//     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     let num = +xhr.response;
//     let sumOfClick =  document.querySelector('.numOfClick');

//     document.querySelector('.buttonSum').addEventListener('click', function() {
//       num += 1;
//       sumOfClick.textContent = num;
      
//       let xhr = new XMLHttpRequest();
//       xhr.open("POST", "http://illya.brutgroot.com/value/ " + num + '/')
//       xhr.send(num);
//     });


//   }
// }
