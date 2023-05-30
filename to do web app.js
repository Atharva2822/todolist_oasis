// Add task
document.querySelector("#add").addEventListener("click", function() {
  var newTask = document.createElement("li");
  var input = document.createElement("input");
  var button = document.createElement("button");

  input.type = "text";
  input.placeholder = "Enter task";
  button.textContent = "Delete";
  button.classList.add("delete");

  newTask.appendChild(input);
  newTask.appendChild(button);

  document.querySelector("#tasks").appendChild(newTask);
});

// Delete task
document.querySelectorAll(".delete").forEach(function(button) {
  button.addEventListener("click", function() {
    var li = this.parentElement;
    li.remove();
  });
});

// Clear all tasks
document.querySelector("#clear").addEventListener("click", function() {
  document.querySelector("#tasks").innerHTML = "";
});
