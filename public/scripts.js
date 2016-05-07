(function() {
 
  // function expandProject() {
  //   var projectTile = $('.project');
  //   var expanded = false;

  //   var open = function() {
  //     if(!expanded) {
  //       $('body').addClass('no-scroll');
  //       $(this).addClass('expanded');
  //     }
  //   }

  //   projectTile.on('click', open);
  // }

  // expandProject();

 function smoothState() {
    $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
      options.async = true;
    });
  'use strict';
   var options = {
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');

        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);

      }
    }
   },
   smoothState = $('#content').smoothState(options).data('smoothState');
  }

 

  function arrangeProjects(){
    var project = $(".project");
    var windowH = $(window).height();
    var offset = windowH - project.height() * 2 - 200;

    for(i=0; project.length > i; i++ ) {
      offset += 1 * project[i].getBoundingClientRect().height + 96;
      $(project[i]).css({
        'top': offset
      })

      console.log(offset);
    }

    
  }

$(window).on("resize", function() {
  arrangeProjects()
});

   smoothState()
  arrangeProjects()

})();




