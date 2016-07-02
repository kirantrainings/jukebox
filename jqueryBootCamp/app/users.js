$(document).ready(function () {
    bindUsersData();
    bindEvents();
});

function bindEvents() {
    $('#btnToggle').bind('click', function () {
        $('#users').children().children().last().toggle();

        if ($(this).hasClass("btn-danger")) {
            $(this).removeClass("btn-danger");
        } else {
            $(this).addClass("btn-danger");
        }
    })
}

function bindUsersData() {
    //call the data.json file to fetch the list of users
    $.ajax({
        url: "app/data.json",
        method: "GET",
        success: function (response) {
            var users = response.users;
            $.each(users, function (index, user) {
                buildRowForUser(index, user);
            });

        },
        error: function (errorResponse) {
            console.log(errorResponse);
        }
    });


}

function buildRowForUser(index, user) {
    var row = $('<tr>');
    var columForSNo = $("<td>");
    var columnForUserName = $("<td>");
    var columnForEmail = $("<td>");
    columForSNo.text(index);
    columnForUserName.text(user.username);
    columnForEmail.text(user.email);
    row.append(columForSNo);
    row.append(columnForUserName);
    row.append(columnForEmail);
    $('#users').append(row);
}
