var form = document.getElementById('main-form');
form.addEventListener('submit', function (e) {

    e.preventDefault();
    var el = document.querySelectorAll('[data-reqired]');
    var elCheck = document.querySelectorAll('.second-question input[type="checkbox"]');
    var erroreArrayElemnts = [];

    for (var i = 0; i < el.length; i++) {
        if (el[i].tagName === 'INPUT') {

            var name = el[i].getAttribute('name');

            if (document.querySelectorAll('[name=' + name + ']:checked').length === 0 ) {

                erroreArrayElemnts.push(el[i]);

                var digs;
                if($(el[i]).parents('.range-wrp').length > 0){
                    digs = $(el[i]).parents('.range-wrp').find('.error-text');
                }
                
                for (var d = 0; d < digs.length; d++) {
                    $(digs[d]).fadeIn(300);
                }

                for (var e = 0; e < 10; e++) {
                    if(document.querySelectorAll('[name=' + name + ']')[e]){
                        document.querySelectorAll('[name=' + name + ']')[e].addEventListener('change', (e) => {
                            if($(e.target).parents('.range-wrp').length > 0){
                                $(e.target).parents('.range-wrp').find('.error-text').fadeOut(300);
                            }
                        });
                    }
                }
            }
        } 
    }

    for (var i = 0; i < elCheck.length; i++) {
        if (elCheck[i].tagName === 'INPUT') {

            var name = elCheck[i].getAttribute('name');

            if (document.querySelectorAll('[name=' + name + ']:checked').length === 0 ) {


                var digs;

                if($('.first-question input').is(':checked') && $('.second-question input[type="checkbox"]:checked').length == 0){
                    digs = $(elCheck[i]).parents('.input-radio-group').find('.error-text');
                    erroreArrayElemnts.push(elCheck[i]);
                }
                if(digs){
                    for (var d = 0; d < digs.length; d++) {
                        $(digs[d]).fadeIn(300);
                    }
                }

                for (var e = 0; e < 10; e++) {
                    if(document.querySelectorAll('[name=' + name + ']')[e]){
                        document.querySelectorAll('[name=' + name + ']')[e].addEventListener('change', (e) => {
                            if($(e.target).parents('.input-radio-group').length > 0 && $('.first-question input').is(':checked')) {
                                $(e.target).parents('.input-radio-group').find('.error-text').fadeOut(300);
                            }
                        });
                    }
                }
            }
        } 
    }
    if (erroreArrayElemnts.length > 0) {
        window.scrollTo(0, erroreArrayElemnts[0].parentElement.parentElement.getBoundingClientRect().top);
    }
    if(erroreArrayElemnts.length == 0){
        form.submit();
    }
});
$('.first-question input').change(function(e){
    if($(this).is(':checked')) {
        $('.second-question').fadeIn(300);
    }
});
$('.check-answer').change(function(e){
    if($(this).is(':checked')) {
        $('.detail-answer').fadeIn(300);
    }
});
