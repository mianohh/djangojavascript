let heading = document.getElementById("heading");
heading.style.color = "blue"; // Changing the text color of the heading to blue
heading.style.fontSize = "24px"; // Changing the font size of the heading to 24px



let message = document.getElementById("message");
message.style.color = "green"; // Changing the text color of the message to green
message.style.fontSize = "18px"; // Changing the font size of the message to 18px



let anotherParagraph = document.querySelector("#another_paragraph");
anotherParagraph.style.color = "red"; // Changing the text color of the paragraph to red
anotherParagraph.style.fontSize = "20px"; // Changing the font size of the paragraph to 20px



let students=["Alex", "Mercy", "John", "Jane", "David"];


let studentList = document.getElementById("studentlist");
for (let name of students) {
    let listItem = document.createElement("li"); // Creating a new list item element
    listItem.textContent = name; // Setting the text content of the list item to the student's name
    studentList.appendChild(listItem); // Appending the list item to the student list
}

function handleClick() {
    document.getElementById("heading").textContent = "This is javascript events!"; // Changing the text content of the heading when the button is clicked
}

let button = document.getElementById("myButton");
button.addEventListener("click", 
    function() {
        alert("Button clicked!"); // Displaying an alert when the button is clicked
    }); // Adding a click event listener to the button that calls the handleClick function when clicked