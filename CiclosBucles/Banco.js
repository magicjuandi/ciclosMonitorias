let user = "jairo";
let pass = 124;
let cuenta = 456;
let opcion = 1;
if (user == "jairo" & pass == 123){
    console.log("Ha entrado correctamente")
    if(cuenta == 456){
        console.log("Entro correctamente a la cuenta")
        console.log("1. consulta, 2. retirar, 3. consignar")
        switch(opcion){
            case 1:{
                console.log("Entro a consulta, tiene " + 500 + " de dinero");
                break;
            }
            case 2:{
                console.log("Entro a retirar, usted retiro " + 500 + " de dinero");
                break;
            }
            case 3:{
                console.log("Entro a consignar, usted consigno " + 1000 + " de dinero");
                break;
            }
        }
    }else{
        console.log("no ingreso bien la cuenta")
    }
}else{
    console.log("Usuario o contraseña incorrectos")
}
