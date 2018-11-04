$(document).ready(function () {

   
    //jumbotron scrolling effect//
    //var jumboHeight = $('.jumbotron').outerHeight();

    //function parallax() {
       // var scrolled = $(window).scrollTop();
       // $('.bg').css('height', (jumboHeight - scrolled) + 'px');
    //}

   // $(window).scroll(function (e) {
       // parallax();
   // });


    //start of global varibales//  
    var number = 60;


    $(".questions").hide();
    $(".answer").hide();
    $("#done-button").hide();
    $("#replay-button").hide();
    $(".answer-page").hide();
    $(".youwin").hide();



    //my on click event that triggers the timer,questions, and answers to pop up//
    $("#start-button").click(function () {

        $("#start-button").on("click", start);
        $("#done-button").on("click", end);
        $("#replay-button").on("click", reset);





        function start() {
            counter = setInterval(timer, 1000);
            $(".questions").show();


            $(".answer").show();
            $("#done-button").show();
            $("#start-button").hide();
            $(".answer-page").hide();
            $("#replay-button").hide();


        }

        function timer() {
            number--;
            $("#countdown").html("<h2>Timer: " + number + "</h2>");
            if (number === 0) {
                stop();
            }
        }

        function stop() {
            check();
            clearInterval(counter);
            $(".answer-page").show();
            $(".rule").hide();
            $("#replay-button").show();
            $(".youwin").show();
            $(".questions").hide();
            $(".answer").hide();
            $("#done-button").hide();
            $("#countdown").hide();

        }

        function end() {
            number = 1;
            clearInterval(counter);
            stop()
        }

        function reset() {
            number = 60;
            start();
            timer();
            $(".rule").show();
            $("#countdown").show();
            $(".answer").show();
            //resets the input radios so they aren't checked when page resets//
            $('input[type=radio]').prop('checked', false);
            $(".youwin").hide();
            correct = 0;
            missed = 0;




        }






        start();
    });

    //answers pop up and correct and missed counter show up with restart button//
    var correct = 0;
    var missed = 0;

    function check() {

        var question1 = $("input[type='radio'][name='q1']:checked").val();
        var question2 = $("input[type='radio'][name='q2']:checked").val();
        var question3 = $("input[type='radio'][name='q3']:checked").val();
        var question4 = $("input[type='radio'][name='q4']:checked").val();
        var question5 = $("input[type='radio'][name='q5']:checked").val();

        console.log(question1);
        console.log(question2);
        console.log(question3);
        console.log(question4);
        console.log(question5);






        if (question1 === "b") {
            correct++;

        } else {
            missed++;
        }




        if (question2 === "c") {
            correct++;
        } else {
            missed++;
        }
        if (question3 === "a") {
            correct++;

        } else {
            missed++;
        }
        if (question4 === "c") {
            correct++;

        } else {
            missed++;
        }
        if (question5 === "d") {
            correct++;

        } else {
            missed++;
        }

        console.log(correct);
        console.log(missed);
        $(".answer-page").html("<h2>Answered Correctly: " +
            correct + "<h2>Answered Incorrectly: " + missed);

        if (correct === 5) {
            $(".youwin").html("<h1>YOU WIN!!!! YOU GOT EVERY ANSWER RIGHT!!")
        } else {

        }









    };





});