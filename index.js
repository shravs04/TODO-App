console.clear();
var list = document.getElementsByClassName('todo-list-js')[0];
var enterButton = document.getElementsByClassName('enter-button')[0];
var inputText = document.getElementsByClassName('enter-text')[0];
var deleteButton = document.getElementsByClassName('close-button');

function createTodoItems(text,id){
  var itemWrapper = document.createElement('div');
  itemWrapper.classList.add('todo-items-wrapper');
  itemWrapper.id = id;
 
  var checkBox = document.createElement('div');
  checkBox.classList.add('task-checker');
  var icon = document.createElement('i');
  icon.classList.add('fas');
  icon.classList.add('fa-check');
  checkBox.appendChild(icon);
  itemWrapper.appendChild(checkBox);
  
  var task = document.createElement('div');
  task.classList.add('task-display');
  var taskPara = document.createElement('p');
  taskPara.innerText = text;
  task.appendChild(taskPara);
  var closeButton = document.createElement('div');
  closeButton.classList.add('close-button');
  var line1 = document.createElement('div');
  line1.classList.add('line-1');
  var line2 = document.createElement('div');
  line2.classList.add('line-2');
  var dustSpan = document.createElement('span');
  dustSpan.classList.add('dustbin');
  var dustbinIcon = document.createElement('i');
  dustbinIcon.classList.add('fas','fa-trash');
  dustSpan.appendChild(dustbinIcon)
  task.appendChild(dustSpan)
  closeButton.appendChild(line1);
  closeButton.appendChild(line2);
  task.appendChild(closeButton);
  itemWrapper.appendChild(task);
   closeButton.onclick=function(){
    var eleDel = document.getElementById(itemWrapper.id)
    list.removeChild(eleDel);
    window.localStorage.removeItem(itemWrapper.id)
  }
  dustSpan.onclick=function(){
    var eleDel = document.getElementById(itemWrapper.id)
    list.removeChild(eleDel);
    window.localStorage.removeItem(itemWrapper.id)
  }
  checkBox.onclick=function(){
    if(window.getComputedStyle(checkBox).color === "rgb(128, 128, 128)"){
    checkBox.style.color = "lightgreen"
    taskPara.classList.add('para-text')
    closeButton.style.display = "none"
    dustSpan.style.display = "flex"
    var lastEle = document.getElementById(itemWrapper.id);
    list.removeChild(lastEle);
    list.appendChild(lastEle);
    }
    else{
      checkBox.style.color = "grey";
      closeButton.style.display = "flex"
      taskPara.classList.remove('para-text');
      dustSpan.style.display = "none"
    }
  }
  window.localStorage;
  window.localStorage.setItem(itemWrapper.id,text);
  return itemWrapper;
}


function todoHandle(){
  if(inputText.value !== 'null' && inputText.value !== "" ){
    list.appendChild(createTodoItems(inputText.value, new Date().getTime()));
    inputText.value = "";
  }
  else alert('Enter valid input');
}

enterButton.addEventListener('click',function(){
 todoHandle();
});

inputText.addEventListener("keyup", function (e) {
	if (e.which === 13) {
		todoHandle()
	}
});

if(list.children.length === 1){
  var obj = window.localStorage;
  var arr = Object.keys(obj);
  for(var i=0; i<arr.length; i++){
    list.appendChild(createTodoItems(obj[arr[i]],arr[i],));
   console.log(arr[i],obj[arr[i]]);
  }
}