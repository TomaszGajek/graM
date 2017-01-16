//$(function(){
//    
//    $('#QuestionAdd .Button').click(function(){
//
//        var row = $(this).parents('#QuestionAdd');
//        var fields = row.children().find('input[type="text"]');
//
//        var data = {
//            'time' : new Date(),
//            'fields' : {}
//        };
//
//        fields.each(function(){
//            var name = $(this).attr('name');
//            var value = $(this).val();
//            data.fields[name] = value;
//        });
//        
//        var AddedLvl = parseInt(data.fields['Level']);
//        var IterationItemLevel;
//        var CheckIfFirst = 0;
//        
//        var LastItemLevel = parseInt($('ul.ItemList li.Item:last-child input.Level').val());
//
//        $('ul.ItemList').children('.Item').each(function(){
//            
//            IterationItemLevel = parseInt($(this).children().find('input.Level').val());
//            
//            if (LastItemLevel <= AddedLvl) {
//                $(CreateListElement(data)).insertAfter($('ul.ItemList li.Item:last-child'));
//                return false;
//            }
//            
//            if (IterationItemLevel > AddedLvl && CheckIfFirst === 0) {
//                $(CreateListElement(data)).insertBefore($(this));
//                CheckIfFirst++;
//                return true;
//            }
//            else if (IterationItemLevel > AddedLvl && CheckIfFirst > 0) {
//                return false;
//            }
//            
//        });
//        
//        NumerateListItems();
//
//    });


    
    
//    
//    
//    $(document).on('click', '.RemoveItem', function(){
//        if ($(this).hasClass('Active')) {
//            $(this).parents('li.Item').fadeOut(400).delay(200).queue(function(){
//                $(this).remove();
//                NumerateListItems();
//            });
//        }
//        else {
//            $(this).addClass('Active').text('Potwierdź');
//            alert('Potwierdź usunięcie!');
//        }
//    });
//    
//    
//    var ActualValues = [];
//    
//    $(document).on('click', '.EditItem', function(){
//        if ($(this).hasClass('Active')) {
//            $(this).removeClass('Active').next('.SaveItem').hide();
//            $(this).parents('li.Item').children().find('input').addClass('Disabled').attr('disabled', 'disabled');
//            $(this).parents('li.Item').children().find('input').each(function(){
//                $(this).val(ActualValues[$(this).attr('name')]);
//            });
//        }
//        else {
//            $(this).addClass('Active').next('.SaveItem').css('display', 'inline-block');
//            $(this).parents('li.Item').children().find('input').removeClass('Disabled').removeAttr('disabled');
//            $(this).parents('li.Item').children().find('input').each(function(){
//                ActualValues[$(this).attr('name')] = $(this).val();
//            });
//            console.log(ActualValues);
//        }
//    });
//   
//   
//    $(document).on('click', '.SaveItem', function(){
//        $(this).hide().prev('.EditItem').removeClass('Active').parents('li.Item').children().find('input').addClass('Disabled').attr('disabled', 'disabled');
//        alert('Zapisano zmiany');
//    });
//   
//   
//    $('obiekt').attr('attr', 'value');
//    $('obiekt').removeAttr('attr');
//    
//   
//   
//});
//
//
//
//function CreateListElement(element) {
//    
//    var type, clss;
//    
//    var li = '<li class="Item">';
//    
//            li += '<div class="Cell Nr">1</div>'; // Numer
//        
//        for (var name in element.fields) {
//            switch(name) {
//                case 'Level':
//                    type = 'number';
//                    clss = 'Short';
//                    break;
//                case 'Correct':
//                    type = 'number';
//                    clss = 'Short';
//                    break;
//                default:
//                    type = 'text';
//                    clss = '';
//            }
//            li += '<div class="Cell ' + name + '">';
//                li += '<input type="' + type + '" class="' + name + ' ' + clss + ' Text Disabled" value="' + element.fields[name] + '" disabled="disabled" />';
//            li += '</div>'; 
//        }
//        
//            li += '<div class="Cell Edit">'; 
//                li += '<a class="EditItem Button ShortBtn">E</a>';
//                li += '<a class="SaveItem Button ShortBtn">Z</a>';
//                li += '<a class="RemoveItem Button ShortBtn">X</a>';
//            li += '</div>';
//        
//        li += '</li>';
//    
//    return li;
//    
//}
//
//
//
//function NumerateListItems() {
//    
//    var list = $('ul.ItemList');
//    
//    var nr = 1;
//    
//    list.children('.Item').each(function(){
//        $(this).children('.Nr').text(nr);
//        nr++;
//    });
//    
//}
//
//
//$('element').click(function(){
//    if ('costam') {
//        $(this).trigger('click');
//    }
//});


$(document).ready(function(){
    
    $('#QuestionAdd').find('.Button').on('click',function(){
       
        var Add = new QuestionAdd(this);
        
    });
   
    
    
    
});

function QuestionAdd(btn){
    
    btn = $(btn);
    
    this.Fields;
    this.Error=0;
    this.Communicate = 'wszystko ok';
    
    this.Construct = function(){
       this.Fields = this.getData();
       if(this.Validate()===true){
           
       }
       this.ShowComunicate();
    };
    
    
    this.getData = function(){
        
        var Storage = btn.parents('#QuestionAdd');
        console.log(Storage);
        return  Storage.children().find('input[type="text"]');
        
    };
    
    
    //walidacja
    
    this.Validate = function(){
        
        for(var i =0;i<this.Fields.length;i++){
            this.ValidateSingle(this.Fields[i]);
            
        }
        return true;
    };
    
    this.ValidateSingle = function(Field){
        console.log(Field);
    };
    
    this.ShowComunicate = function(){
        Communicates(this.Communicate, 'Success');
    };
    
    
    
    this.Construct();
    
}


function Communicates(content,type,hide ){
    hide = true;
    var communicate = '';
        communicate += '<div style="display: none;" class="Communicate ' + type + '">';
        communicate+='<a class="Close">X</a>';
            communicate+='<div class="In">';
                communicate+= content;
            communicate+='</div>';
        communicate+='</div>';
        
        
        $(communicate).appendTo('body').fadeIn(300);
        
        $(document).on('click','.Close',function(){
           $('.Communicate')
                   .fadeOut(500)
                   .delay(500)
                   .queue(function(){
                       $(this.remove());
                   });
           
        });
        
        if(hide===true){
            $('.Communicate')
                   .delay(2000)
                   .fadeOut(500)
                   .delay(500)
                   .queue(function(){
                       $(this.remove());
                   });
           
        
        }
        
}