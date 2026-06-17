// this is your custom Javascript file

$(function () {
  // add any custom Javascript code below this line
  // add any custom Javascript code above this line.
  const travelFacts = [
    'Traveling gives me a chance to experience a different lifestyle.',
    'A short trip can give me a break from all schoolworks.',
    'I like traveling because I enjoy beautiful sceneries and like taking great photos.'
  ];

  let factIndex = 0;
  let movedRight = false;

  $('#button1').on('mouseover', function () {
    factIndex = (factIndex + 1) % travelFacts.length;
    $('#paragraph1').text(travelFacts[factIndex]);
  });

  $('#image1').on('mouseover', function () {
    $(this).attr('src', 'images/tree.jpg');
  });

  $('#image1').on('mouseout', function () {
    $(this).attr('src', 'images/sea.jpg');
  });

  $('#button2').on('click', function () {
    const finalLeft = movedRight ? '0px' : '80px';

    $('#paragraph2').stop(true).animate({
      left: finalLeft,
      top: '0px'
    }, 400);

    movedRight = !movedRight;
  });

  // extra credits: VelocityJS, shake effect
  $('#travel-title').on('click', function () {
    if (typeof $.fn.velocity === 'function') {
      $(this)
        .velocity({ translateY: '-8px', scale: 1.04 }, { duration: 150 })
        .velocity({ translateY: '0px', scale: 1 }, { duration: 250 });
    }
  });
})
