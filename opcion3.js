// El consultorio del Dr. Lorenzo T. Mata Lozano tiene como política cobrar la consulta con base en el número de cita, de la siguiente forma:
// • Las tres primeras citas a $200.00 c/u.
// • Las siguientes dos citas a $150.00 c/u.
// • Las tres siguientes citas a $100.00 c/u.
// • Las restantes a $50.00 c/u, mientras dure el tratamiento.
// Se requiere un algoritmo para determinar:
// a) Cuánto pagará el paciente por la cita.
// b) El monto de lo que ha pagado el paciente por el tratamiento.
// Para la solución de este problema se requiere saber qué número de cita se efectuará, con el cual se podrá determinar el costo que tendrá la consulta y cuánto se ha gastado en el tratamiento. Con este análisis se puede determinar que las variables que se van a utilizar son las que se muestran en la tabla

function controlCitas(){

    var numCita = +prompt("Ingrese la cantidad de citas que lleva el paciente");


    var costoCita, costoxCita;

        if(numCita == 1){
            console.log("Cantidad de citas del paciente: "+numCita);
            costoxCita = 200.00;
            console.log("El costo por c/u citas es: "+costoxCita);
            costoCita = numCita*costoxCita;
            console.log("Costo de la cita: "+costoCita);
        }else if(numCita == 2){
            console.log("Cantidad de citas del paciente: "+numCita);
            costoxCita = 200.00;
            console.log("El costo por c/u citas es: "+costoxCita);
            costoCita = numCita*costoxCita;
            console.log("Costo de la cita: "+costoCita);
        }else if(numCita == 3){
            console.log("Cantidad de citas del paciente: "+numCita);
            costoxCita = 200.00;
            console.log("El costo por c/u citas es: "+costoxCita);
            costoCita = numCita*costoxCita;
            console.log("Costo de la cita: "+costoCita);
        }
        while(numCita > 3 && numCita <= 5){
            console.log("Cantidad de citas del paciente: "+numCita);
            costoxCita = 150.00;
            console.log("El costo por c/u citas es: "+costoxCita);
            costoCita = numCita*costoxCita + 600.00;
            console.log("Costo de la cita: "+costoCita);
            numCita += numCita;
        }
        while(numCita > 5 && numCita <= 8){
            console.log("Cantidad de citas del paciente: "+numCita);
            costoxCita = 100.00;
            console.log("El costo por c/u citas es: "+costoxCita);
            costoCita = numCita*costoxCita;
            console.log("Costo de la cita: "+costoCita);
            numCita += numCita;
        }
        while(numCita > 8 && numCita <= 15){
            console.log("Cantidad de citas del paciente: "+numCita);
            costoxCita = 50.00;
            console.log("El costo por c/u citas es: "+costoxCita);
            costoCita = numCita*costoxCita;
            console.log("Costo de la cita: "+costoCita);
            numCita += numCita;
        }
        // do{
        //     console.log("Cantidad de citas del paciente: "+numCita);
        //     costoxCita = 100.00;
        //     console.log("El costo por c/u citas es: "+costoxCita);
        //     costoCita = numCita*costoxCita;
        //     console.log("Costo de la cita: "+costoCita);
        //     numCita += numCita;
        // }while(numCita > 5 && numCita <= 8);

        // while(numCita > 8 && numCita <= 15){
        //     console.log("Cantidad de citas del paciente: "+numCita);
        //     costoxCita = 50.00;
        //     console.log("El costo por c/u citas es: "+costoxCita);
        //     costoCita = numCita*costoxCita;
        //     console.log("Costo de la cita: "+costoCita);
        //     numCita += numCita;
        // }
}

controlCitas();