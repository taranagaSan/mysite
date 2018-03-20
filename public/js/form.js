$(document).ready(function () {

    $("#userName, #email, #password, #passwordTrue, #region, #sex").unbind().blur(function () {
        const id = $(this).attr('id');
        const val = $(this).val();

        // switch (id) {
        //
        //     case 'userName':
        //         const standartUserName = /^[a-zA-Zа-яА-Я]+$/;
        //         if (val.length > 2 && val != '' && standartUserName.test(val)) {
        //             $(this).addClass('not_error');
        //             $(this).next('.error-box').text('Принято')
        //                 .css({
        //                     'color': 'green'
        //                 });
        //         } else {
        //             $(this).removeClass('not_error').addClass('error');
        //             $(this).next('.error_box').text('Поле обязательное для заполнения, ' +
        //                 'длина имени должна составлять не менее 2 символов.')
        //                 .css('color','red')
        //                 .animate({'paddingLeft':'10px'},400);
        //         }
        //
        //         break;
        //
        //     case 'password':
        //         let truePassword = /^[a-zA-z0-9]+$/;
        //
        //         if(val.length > 6 && val != '' && truePassword.test(val)){
        //             $(this).addClass('not_error');
        //             $(this).next('.error_box').text('Принято')
        //                 .css({
        //                     'color': 'green'
        //                 });
        //         } else {
        //             $(this).removeClass('not_error').addClass('error');
        //             $(this).next('.error_box').text('Пароль должен содержать больше 6 символов,' +
        //                 'пароль должен содержать латинские буквы.')
        //                 .css('color','red')
        //                 .animate({'paddingLeft':'10px'},400);
        //         }
        //         break;
        //
        //     case 'passwordTrue':
        //
        //         if($('#password').val() === $(this).val()){
        //             $(this).addClass('not_error');
        //             $(this).next('.error_box').text('Принято')
        //                 .css({
        //                     'color': 'green'
        //                 });
        //         } else {
        //             $(this).removeClass('not_error').addClass('error');
        //             $(this).next('.error_box').text('Пароли не совпадают.')
        //                 .css('color','red')
        //                 .animate({'paddingLeft':'10px'},400);
        //         }
        //         break;
        //
        //
        // }
        // console.log(id + val);
    });



    $("#registerForm").submit(function(e) {

        const registerForm = document.forms["registerForm"];
        const userName = registerForm.elements["userName"].value;
        const password = registerForm.elements["password"].value;
        const passwordTrue = registerForm.elements["passwordTrue"].value;
        const email = registerForm.elements["email"].value;
        const country = registerForm.elements["region"].value;
        const sex = registerForm.elements["sex"].value;

        e.preventDefault();
        // if ($('.not_error').length > 0) {
        $.ajax({
            type: "POST",
            url: '/registration',
            cache: false,
            data: JSON.stringify({
                userName: userName,
                password: password,
                email: email,
                country: country,
                sex: sex
            }),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                alert("Thank you!");;
            },
            beforeSend: function () {
                alert("start");
            },
            error: function (error) {
                throw error;
            }

        });
        // return false
    });// console.log(data);
});