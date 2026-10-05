//Inside the HTML, find the button,  and run the wuTangGang function when clicked.  
document.querySelector('button').addEventListener('click', wuTangGang); 

//Creating a functuon
function wuTangGang(){
    //These are the names in my HTML. 
    const question = ['a1', 'a2', 'a3', 'a4', 'a5']
    //Saving the results elements. 
    const results = document.querySelector('#savvyResults');  
     //We're turning the 5-question names into 5 selected values.
    const answers = question.map(function(question){

        //Instead of using the index we're using in names. Find and check the selectd radio buttons in this group. 
        const picked = document.querySelector('input[name ="' + question + '"]:checked');
        //Return it's value, or an empty array with nothing inside. 
        return picked ? picked.value : ''; //The spots stays empty, so if nothing is selected return and empty string. 
    })
    //If an empty string means a question wasn't answered. 
    if(answers.includes('')){
        document.querySelector('#savvyResults').innerText = 'PROTECT YA NECK!'; 
        //Stop this function before it hits the server. 
        return; 
    }

    //Build a query-string(a1=a, a2=b, a3=c, a4=a and a5=b), and match each index with an answer in the array. 
    const query = question 
    .map(function(question, index){
        return question + '=' + answers[index]; 
    })
    //Join the pieces with & so the server can read them. 
    .join('&');

    //Fetch(); means send and requet to our server's API. 
    fetch('/api?' + query)
        .then(function(response) { 
        //returns JSON into Javascript Object. 
        return response.json();
    })
        //Respond with the data. 
        .then(function(data){
        //If the request fails, show a message that it failed. 
        document.querySelector('#savvyResults').innerText = 'Your Name Is' + data.name; 
    })
    //Catch any errors. 
    .catch(function (error) {
        //Something is wrong with the request. 
        results.innerText = 'Something is wrong, check the code'
        //Show the error detail in the broswer. 
        console.error(error); 
    })
}