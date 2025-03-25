function showOptions() {
    let choice = prompt("Choose an option: \n1. Say Hello \n2. Show Date \n3. Exit");

    if (choice === "1") {
        document.getElementById("result").innerText = "Hello! 😊";
    } else if (choice === "2") {
        document.getElementById("result").innerText = "Today's date is: " + new Date().toDateString();
    } else {
        document.getElementById("result").innerText = "Goodbye! 👋";
    }
}