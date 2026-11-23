let students = ["Alex", "Mercy", "John", "Jane", "David"];
console.log("Students: " + students); // Displaying the array of students
console.log("First student: " + students[0]); // Accessing the first student
console.log("Last student: " + students[students.length - 1]); // Accessing the last student

students.push("Sarah"); // Adding a new student to the array
console.log("Updated Students: " + students); // Displaying the updated array of students

students.pop(); // Removing the last student from the array
console.log("After removing last student: " + students); // Displaying the array after removal

students.shift(); // Removing the first student from the array
console.log("After removing first student: " + students); // Displaying the array after removal

students.unshift("Michael"); // Adding a new student at the beginning of the array
console.log("After adding a new first student: " + students); // Displaying the updated array of students   