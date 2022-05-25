let url = 'https://diagnoseme-web.azurewebsites.net/';
function predict(controllerName){
    var values = [];
    $(".form-select").each(function () {
        values.push(parseInt($(this).val()));
      }
    );
    
    $.ajax({
        url: url+controllerName,
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        success : function(data){
            modal.style.display = "block";
            if(data === true){
                $('#div-alert').addClass('alert alert-danger');
                $('#h5-alert').text('Your result is Positive');
                $('#alert-icon').addClass('bi bi-emoji-frown');
                $('#pargraph-alert').text('Please make sure to go to the doctor as much as possible, as early detection of the disease increases the chances of recovery.DiagnoseMe family wishes you a speedy recovery.')
            }
            else{
                $('#div-alert').addClass('alert alert-success');
                $('#h5-alert').text('Your result is Negative');
                $('#alert-icon').addClass('bi bi-emoji-smile');
                $('#pargraph-alert').text('We are glad you are not sick. Please do a regular check-up to ensure your health, as early detection of the disease increases the chances of recovery.') 
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        },
        data: JSON.stringify(values)
       }
    );

    clearAllFiled();
}

function clearAllFiled(){
    $(".form-select").each(function (){
        $(this).val("");
    })
}

// popup window
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}