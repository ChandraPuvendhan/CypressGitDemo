// // ***********************************************************
// // This example plugins/index.js can be used to load plugins
// //
// // You can change the location of this file or turn off loading
// // the plugins file with the 'pluginsFile' configuration option.
// //
// // You can read more here:
// // https://on.cypress.io/plugins-guide
// // ***********************************************************

// // This function is called when a project is opened or re-opened (e.g. due to
// // the project's config changing)

// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// //   const ntlmAuth = require('cypress-ntlm-auth/dist/plugin');
// // module.exports = (on, config) => {
// //   config = ntlmfAuth.initNtlmAuth(config);
// //   return config;
// // }

// const fs = require('fs');
// const path = require('path');
// const os = require('os');
// const homedir = require('os').homedir();
// const extension = 'xlsx'
// const DownloadsPath = path.join(homedir, 'Downloads');

// on('task', {
//   readPath () {
// fs.readdir(DownloadsPath, (_, dirlist) => {
//   const latest = dirlist.map(_path => ({ stat: fs.lstatSync(path.join(DownloadsPath, _path)), dir: _path }))
//       .filter(_path => _path.stat.isFile())
//       .filter(_path => extension ? _path.dir.endsWith(`.${extension}`) : 1)
//       .sort((a, b) => b.stat.mtime - a.stat.mtime)
//       .map(_path => _path.dir);
//       return latest[0];
//   //console.log(latest[0]);
// });
// }
// })




// //const fs = require('fs')
// const readXlsxFile = require('read-excel-file/node');
// //var Excel = require('c:/Users/sankarc/AppData/Roaming/npm/node_modules/exceljs')
// on('task', {
//   readExcel (filename) {
//     // var inexcel = new Excel.Workbook();
//     //     inexcel.xlsx.readFile(filename).then(function(){
//     //         var val = inexcel.getCell('A2').value;
//     //         console.log(val)})
//     //if (fs.existsSync(filename)) {
//     // File path.
//     readXlsxFile(filename).then((rows) => {
//       // `rows` is an array of rows
//       // each row being an array of cells.
//       if (fs.existsSync(filename)) {
//         return readXlsxFile(fs.createReadStream(filename)).then((rows) => {
//           //...
//             console.log(rows)
//             var len = rows.length
//             console.log("The length is" + len)
//             for (i = 0, text = "abc"; i < rows.length; i++) {
//               //if(rows[i] == 'SKU'){
//               text += rows[i];}
//               //console.log(text)}
//             //}
//             // rows.forEach((item, index) => {
//             //   console.log(rows[item])
//             // })
//             Object.keys(rows).forEach(function(item, index){
//               //it(`Test Case For: ${page}`, function() {
//                 console.log(rows[item])
//              // })
//            })
// //            1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // loop the outer array
// for (var i = 0; i < rows.length; i++) {
//     // get the size of the inner array
//     var innerArrayLength = rows[i].length;
//     var search = "Serial Number"
//     // loop the inner array
//     for (var j = 0; j < innerArrayLength; j++) {
//         console.log('[' + i + ',' + j + '] = ' + rows[i][j]);
    
//     if(rows[i][j] == search){
//     rows[i][j] = "chandra"
//     console.log('[' + i + ',' + j + '] = ' + rows[i][j]);
//     console.log(rows[0][0])}
//   else
//   console.log('not')
// }
// //console.log('[' + i + ',' + j + '] = ' + rows[i][j]);
// }
// // function exportData() {
// //   alasql("SELECT * INTO XLSX('updated.xlsx',{headers:true}) FROM ? ",[rows]);
// //   console.log(rows);
// // }
// (function() {
//   var asUtf16, downloadExcelCsv, makeExcelCsvBlob, rows, toTsv;

//   asUtf16 = function(str) {
//     var buffer, bufferView, i, val, _i, _ref;
//     buffer = new ArrayBuffer(str.length * 2);
//     bufferView = new Uint16Array(buffer);
//     bufferView[0] = 0xfeff;
//     for (i = _i = 0, _ref = str.length; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
//       val = str.charCodeAt(i);
//       bufferView[i + 1] = val;
//     }
//     return bufferView;
//   };

//   makeExcelCsvBlob = function(rows) {
//     return new Blob([asUtf16(toTsv(rows)).buffer], {
//       type: "text/csv;charset=UTF-16"
//     });
//   };

//   toTsv = function(rows) {
//     var escapeValue;
//     escapeValue = function(val) {
//       if (typeof val === 'string') {
//         return '"' + val.replace(/"/g, '""') + '"';
//       } else if (val != null) {
//         return val;
//       } else {
//         return '';
//       }
//     };
//     return rows.map(function(row) {
//       return row.map(escapeValue).join('\t');
//     }).join('\n') + '\n';
//   };

//   console.log(rows)

//   downloadExcelCsv = function(rows, attachmentFilename) {
//     var a, blob;
//     blob = makeExcelCsvBlob(rows);
//     a = document.createElement('a');
//     a.style.display = 'none';
//     a.download = attachmentFilename;
//     document.body.appendChild(a);
//     a.href = URL.createObjectURL(blob);
//     a.click();
//     URL.revokeObjectURL(a.href);
//     a.remove();
//   };
//   console.log(rows)
//   //rows = [['id', 'name', 'age'], [1, 'John Doe', 43], [2, 'Jane Doe', 42], [3, 'Foo', 3]];

//   exampleDownload = function() {
//     return downloadExcelCsv(rows, 'exported-data.csv');
//   };

// }).call(this);

// function excelformat() {
//   var result_table = [
//       ["Day", "Month", "Year"],
//       ["1", "January", "2016"],
//       ["2", "February", "2016"],
//       ["3", "March", "2016"],
//       ["4", "April", "2016"],
//   ];
//   var lineArray = [];
//   rows.forEach(function(infoArray, index) {
//       var line = infoArray.join(" \t");
//       lineArray.push(index == 0 ? line : line);
//   });
//   var csvContent = lineArray.join("\r\n");
//   var excel_file = document.createElement('a');
//   excel_file.setAttribute('href', 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(csvContent));
//   excel_file.setAttribute('download', 'Visitor_History.xls');
//   document.body.appendChild(excel_file);
//   excel_file.click();
//   document.body.removeChild(excel_file);
// }


//     //         var genArr = Array.from({length:250},(v,k)=>k+1)
//     // cy.log(genArr)
//     // cy.wrap(genArr).each((index) => {
//     //   // cy.get("#button-" + index).click()
//     //   cy.log(index)
//             //console.log(JSON.parse(JSON.stringify(rows)))
//             //cy.writeFile('C:/Users/sankarc/Downloads/Barclays Bank Spain - Non Contractual Change Report_19092019_090986.xlsx',text)
//           //return null
//           }  )}
//       //return console.log(rows);}
//     })
//     // Readable Stream.
// //readXlsxFile(fs.createReadStream(filename)).then((rows) => {
//   //...
//   //console.log(rows)
//   return null
//   }
// })
// }




// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    updateexcel() {

      const fs = require('fs');
      var path = require('path');
      const os = require('os');
      const homedir = require('os').homedir();
      const extension = 'xlsx'
      const DownloadsPath = path.join(homedir, 'Downloads');
      // function getLatestFile({ DownloadsPath, extension }, callback) {
          fs.readdir(DownloadsPath, (_, dirlist) => {
              const latest = dirlist.map(_path => ({ stat: fs.lstatSync(path.join(DownloadsPath, _path)), dir: _path }))
                  .filter(_path => _path.stat.isFile())
                  .filter(_path => extension ? _path.dir.endsWith(`.${extension}`) : 1)
                  .sort((a, b) => b.stat.mtime - a.stat.mtime)
                  .map(_path => _path.dir);
              var excelname = latest[0];
              console.log(latest[0]);
              console.log(DownloadsPath);
              //console.log(path.join(DownloadsPath, excelname));
              // 1. import xlsx
      if(typeof require !== 'undefined') XLSX = require('xlsx');
      
      var filename = path.join(DownloadsPath, excelname)
      
      fs.writeFile('C:/Users/sankarc/CypressWorkspace/cypress/fixtures/Output.txt', filename, (err) => { 
            
          // In case of a error throw err. 
          if (err) throw err; 
      }) 
      function getTimestamp() {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day =`${date.getDate()}`.padStart(2, '0');
        const h =`${date.getHours()}`.padStart(2, '0');
        const m =`${date.getMinutes()}`.padStart(2, '0');
        //const s =`${date.getSeconds()}`.padStart(2, '0');
        
        return `${day}${month}${year}${h}${m}`//${s}`
      }
      // 2. Read the excel file
      var workbook = XLSX.readFile(filename);
      
      // 3. Read the sheet
      var worksheet = workbook.Sheets["Report"];
      
      // 4. Convert the data in the sheet to json array
      var data = XLSX.utils.sheet_to_json(worksheet);
      
      // 5. Read each data item and modify as required
      var newData = data.map(function(record){
          //if(record.Grid == 'testGridupdatedagain') {
            
            // record.Accessory = 'test' + getTimestamp();
              record.Grid = 'Grid' + getTimestamp();

              fs.writeFile('C:/Users/sankarc/CypressWorkspace/cypress/fixtures/OutputGrid.txt', 'Grid' + getTimestamp(), (err) => { 
            
                // In case of a error throw err. 
                if (err) throw err; 
            }) 

          //} else {
              //record.Country = 'test' + getTimestamp();
          //}
          return record;
      });
      
      // 6. Create a new workbook
      var newWorkbook = XLSX.utils.book_new();
      
      // 7. Create a new sheet
      var newWorksheet = XLSX.utils.json_to_sheet(newData);
      
      // 8. Append the sheet to the workbook
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Report");
      
      // 9. Create a new file using the workbook created
      XLSX.writeFile(newWorkbook, "NewWorkbook.xlsx");
      
      // 10. Add the json data to the existing worksheet
      worksheet = XLSX.utils.json_to_sheet(newData);
      
      // 11.a. Append it to the current workbook (In place modification.  Without adding a new sheet.)
      workbook.Sheets["Report"] = worksheet;
      
      // 11.b. Append it to the current workbook (Add a new sheet. If the sheet name provided is already present, it will raise an exception that the worksheet already exists.)
      try {
          XLSX.utils.book_append_sheet(workbook, worksheet, "Report" + getTimestamp());
      } catch (error) {
          console.log("Error Caught : " + error)
      }
      
      // 12. Write it to the file
      XLSX.writeFile(workbook, filename);
      
          }); return null
    }
  })

  on('task', {
    updatecontractexcel() {

      const fs = require('fs');
      var path = require('path');
      const os = require('os');
      const homedir = require('os').homedir();
      const extension = 'xlsx'
      const DownloadsPath = path.join(homedir, 'Downloads');
      // function getLatestFile({ DownloadsPath, extension }, callback) {
          fs.readdir(DownloadsPath, (_, dirlist) => {
              const latest = dirlist.map(_path => ({ stat: fs.lstatSync(path.join(DownloadsPath, _path)), dir: _path }))
                  .filter(_path => _path.stat.isFile())
                  .filter(_path => extension ? _path.dir.endsWith(`.${extension}`) : 1)
                  .sort((a, b) => b.stat.mtime - a.stat.mtime)
                  .map(_path => _path.dir);
              var excelname = latest[0];
              console.log(latest[0]);
              console.log(DownloadsPath);
              //console.log(path.join(DownloadsPath, excelname));
              // 1. import xlsx
      if(typeof require !== 'undefined') XLSX = require('xlsx');
      
      var filename = path.join(DownloadsPath, excelname)
      
      fs.writeFile('C:/Users/sankarc/CypressWorkspace/cypress/fixtures/OutputContract.txt', filename, (err) => { 
            
          // In case of a error throw err. 
          if (err) throw err; 
      }) 
      function getTimestamp() {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day =`${date.getDate()}`.padStart(2, '0');
        const h =`${date.getHours()}`.padStart(2, '0');
        const m =`${date.getMinutes()}`.padStart(2, '0');
        const s =`${date.getSeconds()}`.padStart(2, '0');
        
        return `${day}${month}${year}${h}${m}${s}`
      }
      // 2. Read the excel file
      var workbook = XLSX.readFile(filename);
      
      // 3. Read the sheet
      var worksheet = workbook.Sheets["Report"];
      
      // 4. Convert the data in the sheet to json array
      var data = XLSX.utils.sheet_to_json(worksheet);
      
      // 5. Read each data item and modify as required
      var newData = data.map(function(record){
          //if(record.Grid == 'testGridupdatedagain') {
            
            record.Accessory = 'Accessory' + getTimestamp();

            fs.writeFile('C:/Users/sankarc/CypressWorkspace/cypress/fixtures/OutputAcc.txt', 'Accessory' + getTimestamp(), (err) => { 
            
              // In case of a error throw err. 
              if (err) throw err; 
          }) 

            //   record.Grid = 'test' + getTimestamp();
          //} else {
              //record.Country = 'test' + getTimestamp();
          //}
          return record;
      });
      
      // 6. Create a new workbook
      var newWorkbook = XLSX.utils.book_new();
      
      // 7. Create a new sheet
      var newWorksheet = XLSX.utils.json_to_sheet(newData);
      
      // 8. Append the sheet to the workbook
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Report");
      
      // 9. Create a new file using the workbook created
      XLSX.writeFile(newWorkbook, "NewWorkbook.xlsx");
      
      // 10. Add the json data to the existing worksheet
      worksheet = XLSX.utils.json_to_sheet(newData);
      
      // 11.a. Append it to the current workbook (In place modification.  Without adding a new sheet.)
      workbook.Sheets["Report"] = worksheet;
      
      // 11.b. Append it to the current workbook (Add a new sheet. If the sheet name provided is already present, it will raise an exception that the worksheet already exists.)
      try {
          XLSX.utils.book_append_sheet(workbook, worksheet, "Report" + getTimestamp());
      } catch (error) {
          console.log("Error Caught : " + error)
      }
      
      // 12. Write it to the file
      XLSX.writeFile(workbook, filename);
      
          }); return null
    }
  })

  on('task', {
    timestamp() {
      const date = new Date();
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day =`${date.getDate()}`.padStart(2, '0');
  const h =`${date.getHours()}`.padStart(2, '0');
  const m =`${date.getMinutes()}`.padStart(2, '0');
  //const s =`${date.getSeconds()}`.padStart(2, '0');
  
  return `${day}${month}${year}${h}${m}`//${s}`
    }
  })

  on('task', {
    checkupdatednoncont() {

      const fs = require('fs');
      var path = require('path');
      const os = require('os');
      const homedir = require('os').homedir();
      const extension = 'xlsx'
      const DownloadsPath = path.join(homedir, 'Downloads');
      // function getLatestFile({ DownloadsPath, extension }, callback) {
          fs.readdir(DownloadsPath, (_, dirlist) => {
              const latest = dirlist.map(_path => ({ stat: fs.lstatSync(path.join(DownloadsPath, _path)), dir: _path }))
                  .filter(_path => _path.stat.isFile())
                  .filter(_path => extension ? _path.dir.endsWith(`.${extension}`) : 1)
                  .sort((a, b) => b.stat.mtime - a.stat.mtime)
                  .map(_path => _path.dir);
              var excelname = latest[0];
              console.log(latest[0]);
              console.log(DownloadsPath);
              //console.log(path.join(DownloadsPath, excelname));
              // 1. import xlsx
      if(typeof require !== 'undefined') XLSX = require('xlsx');
      
      var filename = path.join(DownloadsPath, excelname)
      
      fs.writeFile('C:/Users/sankarc/CypressWorkspace/cypress/fixtures/OutputContract.txt', filename, (err) => { 
            
          // In case of a error throw err. 
          if (err) throw err; 
      }) 
      function getTimestamp() {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day =`${date.getDate()}`.padStart(2, '0');
        const h =`${date.getHours()}`.padStart(2, '0');
        const m =`${date.getMinutes()}`.padStart(2, '0');
        const s =`${date.getSeconds()}`.padStart(2, '0');
        
        return `${day}${month}${year}${h}${m}${s}`
      }
      // 2. Read the excel file
      var workbook = XLSX.readFile(filename);
      
      // 3. Read the sheet
      var worksheet = workbook.Sheets["Report"];
      
      // 4. Convert the data in the sheet to json array
      var data = XLSX.utils.sheet_to_json(worksheet);
      
      // 5. Read each data item and modify as required
      var newData = data.map(function(record){
          if(record.Grid == 'test' + getTimestamp()) {
            
            // record.Accessory = 'Accessory' + getTimestamp();
            //   record.Grid = 'test' + getTimestamp();
          } else {
              //record.Country = 'test' + getTimestamp();
          }
          return record;
      });
      
      // 6. Create a new workbook
      var newWorkbook = XLSX.utils.book_new();
      
      // 7. Create a new sheet
      var newWorksheet = XLSX.utils.json_to_sheet(newData);
      
      // 8. Append the sheet to the workbook
      XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Report");
      
      // 9. Create a new file using the workbook created
      XLSX.writeFile(newWorkbook, "NewWorkbook.xlsx");
      
      // 10. Add the json data to the existing worksheet
      worksheet = XLSX.utils.json_to_sheet(newData);
      
      // 11.a. Append it to the current workbook (In place modification.  Without adding a new sheet.)
      workbook.Sheets["Report"] = worksheet;
      
      // 11.b. Append it to the current workbook (Add a new sheet. If the sheet name provided is already present, it will raise an exception that the worksheet already exists.)
      try {
          XLSX.utils.book_append_sheet(workbook, worksheet, "Report" + getTimestamp());
      } catch (error) {
          console.log("Error Caught : " + error)
      }
      
      // 12. Write it to the file
      XLSX.writeFile(workbook, filename);
      
          }); return null
    }
  })

}
