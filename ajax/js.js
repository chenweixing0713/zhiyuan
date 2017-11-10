function aa(){
obj = $.ajax({
            url: 'test.json',
            type: 'get',
            dataType: 'json',
            success: function (user) {
                //字符串拼接
                var htmlNodes = '';
                for(var i = 0; i < user.length; i ++){
                    htmlNodes += '<figure><div class="img"><img width="120" height="120" src="' + user[i].images + '"></div><figcaption><strong>' + user[i].name + '</strong><p>' + user[i].caption + '</p></figcaption></figure>';  
                }

                $('#container').append(htmlNodes);
            }
        });
console.log(obj);
return obj;
}








