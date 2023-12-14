function onDragOver(event) {
    event.preventDefault();
    event.target.classList.add("active");
  }
  
  function onDragLeave(event) {
    event.target.classList.remove("active");
  }
  
  function onDrop(event) {
    event.preventDefault();
    event.target.classList.remove("active");
  
    const files = event.dataTransfer.files;

    for (const file of files) {
      localStorage.setItem(file.name, file);
    }
  
    for (const file of files) {
      const li = document.createElement("li");
      const name = document.createElement("p");
      const type = document.createElement("p");
      const size = document.createElement("p");
  
      name.textContent = file.name;
      type.textContent = file.type;
      size.textContent = file.size / 1024 / 1024 + " МБ";
  
      li.appendChild(name);
      li.appendChild(type);
      li.appendChild(size);
  
      document.querySelector(".files").appendChild(li);
    }
  }
  

  function onChange(event) {
    const files = event.target.files;
    for (const file of files) {
      localStorage.setItem(file.name, file);
    }
  

    for (const file of files) {
      const li = document.createElement("li");
      const name = document.createElement("p");
      const type = document.createElement("p");
      const size = document.createElement("p");
  
      name.textContent = file.name;
      type.textContent = file.type;
      size.textContent = file.size / 1024 / 1024 + " МБ";
  
      li.appendChild(name);
      li.appendChild(type);
      li.appendChild(size);
  
      document.querySelector(".files").appendChild(li);
    }
  }
  

  document.querySelector(".drop-area").addEventListener("dragover", onDragOver);
  document.querySelector(".drop-area").addEventListener("dragleave", onDragLeave);
  document.querySelector(".drop-area").addEventListener("drop", onDrop);
  document.querySelector("input[type='file']").addEventListener("change", onChange);


function onFilterClick(event) {
    document.querySelector(".files").innerHTML = "";
    const files = Object.values(localStorage);
    for (const file of files) {
      if (file.size / 1024 / 1024 >= parseFloat(event.target.previousSibling.value)) {
        const li = document.createElement("li");
        const name = document.createElement("p");
        const type = document.createElement("p");
        const size = document.createElement("p");
        name.textContent = file.name;
        type.textContent = file.type;
        size.textContent = file.size / 1024 / 1024 + " МБ";
        li.appendChild(name);
        li.appendChild(type);
        li.appendChild(size);
        document.querySelector(".files").appendChild(li);
      }
    }
  }
  
  document.querySelector(".filter button").addEventListener("click", onFilterClick);
function onTypeChange(event) {
    document.querySelector(".files").innerHTML = "";
    const files = Object.values(localStorage);
  
    for (const file of files) {
      if (file.type === event.target.value) {
        const li = document.createElement("li");
        const name = document.createElement("p");
        const type = document.createElement("p");
        const size = document.createElement("p");
        name.textContent = file.name;
        type.textContent = file.type;
        size.textContent = file.size / 1024 / 1024 + " МБ";
        li.appendChild(name);
        li.appendChild(type);
        li.appendChild(size);
  
        document.querySelector(".files").appendChild(li);
      }
    }
  }
  
  document.querySelector(".filter select").addEventListener("change", onTypeChange);