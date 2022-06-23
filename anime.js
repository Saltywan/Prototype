$(document).ready(function(){
    var checkboxes = $('.checkboxes');
    checkboxes.change(function(){
        if($('.checkboxes:checked').length>0) {
            checkboxes.removeAttr('required');
        } else {
            checkboxes.attr('required', 'required');
        }
    });
});
