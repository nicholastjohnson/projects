from xlrd import colname, open_workbook, XL_CELL_TEXT, XL_CELL_NUMBER
import io
import os

sheet = open_workbook('C:\code\python\projects\kbexport\kb.xlsx').sheet_by_index(0)
row = 0
nrows = 666

while row < nrows:
	row += 1
	article = (u''.join(sheet.cell(row,0).value).encode('utf-8').strip())
	title = "output/"+article
	
	with open(title+".html", "w") as f:

		with open("files.html", "a") as t:
			t.write('<a href="/'+'kb/'+article+".html"+'">'+(u''.join((sheet.cell(row, 1).value).encode('utf-8').strip()))+'</a>'+'<br>')
			t.close()
		
		f.write("<h1>"+(u''.join((sheet.cell(row, 1).value).encode('utf-8').strip()))+"</h1>")
		f.write("<h2>"+(u''.join((sheet.cell(row, 0).value).encode('utf-8').strip()))+"</h2>")
		
		col = 2
		ncol = 8

		while col < ncol:
			head = sheet.cell(0, col).value
			cont = sheet.cell(row, col).value
			
			f.write("<h3>"+(u''.join((head)).encode('utf-8').strip()+"</h3>"))
			f.write("<p>"+(u''.join((cont)).encode('utf-8').strip())+"</p>")
		
			col += 1

		f.close()