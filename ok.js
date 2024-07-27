document.getElementById('name').addEventListener('click', function() {
    let name = prompt("Please enter name");
    if (name !== null && name.trim() !== "") {
        document.getElementById('name1').innerText = `HAPPY BIRTHDAY ${name}!`;
    }

    document.getElementById('date').addEventListener('click', function() {
        let date = prompt("Please enter date/month/year");
        if (date !== null && date.trim() !== "") {
            document.getElementById('date1').innerText = `Mark this great date ${date} on calendar as its greatness is overwhelming.`;
        }
    });
});
