hostname = 'http://127.0.0.1:3000'

$(document).ready(() => {
    users.list();

});



var users = {

    list() {
        $.ajax({
            url: hostname + '/users',
            type: 'GET',
            success: data => {
                var tx = '';
                tx += '<div class="insert" onclick="user.insert()">Inserir</div>';
                data.forEach(element => {
                    tx += '<div class="user">';
                    tx += '< div class="title">' `${element.name} - ${element.email} - ${element.telefone} </div>`;
                        tx += `<div class"action">;
                            tx += '<div class="action" onclick="user.update('${element.userId}',\'' ${element.nome} '\')">Editar</div>';
                            tx += '<div class="action" onclick="user.delete(' ${element.userId}')">Excluir</div>';
                        tx += '</div>';
                    tx += '</div>';
                });
                $('#main').html(tx);
            }
        });
        
    }
    
});

};