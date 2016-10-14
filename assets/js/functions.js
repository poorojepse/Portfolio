$(function () {
    navpageHover();
    navpageClick();
    workthumbClick();
});


function navpageHover() {
    $('.nav-top li, .skews li').hover(
    function() {
        var target = $(this).attr('class');
            $('.skews').find('.'+target+' .shadow').css({'opacity' : '1'}); },
    function() {
            $('.shadow').css({'opacity' : '0'});
    });    
    
    $('footer').hover(
    function() {
        $('footer').addClass('active-footer'); },
    function() {
        $('footer').removeClass('active-footer');
    });
}


function navpageClick() {       
    $('.nav-top li, .skews li').click(function () {        
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
        
            $('.nav-top').addClass('active-nav-bottom'),
            $('.skews li').addClass('enable-page'),
            $('.page').removeClass('active-page').eq(position).addClass('active-page');
        
            if ( position === 0 ) {
                
                $('.skews .about').css({'width' : '80%', 'margin-left' : '10%'}),
                $('.skews .about').siblings().css({'display' : 'none'}),
                $('.skews .about').next().css({'display' : 'block' , 'width' : '20%' , 'margin-right' : '-10%'}),    
                $('nav').removeClass('nav-even').addClass('nav-odd');
                
            } else if ( position === 1 ) {

                $('.skews .work').css({'width' : '80%' , 'margin' : '0'}),
                $('.skews .work').siblings().css({'display' : 'none'}),
                $('.skews .work').prev().css({'display' : 'block' , 'width' : '20%', 'margin-left' : '-10%'}),
                $('.skews .work').next().css({'display' : 'block' , 'width' : '20%', 'margin-right' : '-10%'}),
                $('nav').removeClass('nav-odd').addClass('nav-even');

            } else if ( position === 2 ) {

                $('.skews .contact').css({'width' : '80%' , 'margin' : '0'}),
                $('.skews .contact').siblings().css({'display' : 'none'}),
                $('.skews .contact').prev().css({'display' : 'block' , 'width' : '20%', 'margin-left' : '-10%'}),
                $('.skews .contact').next().css({'display' : 'block' , 'width' : '20%', 'margin-right' : '-10%'}),
                $('nav').removeClass('nav-even').addClass('nav-odd');

            }  else {

                $('.skews .form').css({'width' : '80%' , 'margin-right' : '10%'}),
                $('.skews .form').siblings().css({'display' : 'none'}),
                $('.skews .form').prev().css({'display' : 'block' , 'width' : '20%' , 'margin-left' : '-10%'}), 
                $('.skews .form').prev().css({'display' : 'block' , 'width' : '20%' , 'margin-left' : '-10%'}), 
                $('nav').removeClass('nav-odd').addClass('nav-even');
                
            } 
    });
    
    $('.nav-bottom').click(function () {
        $('nav').removeClass('nav-odd && nav-even'),
        $('.nav-top').removeClass('active-nav-bottom'),
        $('.skews li').removeClass('enable-page').css({'display' : '', 'width' : '', 'margin': ''}),
        $('.page').removeClass('active-page');
    });
}


function workthumbClick() {
    $('.work-thumb-content').click(function () {
        $('#work .wrapper').addClass('enable-wrapper').find('.work-thumb-content').removeClass('enable-work-thumb-content');
        
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);
        
            $('.work-thumb-content').removeClass('active-work').eq(position).addClass('active-work'),
            $('.work-focus-content').removeClass('active-work').eq(position).addClass('active-work');
    });
    
    $('.work-belt-next, .work-belt-prev').click(function () {
        var $this = $(this),
            curActiveThumb = $('.work-thumb').find('.active-work'),
            position = $('.work-thumb').children().index(curActiveThumb),
            thumbLength = $('.work-thumb-content').length;
            
            if ( $this.hasClass('work-belt-next') ) { 
                if (position < thumbLength -1) {
                    $('.active-work').removeClass('active-work').next().addClass('active-work');
                } else {
                    $('.work-thumb-content').removeClass('active-work').first().addClass('active-work');
                    $('.work-focus-content').removeClass('active-work').first().addClass('active-work');
                }       
            } else {      
                if (position === 0) {
                    $('.work-thumb-content').removeClass('active-work').last().addClass('active-work');
                    $('.work-focus-content').removeClass('active-work').last().addClass('active-work');
                } else {
                    $('.active-work').removeClass('active-work').prev().addClass('active-work');
                }   
            }
    });
}
