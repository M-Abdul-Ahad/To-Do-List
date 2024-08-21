let todoList=[];
function addToDo(){
   const nameElement=document.querySelector('.todoname');
   const dateElement=document.querySelector('.tododate');
   let object={
      name:nameElement.value ,
      date:dateElement.value
   };
   todoList.push(object);
   displayToDo();
  
}
function displayToDo(){
      let html='';
      
      for(let i=0;i<todoList.length;i++){
         html+=`<div class="todorow"><div class="name">${i+1}: ${todoList[i].name}</div> <div class="date">${todoList[i].date}</div> <button class="deletebutton" onclick="{
            todoList.splice(${i},1);
            displayToDo();
         }">Delete</button></div>`
      }
      document.querySelector('.listoftodo-class').innerHTML=html;
   }
   function emptyinput(){
      document.querySelector('.todoname').value='';
      document.querySelector('.tododate').value='';
   }
