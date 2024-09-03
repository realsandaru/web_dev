const icecreamArray = [
    "Vanilla",
    "Chocolate",
    "Cookies 'n Cream",
    "Strawberry",
    "Chocolate Chip",
    "Mint Chocolate Chip",
    "Chocolate Chip Cookie Dough",
    "Butter Pecan",
    "Birthday Cake",
    "Moose Tracks"
   ];
   
function buildIcecreamList(){
    const div = document.getElementById('top_icecreams');
    div.innerHTML = '';

    const list = document.createElement('ol');
    icecreamArray.forEach(item => {
    const sub_list = document.createElement('li');
    sub_list.textContent = item;
    list.appendChild(sub_list);
    });
    div.appendChild(list);
}