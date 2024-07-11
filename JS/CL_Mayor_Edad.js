import CL_Persona from "./CL_Persona.js";
export default class CL_Mayor_Edad {
    constructor (){
        this.cont_P = 0;
        this.cont_P_M = 0;
    }

    procesarPersonas(Personas){

        // CONTADOR DE INDIVIDUOS

        this.cont_P = this.cont_P + 1;


        //CONTADOR DE PERSONAS MAYORES DE EDAD

        if(Personas.edad >= 18 ){
            this.cont_P_M = this.cont_P_M + 1;
        }

    }
    calcularPorcentaje(){
        return (this.cont_P_M * 100)/ this.cont_P;
    }
    reporte_Contador(){
        return this.cont_P;
    }
    reporte_Contador_M(){
        return this.cont_P_M;
    }
}