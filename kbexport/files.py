from xlrd import colname, open_workbook, XL_CELL_TEXT, XL_CELL_NUMBER
import io
import os

sheet = open_workbook('C:\code\python\projects\kbexport\kb.xlsx').sheet_by_index(0)
row = 0
nrows = 665

while row < nrows:
	row += 1
	with open("files.txt", "w") as a:
		for path, subdirs, files in os.walk(r'C:\code\python\projects\kbexport\output'):
			for filename in files:
				f = os.path.join(filename)
				a.write('<a href="/'+str(f)+'">'+(u''.join((sheet.cell(row, 1).value).encode('utf-8').strip()))+'</a>'+'\n')