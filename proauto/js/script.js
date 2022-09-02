function logar ( ) {

    var  login  =  documento . getElementById ( 'login' ) . valor ;
    var  senha  =  documento . getElementById ( 'senha' ) . valor ;

    if ( login  ==  "admin"  &&  senha  ==  "admin" ) {
        alerta ( 'Sucesso' ) ;
        localização . href  =  "home.html" ;
    } else {
        alert ( 'Usuario ou senhas incorretas' ) ;
    }

}

