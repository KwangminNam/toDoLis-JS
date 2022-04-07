window.addEventListener('load',()=>{
  const form = document.getElementById('new-task-form');
  const typeInput = document.getElementById('new-task-input');


  form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const wholeWrap = document.getElementById('tasks');
    const inputVal = typeInput.value;

    inputVal ? null : alert("hi")

    // <div class = task>
    const resultWrap = document.createElement('div');
    resultWrap.classList.add('task');

    // <div class = content>
    const resultContent = document.createElement('div');
    resultContent.classList.add('content');

    const resultContentInput = document.createElement('input');
    resultContentInput.classList.add('text');
    resultContentInput.type="text";
    resultContentInput.setAttribute('readonly','readonly')
    // <div class = action>
    const actionDiv = document.createElement('div');
    actionDiv.classList.add('actions');

    const edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerText="edit";

    const del = document.createElement('button');
    del.classList.add('delete');
    del.innerText="delete";
    resultContentInput.value = inputVal;

    wholeWrap.appendChild(resultWrap);
    resultWrap.appendChild(resultContent);
    resultContent.appendChild(resultContentInput);
    actionDiv.appendChild(edit);
    actionDiv.appendChild(del);
    resultWrap.appendChild(actionDiv);

    edit.addEventListener('click',()=>{
      if(edit.innerText.toLowerCase() == 'edit'){
        edit.innerText="save";
        resultContentInput.removeAttribute('readonly');

      }else{
        edit.innerText="Edit";
        resultContentInput.setAttribute('readonly','readonly');
      }
    })
    
    del.addEventListener('click',()=>{
      
      const chk = confirm('Do you want to delete your list?');

      if(chk===true){
        resultWrap.remove();
      }

      // chk ? true : resultWrap.remove();
    })

  })
})