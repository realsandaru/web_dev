function processText(){

    const string = document.getElementById('exampleFormControlTextarea1').value.trim();
    const search_word = document.getElementById('searchWord').value;
    const number = document.getElementById('numberCharacters').value;
    
    if( string == "" || search_word == "" ) {
        alert('Ensure you input a value in both fields!');
        } else {
            const lower_search_word = search_word.toLowerCase();
            const lenght = string.length;
            const upper = string.toUpperCase();
            const lower = string.toLowerCase();
            const fist_occurance = lower.indexOf(lower_search_word);
            const first_num_chars = string.slice(0, number);
            const last_num_chars = string.slice(-number);

            document.getElementById('searchTerm').textContent = search_word;
            document.getElementById('numberSubstringCharactersStart').textContent = number;
            document.getElementById('numberSubstringCharactersEnd').textContent = number;

            document.getElementById('strResult1').textContent = lenght;
            document.getElementById('strResult2').textContent = upper;
            document.getElementById('strResult3').textContent = lower;
            document.getElementById('strResult4').textContent = fist_occurance;
            document.getElementById('strResult5').textContent = `${first_num_chars} ...`;
            document.getElementById('strResult6').textContent = `...${last_num_chars}`;
        }
}

function clearText(){
    document.getElementById('exampleFormControlTextarea1').value = '';
    document.getElementById('searchWord').value = '';
    document.getElementById('numberCharacters').value = '';
}