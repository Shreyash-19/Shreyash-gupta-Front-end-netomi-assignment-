function validateform(e) {

    var message
    var name = document.form.name.value;
    var contact = document.form.contact.value;
    var email = document.form.email.value;
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (name.length < 3 || name.length > 40) {

        message = JSON.stringify({
            message: '{"Name":{"error":"length should be in between 4-10 characters."}}',

        });
        window.parent.postMessage(message, '*');
        return false;
    }
    else if (contact.length < 10) {
        message = JSON.stringify({
            message: '{"Contact":{"error":" Contact length should be 10 digits."}}',
        });
        window.parent.postMessage(message, '*');
        return false;
    }
    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {

        message = JSON.stringify({
            message: '{ "Email": { "error": "Enter valid email address." } }',
        });
        window.parent.postMessage(message, '*');
        return (false);
    }
    else {
        message = JSON.stringify({
            message: '{ "Success":"All fields are valid" }',
        });
        window.parent.postMessage(message, '*');
        return true;
    }
}