menu_list_array = ["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];
    
    function getmenu(){
        var htmldata;
        htmldata="<ol class='menulist'>"
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
        }
         htmldata=htmldata+"</ol>"
         document.getElementById("display_menu").innerHTML = htmldata;
    }

    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.push(item);
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){

            htmldata=htmldata+'<div class="card">' +'<img src="https://mail.google.com/mail/u/0?ui=2&ik=0f6e267413&attid=0.4&permmsgid=msg-f:1696637960281479723&th=178bab3c57055a2b&view=att&disp=safe&realattid=f_knbf8q333"/>' + menu_list_array[i] + '</div>'
        }
          htmldata=htmldata+"</section>"
          document.getElementById("display_addedmenu").innerHTML = htmldata;
    }