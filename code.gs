function doGet() {
  var html = HtmlService.createHtmlOutputFromFile('page')
      .setTitle('Attendance Tracker');
  return html;
}

function getUserEmail() {
 var userEmail = Session.getActiveUser().getEmail();
 return userEmail;
}

function getCurrentTime() {
 return new Date().getTime();
}

function getManilaTimestamp() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var manilaTimeZone = "Asia/Manila";
  var manilaTimestamp = Utilities.formatDate(new Date(), manilaTimeZone, "HH:mm:ss a");
  scriptProperties.setProperty('manilaTimestamp', manilaTimestamp);
  return manilaTimestamp;
}


function exportData(data) {
 var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 sheet.appendRow(data);
}

function getUserInfo(userEmail) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("allowlist");
  var data = sheet.getDataRange().getValues();

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === userEmail) {
      return {
        fullName: data[i][1],
        cognizantEID: data[i][2],
        wave: data[i][3],
        tower: data[i][4]
      };
    }
  }

  return null;
}




