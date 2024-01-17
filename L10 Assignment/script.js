
$(document).ready(function () {
    $('#fullpage').fullpage({
      sectionsColor: ['#ADD8E6', '#CBC3E3', '#FFB6C1'],
      navigation: true,
      navigationPosition: 'right',
      anchors: ['section1', 'section2', 'section3'], 
      afterLoad: function (origin, destination, direction) {
        if (destination.index == 0) { 
                        var animation1 = anime({
                            targets: ['.h2','.h4','.col-9','.col-4','.col-6'],
                            translateY: 0,
                            rotate: -360,
                            opacity: [0, 1],
                            delay: 500,
                            direction: 'alternate',
                            loop: false, 
                            easing: 'linear'
                            
                          });
                          animation1.play(); 
                        } else if (destination.index == 1) { 
                          var animation2 = anime({
                            targets: ['.clearfix'],
                            rotate:360,
                            direction: 'alternate',
                            loop:'true',
                            autoplay:'true',
                            delay: 500,
                            easing: 'linear'
                            
                          });
                          animation2.play(); 
                        } else if (destination.index == 2) { 
                          var animation3 = anime({
                            targets: ['.container'],
                            opacity: 1,
                            translateX: 100,
                            translateY: -100,
                            easing: 'easeInOutQuad',
                            duration: 1000,
                            delay: anime.stagger(100), 
                            complete: function(anim) {
                                anime({
                                    targets: ['.container'],
                                    translateX: 0,
                                    translateY: 0,
                                    easing: 'easeInOutQuad',
                                    duration: 1000,
                                });
                            }
                        });
                        animation3.play();
                    }
      }
    });
  });

      // Bar Graph Data
      const dailyCasesData = {
        labels: ['1 Dec', '2 Dec', '3 Dec', '4 Dec', '5 Dec', '6 Dec', '7 Dec', '8 Dec', '9 Dec', '10 Dec', '11 Dec','12 Dec', '13 Dec', '14 Dec'],
        datasets: [{
            label: 'Daily Cases (past 2 weeks)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
        }]
    };

    // Configure bar graph
    const dailyCasesConfig = {
        type: 'bar',
        data: dailyCasesData,
        options: {
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Render bar graph in <canvas>
    const dailyCasesChart = new Chart(
        document.getElementById('dailyCasesChart'),
        dailyCasesConfig
    );

    // Add JavaScript to initialise DataTables to the table
     $(document).ready(function() {
        $('#example').DataTable({
            "pageLength": 5
        });
    });

    tippy('#poly1', {
        content: 'Pioneer Polyclinic - 26 Jurong West Street 61, Singapore 648201, 67651126 ', 
    });

    tippy('#poly2', {
        content: 'Jurong Polyclinic - 190 Jurong East Avenue 1, Singapore 609788, 67651122', 
    });

    tippy('#poly3', {
        content: 'Bukit Batok Polyclinic - 50 Bukit Batok West Avenue 3, Singapore 659164, 6343 1122 ', 
    });

    tippy('#poly4', {
        content: 'Choa Chu Kang Polyclinic - 2 Teck Whye Crescent, Singapore 688846, 63431124', 
    });

    tippy('#poly5', {
        content: 'Clementi Polyclinic - 451 Clementi Avenue 3, Singapore 120451, 63431125 ', 
    });

    tippy('#poly6', {
        content: 'Bukit Merah Polyclinic - 162 Bukit Merah Central Level 4, Singapore 150163, 6343 1123', 
    });

    tippy('#poly7', {
        content: 'Outram Polyclinic - 3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937, 67651124', 
    });

    tippy('#poly8', {
        content: 'Geylang Polyclinic - 21 Geylang East Central, Singapore 389707, 63431126', 
    });

    tippy('#poly9', {
        content: 'Marine Parade Polyclinic - 80 Marine Parade Central, Singapore 440080, 67651123 ', 
    });

    tippy('#poly10', {
        content: 'Bedok Polyclinic - 11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662, 6343 1121', 
    });

    tippy('#poly11', {
        content: 'Pasir Ris Polyclinic - 1 Pasir Ris Drive 4, Singapore 519457, 67651125', 
    });

    tippy('#poly12', {
        content: 'Hougang Polyclinic - 89 Hougang Avenue 4, Singapore 538829, 67651121', 
    });

    var animation1 = anime({
        targets: ['.section1'],
        translateX: 250,
        rotate: 0,
        opacity: [0, 1],
        delay: 500
      });
    
      var animation2 = anime({
        targets: ['.section2'],
        translateY: -300,
        rotate: 180,
        delay: anime.stagger(300, { start: 1000 }),
        direction: 'alternate'
      });
    
      var animation3 = anime({
        targets: ['.section3'],
        translateX: 300,
        scale: 2,
        easing: 'easeInOutExpo',
        direction: 'alternate',
        duration: 4000,
        loop: true,
        autoplay: true
      });
    