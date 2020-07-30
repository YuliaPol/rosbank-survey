var form = document.getElementById('main-form');
form.addEventListener('submit', function (e) {

    e.preventDefault();
    var el = document.querySelectorAll('[data-reqired]');
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
                else if($(el[i]).parents('.input-radio-group').length > 0 && $('.first-question input').is(':checked')) {
                    digs = $(el[i]).parents('.input-radio-group').find('.error-text');
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
                            else if($(e.target).parents('.input-radio-group').length > 0 && $('.first-question input').is(':checked')) {
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
