import * as xl from "exceljs"
async function write_excel()
 {
    let wb = new xl.Workbook()  ///create workbook obj
    await wb.xlsx.readFile("d:\\TestData.xlsx")  /// load the excel file into the workbook
    let ws = wb.getWorksheet("Sheet1")

    if (ws) 
        {
        ws.addRow(["1001", "manish", "99876543", "manish@gmail.com"])
        ws.addRow(["1002", "pranali", "99876543", "pranali@gmail.com"])
    }
    await wb.xlsx.writeFile("d:\\TestData.xlsx")  ///write data into the file and close
}
write_excel()