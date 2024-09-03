let count = 0
function remove_colour(){
    const content = document.getElementById('content');
    content.style.backgroundColor = 'white';
}
function add_colour(){
    const content = document.getElementById('content');
    content.style.backgroundColor = 'Violet';
}
function show_date_time(){
    count += 1;
    const btn = document.getElementById('btn-start');
    const content = document.getElementById('content');
    if(count>5){
        content.style.display = 'none';
        btn.value = 'Click to Re-start';
        count = 0 ;
    } else {
        content.style.display = 'block';
        btn.value = `Try again... pressed ${count} times`;

        const now = new Date();
        let date = now.toDateString();
        let time = now.toTimeString().split(' ')[0];

        content.innerHTML = '';
        content.innerHTML = `
            <h3>Well done, you clicked the button!</h3>
            <ul>
                <li>At time:<i> ${time}</i></li>
                <li>On date:<i> ${date}</i></li>
            </ul>
            <h5>Move your cursor/mouse over this div element to change the background colour to violet</h5>
        `;
    }
}