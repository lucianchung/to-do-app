
function onReady() {
  const toDos=[];
  const addToDoForm = document.getElementById('addToDoForm');

// 1. decare // id
  let id=0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
    // 3. increment the id variable
      id: id++
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
// 4. create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
// 4b. append delete button to newLi
      newLi.appendChild(deleteButton);

//4c register event listener to deleteButton
      deleteButton.addEventListener ("click", event =>{
        event.preventDefault();

        let todos = toDos.filter( t => t.id !== id);

        // function removeItem() {
        //   for (var i = 0; i < toDos.length; i++ ){
        //        if( toDo.id < i && id == i){
        //          return true;
        //        }else{
        //          toDos.splice(this.id);
        //
        //        }
        //     }
        // }



        // toDos.filter(todos);
        renderTheUI();
      });


    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}



window.onload = function() {
  onReady();
};
