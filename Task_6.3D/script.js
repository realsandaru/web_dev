const icecreamSalesListJSON = {
    icecreams: [
      { name: "Vanilla", bestState: 'VIC', totalSold: 78923 },
      { name: "Chocolate", bestState: 'SA', totalSold: 23001 },
      { name: "Cookies 'n Cream", bestState: 'NT', totalSold: 43010 },
      { name: "Strawberry", bestState: 'VIC', totalSold: 29221 },
      { name: "Chocolate Chip", bestState: 'WA', totalSold: 62133 },
      { name: "Mint Chocolate Chip", bestState: 'TAS', totalSold: 12075 },
      { name: "Chocolate Chip Cookie Dough", bestState: 'NSW', totalSold: 39992 },
      { name: "Butter Pecan", bestState: 'ACT', totalSold: 45012 },
      { name: "Birthday Cake", bestState: 'QLD', totalSold: 3001 },
      { name: "Moose Tracks", bestState: 'WA', totalSold: 59004 }
    ]
  };


function fullStateName(state) {
switch (state) {
    case 'VIC': return 'Victoria';
    case 'SA': return 'South Australia';
    case 'NT': return 'Northern Territory';
    case 'WA': return 'Western Australia';
    case 'TAS': return 'Tasmania';
    case 'NSW': return 'New South Wales';
    case 'ACT': return 'Australian Capital Territory';
    case 'QLD': return 'Queensland';
}
}

function salesCategory(userRating) {
    if (0 <= userRating && userRating < 15000) {
        return 'Below Average';
    } else if (15000 <= userRating && userRating < 25000) {
        return 'Pretty Good';
    } else if (25000 <= userRating && userRating < 35000) {
        return 'Great';
    } else if (35000 <= userRating && userRating < 45000) {
        return 'Fantastic';
    } else {
        return 'Outstanding';
    }
}

let maxSold = 0;
let minSold = Infinity;
let totalSold_1 = 0;
let maxIcecream = {}; 
let minIcecream = {}; 


function buildIcecreamList(){
    const tablehead = document.getElementById('tablehead');
    tablehead.innerHTML = `
          <tr>
            <th>Ice Cream Name</th>
            <th>Best State</th>
            <th>Total Sold</th>
            <th>Sales Category</th>
          </tr>
    `;

    const tablebody = document.getElementById('tablebody');



    icecreamSalesListJSON.icecreams.forEach(item => {
        const row = document.createElement('tr')
        const name = document.createElement('td');
        name.textContent = item.name;
        row.appendChild(name);

        const bestState = document.createElement('td');
        bestState.textContent = fullStateName(item.bestState);
        row.appendChild(bestState);

        const totalSold = document.createElement('td');
        totalSold.textContent = item.totalSold;
        row.appendChild(totalSold);

        const category = document.createElement('td');
        category.textContent = salesCategory(item.totalSold);
        row.appendChild(category);

        tablebody.appendChild(row)

        totalSold_1 += item.totalSold;

        if (item.totalSold > maxSold) {
            maxSold = item.totalSold;
            maxIcecream = item;

        }

        if (item.totalSold < minSold) {
            minSold = item.totalSold;
            minIcecream = item;
        }
    });

    const average = totalSold_1/10;

    const info = document.getElementById('info');
    const p0 = document.createElement('p');
    p0.textContent = 'Some Statistics on the ice cream sold accross all Types.';
    info.appendChild(p0);
    const p = document.createElement('li');
    p.textContent = `Best selling Ice Cream: ${maxIcecream.name} with ${maxIcecream.totalSold} sold`;
    info.appendChild(p);
    const p1 = document.createElement('li');
    p1.textContent = `Worst selling Ice Cream: ${minIcecream.name} with ${minIcecream.totalSold} sold`;
    info.appendChild(p1);
    const p2 = document.createElement('li');
    p2.textContent = `Average number of ice creams cold: ${average} which equates to a sales catefory of ${salesCategory(average)} sold`;
    info.appendChild(p2);


}