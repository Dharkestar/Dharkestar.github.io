$(function(){
    var $contactForm = $("#contactForm");
    if($contactForm.length){
        $contactForm.validate({
            rules:{
                firstName:{
                    required: true
                },
                lastName: {
                    required: true
                },
                phone: {
                    required: true
                },
                email: {
                    required: true
                },
                message: {
                    required: true
                },
            },
            messages:{
                firstName:{
                    required: 'Please enter your first name.'
                },
                firstName: {
                    required: 'Please enter your last name.'
                },
                phone: {
                    required: 'Please enter your phone number.'
                },
                email: {
                    required: 'Please enter your email address.'
                },
                message: {
                    required: 'Please leave a message.'
                },
            },
        })
    }
})

