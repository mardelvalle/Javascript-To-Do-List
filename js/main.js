//expect: being able to add items, delete individual items, and several selected or all
// do: add, edit, delete
// see: three buttons, changes to the list for selection,input field
// var toDoList=[]
// var deleteButton = $('<button />').addClass('deleteButton').text('Delete');
// var editButton = $('<button />').addClass('editButton').text('Edit');
// set up the document
$(document).ready(function(){
  // when inputs are filled out and submit selected the following event will happen
  var edit=0;
 $('#form').on('submit', function(event){
   event.preventDefault();


    var inputInfo = $('#inputId').val()
    //console.log(inputInfo)
    var listitem = $('<li><span id="'+edit+'">'+inputInfo+'</span><input class="field view" type="text" value="'+inputInfo+'"><button class="deleteButton">remove</button>'+'<button class="editButton">edit</button>'+'</li>')
    edit=edit+1;
    $('ol').append(listitem)
    $("#inputId")[0].value = " ";
    $(listitem).children("input")
      $("input").keydown(function(e){
        if(e.which==13){
          // inputInfo=$("input").val()
          // $("span").text(inputInfo)
        }
      });

      $(".editButton").off("click")

      $(".editButton").on("click", function(){
        $(this).parent().children("input").toggleClass("view")
        inputInfo=$(this).parent().children("input").val()
        $(this).parent().children("span").text(inputInfo);
       $(this).parent().children("span").toggleClass("view")

  // on enter input will override the previous value of the span with the value entered in the input t
      })

     $(".deleteButton").on("click",function(){
     $(this).parent().remove();
    });
    // $(".deleteButton").hide();
  })
  // listitem.find(".editButton").click(function(){
  //   var current=listitem.text()
  //   $(".editButton").toggleClass(".view")
  // })
//     listitem.find(".editButton").click(function(){
//       var current=listitem.text()
//     //   $(.editButton).on("click",function(){
//     //     $(".field").toggleClass("view")
//     //
//     // }
// )
//   });

  // $(inputInfo).focusout(function(event){
  //   event.preventDefault()
  // $(this).hide();  $(this).siblings("#display").show().text($(this).val());
  // });
  $(document).on("click","li",function(){
    $(this).toggleClass("strike");
    });
    $("#Erase").on("click",function(){
    $(".strike").remove();
    });
    $("#Clear").on("click",function(){
      $("li").remove();
    });
});



  // $(document).on("mouseover","li",function(){
  //   event.stopPropagation();
  //   // $('li').append("<button>"+edit+"</button>");
  //   // $('li').append("<button>"+remove+"</button>");
  // });
  // //  if (text !== '') {
  // //    $('input').hide(0, function() {
  // //    $(this).parent().html(text + '<button>delete</button>');
  // //    $(this).remove();
  // // });
  // $(document).on("mouseover","li",function(){
  //   event.stopPropagation();
  //   editButton.appendTo('ul#inputInfo li');
  //
  //
  //   // $('li').append("<button>"+edit+"</button>");
  //   // $('li').append("<button>"+remove+"</button>");
  // });

// $("button:first-of-type").on("click",(function(){
// $|

// })
// });

// $(document).ready(function){
// $("form:last-of-type").on("click",function(){
//   var text = $(#input).val()
// $("ul").prepend("<li>"+el+"</li>");
// event.preventDefault(); good stuff here
// })
// ;})

// $("button").click(function(){
//   if($("input").val().length> 0 && $("input").val()!="New task"){
//     // think of this as the length being the length of what is being entered the 0 is saying that if there is nothing in the field then nothing will happen
//
//   }
//   //
// })
//
// $('button').click(function(){
//   if ($('input').val().length > 0 && $('input').val() != 'New task') {
//     var newTask = '<li class="list">';
//     newTask += $('input').val() + '</li>';
//     $('.tasks').append(newTask);
//     $('input').val('New task');
//   } else {
//     $('input').val('New task');
//
//   }
//
// }); // end button click
//
// $('input').click(function(){
//   $(this).val('');
// }); // end input click
//
//
// $('ul').on('click', 'li', function() {
//   $(this).hide();
// });


  // var item = document.getElementById('toDoInput').value
  // var text = document.createTextNode(item) /* we will be getting the value from the input and entering it in this new v text*/
  // var newItem = document.CreateElement("li")
// })
// ;})
// // function todolist() {
//     var item = document.getElementById('toDoInput').value

//     /* we will be getting the value from the input and entering it in this new v text*/
//     var newItem = document.CreateElement("li")
//     newItem.appendChild(text) /* this appends what ever text entered into the li to create the list*/
//     document.getElementsById('toDoList').appendChild(newItem) /* appends li to ol */
//
// }
