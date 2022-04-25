let url = 'http://localhost:8080/';
function predict(controllerName){
    var values = [];
    $(".form-select").each(function () {
        values.push(parseInt($(this).val()));
      }
    );
    console.log(url+controllerName);
    console.log(JSON.stringify(values));
    
    $.ajax({
        url: url+controllerName,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success : function(data){
            console.log(data);
            if(data === true)
                $('#positive-alert').css({'opacity': 100});
            else
                $('#negative-alert').css({'opacity': 100});
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        },
        data: JSON.stringify(values)
       }
     )
}