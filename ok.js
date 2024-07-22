document.getElementById('name').addEventListener('click', function() {
    let name = prompt("Please enter your name");
    if (name !== null) {
        document.getElementById('name1').innerText = `HAPPY BIRTHDAY ${name}!`;
    }
});

document.getElementById('date').addEventListener('click', function() {
    let date = prompt("Please enter date/month/year");
    if (date !== null) {
        document.getElementById('date1').innerText = `Mark this great date ${date} on your calendar as its greatness is overwhelming.`;
    }
});
