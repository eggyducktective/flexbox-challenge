$(document).ready(function(){

    $('.cta a').click(function() {
        $('html,body').animate({
            scrollTop: $('#tours').offset().top
        }, 500);
        return false;
    });

    $('#tours li').on('click', function() {
        $('#location').val($('img', this).attr('alt'));
    });

    // the jQuery slim included in the challenge did not support Ajax functionality. I have changed this to jQuery min.
    $.ajax({
      url: 'https://9ss7bxey8k.execute-api.ap-southeast-2.amazonaws.com/default/dummy_service',
      success: function(result) {
        console.log(result.Data);
        for (let key in result.Data) {
          // img will select all nodes, 'eq' let me select individual node by number
          $('img').eq(key).attr('src', result.Data[key].node.frontmatter.cover)
        }
      }
    }); // end ajax call
})
