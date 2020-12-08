function colorSelectOnClick(event1){
  console.dir(this);
  console.dir(this.id);
  //if ( event1 == this )   console.log('yes');
  //else console.log('no');
  // console.dir(event1);
  return true;
}
function loginFormOnSubmit(event1){
  event1.preventDefault();    
  // console.log('submit clicked'); 
  console.dir(this);
  return false;
}
function loginFormInputSubmit(event1){
  event1.preventDefault(); 
  console.log('form submit onClick disabled');
  // console.dir(this);
  console.log(this.id);
  return true;
}

function fourthChildOfFirstUlinFirstNavinContainerOnClick(){
  document.querySelector('#container > nav > ul > li:nth-child(4)').style.visibility='hidden'; 
}
function SecondArticlInJumbotronIdOnMouseOver(){
  document.querySelector('#jumbotron > article:nth-child(2) > h2').style.backgroundColor = 'blue';
}
function testFunction(){
    // console.dir(this);
}
function fullBodyOnLoad(){

  let element1 = document.querySelector("#loginForm");
  element1.addEventListener('submit', loginFormOnSubmit.bind(this));
  //element1.addEventListener('submit', loginFormOnSubmit);

  element1 = document.querySelector("#SubmitInputOfLoginForm");
  // element1.addEventListener('click', loginFormInputSubmit);
  //element1.addEventListener('click', function loginFormInputSubmit(){console.log(this.id);});
  element1.addEventListener('click', () => {console.log(this.id);});
  
  // console.dir(this);
  testFunction();

}

// console.log(document.all[10]);
