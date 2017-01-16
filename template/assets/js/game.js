var Q1 = {
    'L':1,
    'Value':'Kogo Pochowano w grobie Napoleona',
    'A1':'Saurona',
    'A2':'Napoleona',
    'A3': 'Browara',
    'A4':'Pana Kleksa',
    'C':2
}

var Q2 = {
    'L':2,
    'Value':'Kto wygra mecz?',
    'A1':'Oni',
    'A2':'Wy',
    'A3': 'Inni',
    'A4':'My',
    'C':4
}

var Q3 = {
    'L':3,
    'Value':'Czego najbardziej nie lubisz?',
    'A1':'JavaScript',
    'A2':'jQuery',
    'A3': 'PHP',
    'A4':'JAVA',
    'C':2
}

var Questions = {
    'Q1': Q1,
    'Q2': Q2,
    'Q3': Q3
}

$(document).ready(function(){

    var Game = {
       
        init: function(){
          
            $('#StartGame').on('click',function(){
                console.log('dziala');
                
                this.remove();

                var question = Game.makeQuestion(Q3);
                $(question).appendTo('#Game');

                var tip = Game.makeTip();
                $(tip).insertAfter('#Game .pytanie');

            });

            $(document).on('click','.odpowiedz .Button',function(){

                if($(this).hasClass('zablokowany')){
                    return false;
                }; 

                var udzielona = $(this).data('odp');
                var prawidlowa = Q1.C;

                if (udzielona === prawidlowa) { 
                    var title = $(this).parents('.pytanie').children('h4');
                    $('<p>Zgadles</p>').insertAfter(title).slideDown(1000).slideUp(1000);
                    $(this).css('background','green');

                } else {


                   $(this).addClass('zla').css('background','red');
                   
                   $('.odpowiedz .Button').addClass('zablokowany');
                   
                   $('.odpowiedz .Button').each(function(){
                       if ($(this).data('odp') == prawidlowa){
                           $(this).css('background','green');
                       }
                    });
                }
            });    
          
        },
       
        makeTip: function(){

          var opcje ='';

          opcje+='<div class="opcje">';
               opcje += '<div class="kola">';
                   opcje +='<div class="kolo">';
                       opcje+='<a data-kolo="pol">50/50</a>';
                   opcje +='</div>';
                   opcje +='<div class="kolo">';
                       opcje+='<a data-kolo="tel">Telefon</a>';
                   opcje +='</div>';
                   opcje +='<div class="kolo">';
                       opcje+='<a data-kolo="pyt">Pytanie</a>';
                   opcje +='</div>';
               opcje+='</div>';    
          opcje += '</div>';

          return opcje;
        },
      
        makeQuestion: function(param){
            var pytanie = '';

              pytanie+='<div class="pytanie">';
                  pytanie += '<h4>'+ param.Value +'</h4>';

              for(var i=1;i<5;i++){
                  pytanie += '<div class="odpowiedz">';
                      pytanie+='<a class="Button" data-odp="'+i+'">'+ param['A'+ i] +'</a>';
                  pytanie+='</div>';
              }
              pytanie += '</div>';

              return pytanie;
              
              
              
        }
           
    };
   
   Game.init();
   
   });    


