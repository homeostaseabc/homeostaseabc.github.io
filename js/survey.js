function digiviceCheck() {
    let digiviceId = document.getElementById("dId").value;
    // Available Digivice IDs Collection
    var availableIds = ['03053', '00166', '00678']
    // Only Numbers
    if (isNaN(digiviceId))
       alert('A Digivice ID is made up of 5 numbers')
    else
    // Check if the ID typed on "digiviceId" variable (dId field in HTML) exists inside the "availableIds" array
    if(availableIds.indexOf(digiviceId) !== -1)
       alert('Your Digivice ID is valid.');
    else
       alert('Your digive ID is not valid!'); 
    }