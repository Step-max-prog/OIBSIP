function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.className = "task-text";
    taskSpan.textContent = taskText;

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete-btn";

    completeButton.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");

        if (taskSpan.classList.contains("completed")) {
            completeButton.textContent = "Undo";
        } else {
            completeButton.textContent = "Complete";
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(buttonContainer);

    taskList.appendChild(listItem);

    taskInput.value = "";
    taskInput.focus();
}

document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});