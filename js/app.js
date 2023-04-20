$(function(){
    $("#error1").hide();
    $("#error2").hide();
    $("#error3").hide();
    $("#message1").hide();
    $("#message2").hide();
    $("#message3").hide();
$("#Myform").submit(function(e){
 e.preventDefault();

 var day= $("#day").val();
 var month= $("#month").val();
 var year= $("#year").val();
 var input_dat_join=[year,month,day].join('-');
 var input_dat = new Date(input_dat_join);
   // converting date to seconds
var inpu=input_dat.getTime()/1000;    

// getting the year
 var y = new Date().getFullYear();
 var m = new Date().getMonth() + 1;
 var d = new Date().getDate();
 var comp_dat_join=[y,m,d].join('-');
 var comp_dat=new Date(comp_dat_join);
 var comp=comp_dat.getTime()/1000;

 var fin=comp-inpu;
 var comp_fin=fin*1000;
 var comp_dat_fin=new Date(comp_fin);
 // geting the month
 var getMonth=comp_dat_fin.getMonth()+1;
 var getday=comp_dat_fin.getDate()-1;
 var getyear=(y-year)-1;

//    Checking if the input field was fill starts.
if(day == ""){
    $("#error1").show();
    $("#Lday").addClass("text-danger");
     $("#day").css("border-color", "hsl(0, 100%, 67%)");
 }else{
    $("#error1").hide();
    $("#Lday").removeClass("text-danger");
     $("#day").css("border-color", "black");
 }
 if(month == ""){
    $("#error2").show();
    $("#Lmonth").addClass("text-danger");
     $("#month").css("border-color", "hsl(0, 100%, 67%)");
 }else{
    $("#error2").hide();
    $("#Lmonth").removeClass("text-danger");
     $("#month").css("border-color", "black");
 }
 if(year == ""){
    $("#error3").show();
    $("#Lyear").addClass("text-danger");
     $("#year").css("border-color", "hsl(0, 100%, 67%)");
 }else{
    $("#error3").hide();
    $("#Lyear").removeClass("text-danger");
     $("#year").css("border-color", "black");
 }
//    Checking if the input field was fill ends.

// checking for valid days starts
if (day <= 0 || day > 31){
    $("#Lday").addClass("text-danger");
    $("#message1").show();
}else{
    $("#message1").hide();
}
// checking for valid days starts

// checking for valid months starts
if (month <= 0 || month > 12){
    $("#Lmonth").addClass("text-danger");
    $("#message2").show();
}else{
    $("#message2").hide();
}
// checking for valid months ends

// checking for valid year starts
if ( year >= y  || year <= 0 ){
    $("#Lyear").addClass("text-danger");
    $("#message3").show();
}else{
    $("#message3").hide();
}
// checking for valid year ends

// checking for the month of february starts
if( month == 2 && day > 29){
    $("#Lday").addClass("text-danger");
    $("#day").css("border-color", "hsl(0, 100%, 67%)");
    $("#Lmonth").addClass("text-danger");
    $("#month").css("border-color", "hsl(0, 100%, 67%)");
    $("#Lyear").addClass("text-danger");
    $("#year").css("border-color", "hsl(0, 100%, 67%)");
 $("#message1").show();
}else{
 $("#message1").hide();
}
// checking for the month of february ends

// checking for month with 30 days starts
if((month == 4) || (month == 6) || (month == 9)  || (month == 11) && day > 30){
    $("#Lday").addClass("text-danger");
    $("#day").css("border-color", "hsl(0, 100%, 67%)");
    $("#Lmonth").addClass("text-danger");
    $("#month").css("border-color", "hsl(0, 100%, 67%)");
    $("#Lyear").addClass("text-danger");
    $("#year").css("border-color", "hsl(0, 100%, 67%)");
 $("#message1").show();
}else{
 $("#message1").hide();
}
// checking for month with 30 days ends


// calculations starts
//   Year starts
  if(month > 0 ){
    $(".Y").val((y - year) - 1);    
    }else{
        $(".Y").val("--");  
    }
//   Year ends

//   month starts
if(month > 0 ){
    $(".M").val(getMonth);
    }else{
        $(".M").val("--");  
    }
//   month ends

//   day ends
if(month > 0 ){
    $(".D").val(getday);    
    }else{
        $(".D").val("--");  
    }
//   day ends

// calculations ends
});
});