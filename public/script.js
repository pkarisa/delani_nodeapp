$("document").ready(function(){
    $(".portfolio-img").hover(function(e){
        const target= e.target;
        if(target.matches("img")){
            const titlename =target.alt.toUpperCase();
            $(target).prop("title",titlename);
        }
    })
    /* ADDS A FTOGGLE FUNCTION BETWEEN THE WWD IMAGES AND THE DESCRIPTION */
    $(".kazi").click(function (e) {

        const clicked = e.target;

        if (clicked.matches("img")) {

            let narration = e.target.previousElementSibling;

            $(clicked).toggle()
            $(narration).toggle()

        }

        else if (clicked.matches("h6") || clicked.matches("small")) {

            let narration = e.target.parentElement.nextElementSibling;

            $(clicked.parentElement).toggle()
            $(narration).toggle()
        }

    });

});


  $('.btn').click(function () {

    var Name = $('#your-name').val();

    var Email = $('#email').val();

    var Message = $('#comment');

    var key ='https://formspree.io/f/myyvvqqj';

    if (Name == '' || Email == '' || Message == '') {

        alert('Please make sure you have filled in the form correctly!');

    } else {

        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');

    }

});