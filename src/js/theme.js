/**
 * Form Validation Using jQuery
 */
$(document).ready(function() {
    var $newsletter = $('#newsletter');

    function displayNewsletterErrors() {
        var html = '';

        html = '<div class="alert alert-danger alert-dismissible fade in" role="alert">';
            html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
            html += '<h4>Oops! You got an error!</h4>';
            html += '<p>Please check the form for any typos and try again.</p>';
        html += '</div>';

        $newsletter.prepend(html);
    }

    function displayNewsletterSuccess() {
        var html = '';

        html = '<div class="alert alert-success alert-dismissible fade in" role="alert">';
            html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
            html += '<h4>Congratulations!</h4>';
            html += '<p>We\'ve added you to our mailing list so look out for some awesome content in your inbox.</p>';
        html += '</div>';

        $newsletter.parent().prepend(html);
    }

    if ($newsletter && $newsletter.length > 0) {

        $newsletter.submit(function(e) {

            e.preventDefault();

            var $spiner = $newsletter.find('.btn .spin'),
                $first = $('#first'),
                $email = $('#email'),
                nameRegex = /^[a-zA-Z]+$/,
                // @ref https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
                emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                errors = false;

            $newsletter.find('.form-group').removeClass('has-error');
            $spiner.show();

            if (!nameRegex.test($first.val())) {
                errors = true;
                $first.parent().addClass('has-error');
            }

            if (!emailRegex.test($email.val().toLowerCase())) {
                errors = true;
                $email.parent().addClass('has-error');
            }

            if (false === errors) {
                displayNewsletterSuccess();
            } else {
                displayNewsletterErrors();
            }

            $newsletter.hide();
            $spiner.hide();

        });
    }

});

/**
 * Form Validation Using native JavaScript
 */
(function() {
    var $contact = document.getElementById('contact-form');

    function displayContactErrors() {
        var html = '',
            $div = document.createElement('div');

        html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
        html += '<h4>Oops! You got an error!</h4>';
        html += '<p>Please check the form for any typos and try again.</p>';

        $div.setAttribute('class', 'alert alert-danger alert-dismissible fade in');
        $div.setAttribute('role', 'alert');
        $div.innerHTML = html;

        $contact.insertBefore($div, $contact.firstChild);
    }

    function displayContactSuccess() {
        var html = '',
            $div = document.createElement('div')

        html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>';
        html += '<h4>Congratulations!</h4>';
        html += '<p>We\'ve added you to our mailing list so look out for some awesome content in your inbox.</p>';

        $div.setAttribute('class', 'alert alert-success alert-dismissible fade in');
        $div.setAttribute('role', 'alert');
        $div.innerHTML = html;

        $contact.parentElement.insertBefore($div, $contact);
        $contact.style.display = 'none';
    }

    if ($contact && $contact.length > 0) {

        $contact.addEventListener("submit", function(e) {

            e.preventDefault();

            var $groups = document.querySelectorAll('.form-group'),
                $spiner = document.querySelector('.btn .spin'),
                $first = $contact.firstName,
                $last = $contact.lastName,
                $email = $contact.email,
                $subject = $contact.subject,
                $message = $contact.message,
                $terms = $contact.terms,
                nameRegex = /^[a-zA-Z]+$/,
                // @ref https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
                emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                errors = false;

            for(var i = 0; i < $groups.length; i++) {
                $groups[i].classList.remove("has-error");
            }

            $spiner.style.display = 'inline-block';

            if (!nameRegex.test($first.value)) {
                errors = true;
                $contact.firstName.parentElement.className += ' has-error';
            }

            if (!nameRegex.test($last.value)) {
                errors = true;
                $contact.lastName.parentElement.className += ' has-error';
            }

            if (!emailRegex.test($email.value.toLowerCase())) {
                errors = true;
                $contact.email.parentElement.className += ' has-error';
            }

            if (false === errors) {
                displayContactSuccess();
            } else {
                displayContactErrors();
            }

            $spiner.style.display = 'none';

        }, false);

    }
})();
