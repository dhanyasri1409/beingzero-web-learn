$("document").ready(function(){
    const loggedIn= false;
    if(loggedIn)
    {
        $("#loggedIn").show();
        $("#notlogged").hide();

    }
    else{
        $("#notlogged").show();
        $("#loggedIn").hide();
    }

})