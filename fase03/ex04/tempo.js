function tempo(data1, data2, unidade){
 var dataIni = new Date (data1);
 var dataFim = new Date (data2);
 switch(unidade){
    case "dia":
        var dia = Math.abs(dataIni.getTime()-
        dataFim.getTime())/1000/60/60/24;
        return Math.round(dia);
         case "mês" :
              var mes = Math.abs(dataIni.getTime()-
              dataFim.getTime())/1000/60/60/24/30;
              return Math.round(mes);
              default:
         var periodo = Math.abs(dataIni.getTime()-
         dataFim.getTime())/1000/60/60/24/30/12;
         return Math.round(periodo);
 }
}
