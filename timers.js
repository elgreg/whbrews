  $('#setInterval-mash').one('click', function(e)
    {
      e.preventDefault();
      $(this).text('Started the Mash');

      $(function() {
      var seconds = 3600;
      setTimeout(updateCountdown, 1000);

      function updateCountdown() {
        seconds--;

        var minutesPortion = Math.floor(seconds/60);
        var secondsPortion = seconds % 60; 

        if (minutesPortion < 10) {
          minutesPortion = '0' + minutesPortion;
        }
        if (secondsPortion < 10) {
          secondsPortion = '0' + secondsPortion;
        }

        if (seconds > 0) {
           $("#countdown-mash").text(minutesPortion + ":" + secondsPortion).append('<p>remaining</p>');
           setTimeout(updateCountdown, 1000);
        } else {
           submitAlert();
        }
      }
    });

      function submitAlert() {
         alert("Done!");
      }
  });
  $('#setInterval-boil').one('click', function(e)
    {
      e.preventDefault();
      $(this).text('Started the Boil');

      $(function() {
      var seconds = 3600;
      var goldings = 900;
      var fuggles = 3540;

      setTimeout(updateCountdown, 1000);

      function updateCountdown() {
        seconds--;
        goldings--;
        fuggles--;

        var minutesPortion = Math.floor(seconds/60);
        var secondsPortion = seconds % 60;

        var minGoldings = Math.floor(goldings/60);
        var secGoldings = goldings % 60;
        var minFuggles = Math.floor(fuggles/60);
        var secFuggles = fuggles % 60;

        if (minutesPortion < 10) {
          minutesPortion = '0' + minutesPortion;
        }
        if (secondsPortion < 10) {
          secondsPortion = '0' + secondsPortion;
        }
        if (minGoldings < 10) {
          minGoldings = '0' + minGoldings;
        }
        if (secGoldings < 10) {
          secGoldings = '0' + secGoldings;
        }
        if (minFuggles < 10) {
          minFuggles = '0' + minFuggles;
        }
        if (secFuggles < 10) {
          secFuggles = '0' + secFuggles;
        }



        if (seconds > 0) {
           $('#countdown-boil').text(minutesPortion + ':' + secondsPortion).append('<p>remaining</p><h3>Next Hop Addition</h3>');
           if (goldings > 0) {
            $('#countdown-goldings').text(minGoldings + ':' + secGoldings).prepend('<p><span class="number2">1.5 oz</span> Kent Goldings in </p>');
           }else {
            $('#countdown-goldings').hide();
            $('#countdown-fuggles').text(minFuggles + ':' + secFuggles).prepend('<p><span class="number2">1.5 oz</span> Fuggles in </p>');
           }

           setTimeout(updateCountdown, 1000);
        } else {
           submitAlert();
        }
        if (fuggles < 0) {
          $('#countdown-fuggles').hide();
          $('#countdown-boil h3').hide();
        }
      }
    });

      function submitAlert() {
         alert("Done!");
      }
  });