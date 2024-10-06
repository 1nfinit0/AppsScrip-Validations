function getSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  var nameSheet = sheet[0].getName();
  var mainSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nameSheet)
  return mainSheet
}

function takeTheLastTuple() {
  var mainSheet = getSheet();
  var lastRow = mainSheet.getLastRow();
  var lastColumn = mainSheet.getLastColumn();
  var lastTuple = mainSheet.getRange(lastRow, 1, 1, lastColumn).getValues()[0];
  return lastTuple;
}

function validateDNI(dni = takeTheLastTuple()) {
  var dni = dni[1];
  if (!(typeof dni === 'number' && dni.toString().length === 8)) {
    return false;
  }
  return true
}

function validateEmail(lastTuple){
  var email = lastTuple[2];
  email = email.toLowerCase();
  patron = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|hotmail\.com)$/;
  if (!(patron.test(email))){
    return false;
  }
  return true
}

function validateHC(lastTuple){
  var hc = lastTuple[6];
  if (hc < 60){
    return false
  }
  return true
}

function validateEmployment(lastTuple){
  var areEmployee = lastTuple[7];
  if (!(areEmployee == 'ACTIVO')){
    return false
  }
  return true
}


function sendApprovalEmail(emailAddress, lastTuple) {
  var subject = "Aprobación de Crédito";
  var body = "Estimado cliente,\n\n" +
             "Nos complace informarle que su solicitud de crédito ha sido aprobada.\n\n" +
             "Detalles del cliente:\n" +
             "DNI: " + lastTuple[1] + "\n" +
             "Correo: " + lastTuple[2] + "\n" +
             "Historial crediticio: " + lastTuple[6] + "\n" +
             "Estado laboral: " + lastTuple[7] + "\n\n" +
             "Atentamente,\nEl equipo de créditos";
  MailApp.sendEmail(emailAddress, subject, body);
}

function isAproved(lastTuple) {
  if (validateDNI() && 
      validateEmail(lastTuple) && 
      validateHC(lastTuple) && 
      validateEmployment(lastTuple)) {
    sendApprovalEmail("noggnzzz@gmail.com", lastTuple);
    return true;
  }
  MailApp.sendEmail("noggnzzz@gmail.com", "Aprobación", "Sin aprobación")
  return false;
}

// Salida: 5,87654321,DVJ@GMAIL.COM,20,2,22,81.81818181818183,ACTIVO

Logger.log("envío de email: "+isAproved(takeTheLastTuple()));
