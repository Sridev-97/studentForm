
//Form details
var details = document.getElementById('student-details')
var storedetails = document.getElementById('tab2').querySelector('tbody')

//Form Submission
details.addEventListener('submit', function () {
    event.preventDefault();//Prevent the page refresh        

    //get inputs
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    //new table cells
    var newRow = storedetails.insertRow(storedetails.rows.length);
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = age;
    newRow.insertCell(2).innerHTML = gender;
    newRow.insertCell(3).innerHTML = course;
    newRow.insertCell(4).innerHTML = email;

    // Create the delete button and append it to the last cell
    const deleteCell = newRow.insertCell(5);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.backgroundColor = 'chocolate';
    deleteBtn.style.color = 'azure';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.addEventListener('click', function () {
        // Delete the row when the button is clicked
        storedetails.deleteRow(newRow.rowIndex - 1); // Adjust index for table body
    });
    deleteCell.appendChild(deleteBtn);

    details.reset();
})