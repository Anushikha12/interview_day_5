//1.)Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.
    // var btn=document.getElementById("btn");
    // btn.addEventListener('click',function(){
    //     var h1=document.createElement("h1");
    //     h1.innerText="MERN STACK";
    //     btn.appendChild(h1);
    // })

//2.)Write code to get 1st H1 element from a webpage using DOM.
    // var h1=document.getElementsByTagName("h1");
    // h1[0].style.color="pink";

//3.)Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

    function showTime(){
        let date=new Date();
        let hour=date.getHours();
        let min=date.getMinutes();
        let sec=date.getSeconds();
        let session="AM";

         if(hour==0){
            hour=12;
             session="AM";
        }
        if(hour>12){
            hour=hour-12;
            session="PM";
        }
        hour=hour<10?"0"+hour:hour;
        min=min<10?"0"+min:min;
        sec=sec<10?"0"+sec:sec;

        var time=hour+" : "+min+" : "+sec+" : "+session;
        var clock=document.getElementById("clock");
        clock.innerText=time;

       setTimeout(showTime,1000);
    }
    showTime();
    
//4.)Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
    // var btn1=document.getElementById("btn1");
    // var h1=document.getElementsByTagName("h1");
    // btn1.addEventListener('click',function(){
    //     h1[0].innerText="WELCOME TO ELEVATION ACADEMY!";
    // })

//5.)Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.
    var btn2=document.getElementById("btn2");
    var h1=document.getElementsByTagName("h1");
    btn2.addEventListener('click',function(){
        h1[0].style.display="none";
    })

//6.)Given an array of 0's and 1's find out number of 0's.
    let arr=[0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1];
    let count=0;
    for(let element of arr){
        if(element==0){
            count+=1;
        }
    }
    console.log(count);

//7.)Given an array find out total no. of odd and even nos.
    let arr1=[1,2,3,4,5,6,7,8,9,10,34,56,79,84,23,73,85,90,100];
    let even_count=0;
    let odd_count=0;
    for(let element of arr1){
        if((element%2)==0){
            even_count+=1;
        }
        else if((element%2)!==0){
            odd_count+=1;
        }
    }
    console.log("even count is "+`${even_count}`);
    console.log("odd count is "+`${odd_count}`);

//8.)Given a string find out number of vowels .
    // let str="anushikha Bansal";
    // let vowel_count=0;
    // for(let i of str){
    //     if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
    //         vowel_count+=1;
    //     }
    // }
    // console.log(vowel_count);

    function str(S){
        let vowel_count=S.match(/[aeiou]/gi);
        console.log(vowel_count.length);
    }
    str("aeiouAEIOU");

//9.)Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

let obj1 = {
    name: "anushikha",
    arr1: [1,2,3,4,5],
  };
  let obj2 = {
    name: "Anushikha",
    arr2: [1,2,3,4,5,6,7,8,9],
  };
  
  function check(obj1, obj2) {
    let x = obj1.arr1.length;
    let length = 0;
    for (let i in obj1.arr1) {
      if (obj1.arr1[i] === obj2.arr2[i]) {
        length++;
      }
    }
    if (length === x) {
      console.log("Equal");
    } else {
      console.log("Not Equal");
    }
  }
  check(obj1, obj2);
    

