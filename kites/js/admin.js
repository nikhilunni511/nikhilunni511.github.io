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


$('div .standard').click(function(e) {
    e.preventDefault();
    var parentId = $(this).closest('div').prop('id');
    $('.standards').addClass('inactive');
    $('.subjects').removeClass('inactive')
    $('.subjects').addClass('active')
    $('.arrow').removeClass('inactive')
    $('.arrow').addClass('active')
    $('.arrow.left').attr('data-action', 1);
});

$('div .subjects').click(function(e) {
    e.preventDefault();
    var parentId = $(this).closest('div').prop('id');
    $('.subjects').addClass('inactive');
    $('.topics').removeClass('inactive')
    $('.topics').addClass('active')
    $('.arrow').removeClass('inactive')
    $('.arrow').addClass('active')
    $('.arrow.left').attr('data-action', 'subjects');
});

$('.arrow.left').click(function(e) {
    e.preventDefault();
    console.log($(this).attr('data-action'))
    $element = $(this).attr('data-action');
    $('.subject').addClass('active');
    $('.standards').removeClass('inactive')
    $('.standards').addClass('active')
    $('.arrow').removeClass('active')
    $('.arrow').addClass('inactive')
})