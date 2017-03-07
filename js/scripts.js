function sliderAnimation() {
$(document).ready(function(){
    var classes = ["animated fadeInRight", "animated fadeInLeft", "animated rotateInDownLeft", "animated rotateInUpRight", "animated rotateInUpLeft", "animated rotateInDownRight", "animated rollIn"];

    $(".slide0, .slide1, .slide2, .slide3, .slide4, .slide5").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
});
}
sliderAnimation();

function tooltipAnimation() {
		$('[data-toggle="tooltiptop"]').tooltip({
    'placement': 'top',
	container: 'body'
});
  $('[data-toggle="tooltiptop"]').on('shown.bs.tooltip', function () {
        $('.tooltip').addClass('animated bounce');
    })
$('[data-toggle="tooltip"]').tooltip({
    'placement': 'left',
	container: 'body'
	});
}
tooltipAnimation();

function showHiddenDiv() {
$(document).ready(function () {
	$("div.hidden-div").show();
});
}
showHiddenDiv();

function randomQuote() {
var quoteList = new Array();
quoteList[0] = '<blockquote class="blockquote-reverse"><p>“ Trenując bicepsy, wyobrażam sobie wysokie góry. Dzięki swojej wyobraźni przekonałem się, że potrafię wszystko, kiedy tylko mocno, bardzo mocno tego chcę i wierzę, że to osiągnę. „</p><footer>Arnold Schwarzenegger<cite title="Source Title"></cite></footer></blockquote>';
quoteList[1] = '<blockquote><p>“ Każdy chce być kulturystą, ale nikt nie chce dźwigać ciężarów. „</p><footer>Ronnie Coleman<cite title="Source Title"></cite></footer></blockquote>';
quoteList[2] = '<blockquote class="blockquote-reverse"><p>“ Wszystko możesz, nic nie musisz. „</p><footer>Arnold Schwarzenegger<cite title="Source Title"></cite></footer></blockquote>';
quoteList[3] = '<blockquote><p>“ Im bardziej jesteś pochłonięty przez coś, tym lepsze masz szanse osiągnięcia tego. „</p><footer>Frank Zane<cite title="Source Title"></cite></footer></blockquote>';
quoteList[4] = '<blockquote class="blockquote-reverse"><p>“ Wielu facetów ma lepsze geny, ale jeśli pracujesz ciężko i konsekwentnie, możesz ich przewyższyć. „</p><footer>Frank Zane<cite title="Source Title"></cite></footer></blockquote>';
quoteList[5] = '<blockquote><p>“ Konsekwencja jest tym czym budujesz sylwetkę. „</p><footer>Frank Zane<cite title="Source Title"></cite></footer></blockquote>';
quoteList[6] = '<blockquote class="blockquote-reverse"><p>“ Słabość jest wyborem, dlatego jestem silny. „</p><footer>Frank Zane<cite title="Source Title"></cite></footer></blockquote>';
quoteList[7] = '<blockquote><p>“ By osiągać sukcesy w kulturystyce trzeba być dobrym obserwatorem. „</p><footer>Frank Zane<cite title="Source Title"></cite></footer></blockquote>';
quoteList[8] = '<blockquote class="blockquote-reverse"><p>“ Im ciężej pracujesz by zwyciężyć i krwawisz z tego powodu, wtedy wygrana smakuje jeszcze lepiej. „</p><footer>Branch Warren<cite title="Source Title"></cite></footer></blockquote>';
quoteList[9] = '<blockquote><p>“ 20 lat zajęło mi dojście do aktualnej sylwetki, potrzebujesz to co ja już mam - UWIERZYĆ W SIEBIE. „</p><footer>Branch Warren<cite title="Source Title"></cite></footer></blockquote>';

var randQuote = Math.floor(Math.random()*quoteList.length);
$("#testimonials").html(quoteList[randQuote]);
}
randomQuote();

function typeWord() {
    $(function(){

        $(".typedjs").typed({
            strings: ["^800<strong>Wiara we własne umiejetności^2000</strong>", "<strong>Twardy charakter</strong>", "<strong>Nieustępliwość w dążeniu do celu</strong>", "<strong>witaj, naturalnamasa.pl^8000</strong>"],
            stringsElement: null,
            typeSpeed: 25,
            backDelay: 500,
            loop: true,
            contentType: 'html',
            loopCount: false,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        $(".reset").click(function(){
            $("#typed").typed('reset');
        });

    });
}
typeWord();

		
function socialButtons() {
     $(function() {
    
        $(".share2").ayoshare({
            google : false,
            facebook : true,
            pinterest : false,
            linkedin : false,
            twitter : false,
            email : false,
            whatsapp : false,
            telegram : false,
            line : false,
            bbm : false,
            viber : false,
            sms : false
        });

    });
}
socialButtons();
		
		

function addAnimationOnScroll() {
$(document).ready(function() {
    $('.post').addClass("custom-hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp delay-1s',
        offset: 350,
       });
});

$(document).ready(function() {
    $('.post2').addClass("custom-hidden").viewportChecker({
        classToAdd: 'visible animated tada',
        offset: 100
       });
});

$(document).ready(function() {
    $('.post3').addClass("custom-hidden").viewportChecker({
        classToAdd: 'visible animated tada',
        offset: 50
       });
});
}
addAnimationOnScroll();

function masonryGrid() {
$(window).load(function(){
	var $container = $('.row-masonry');

	$container.masonry({
		itemSelector: '.ms-item'
	});
});
}
masonryGrid();

function slider() {
  $(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000,
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});
}
slider();

function shrinkNavbarOnScroll() {
$(window).scroll(function() {
  if ($(document).scrollTop() > 15) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
}
shrinkNavbarOnScroll();