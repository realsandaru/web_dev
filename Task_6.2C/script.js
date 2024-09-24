function renderStars(rating) {
    let stars = ''; 
    for (let i = 0; i < 5; i++) {  
        if (i < rating) {
            stars += '&#x2605;';  
        } else {
            stars += '&#x2606;'; 
        }
    }
    return stars; 
}

function submitRating() {
    const nameInput = document.getElementById('nameInput').value.trim();  
    const ratingInput = parseInt(document.getElementById('ratingInput').value, 10); 

    if (nameInput === '') {
        alert('Please enter your name.');  
        return;  
    }

    if (ratingInput < 0 || ratingInput > 5) {
        alert('Please enter a rating between 0 and 5.');  
        return;  
    }


    const now = new Date();
    const dateString = now.toLocaleDateString('en-GB');
    const timeString = now.toLocaleTimeString('en-GB'); 


    const ratingList = document.getElementById('ratingsList');
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `${dateString} ${timeString}, ${nameInput} gave a rating of ${renderStars(ratingInput)}`;
    ratingList.appendChild(newListItem);


    document.getElementById('last-updated-date').innerText = dateString;
    document.getElementById('last-updated-time').innerText = timeString;
    document.getElementById('nameInput').value = '';
    document.getElementById('ratingInput').value = '';
}