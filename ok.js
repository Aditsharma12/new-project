document.getElementById('name').addEventListener('click', function() {
    let name = prompt("Please enter name");
    document.getElementById('date').addEventListener('click', function() {
        let date = prompt("Please enter date/month/year");
        if (date !== null) {
            document.getElementById('date1').innerText = mark this great date ${date} on calender\n as its greatness is overwhelming;
        }
    if (name !== null) {
        document.getElementById('name1').innerText = HAPPY BIRTHDAY ${name}!;
    }
});
});
