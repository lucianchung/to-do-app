
function onReady() {
  let id=0;
  const toDos=[];
  const addToDoForm = document.getElementById('addToDoForm');

  // declare deleteButton
  let deleteButton='';

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    // 3. increment the id variable
        let id=1;
        id++;
        ++id;

    if (!newToDoText.value) {return;}

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id.value
    });
    newToDoText.value = '';

    renderTheUI();

//test
console.log(toDos.id);

  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
// 4. create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
// 4b. append delete button to newLi
      newLi.appendChild(deleteButton);


    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

//4c register event listener to deleteButton
  deleteButton.addEventListener('click', function () {
    if (toDo.id === id) {
      toDoList.removeChild(newLi);
    }
    renderTheUI();
  });


  renderTheUI();
}



window.onload = function() {
  onReady();
};
