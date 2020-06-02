function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}


$(function () {
    $( '#table' ).searchable({
        striped: true,
        searchType: 'fuzzy'
    });
    
    $( '#searchable-container' ).searchable({
        searchField: '#container-search',
        selector: '.row',
        childSelector: '.col-xs-4',
        show: function( elem ) {
            elem.slideDown(100);
        },
        hide: function( elem ) {
            elem.slideUp( 100 );
        }
    })
});


$('div .standards').click(function(e) {
    e.preventDefault();
    var parentId = $(this).closest('div').prop('id');
    $('.standards').addClass('inactive');
    $('.subject').removeClass('inactive')
    $('.subject').addClass('active')
});


















