from mmap import mmap, ACCESS_READ
from xlrd import open_workbook

print open_workbook('C:\code\python\projects\kbexport\kb.xlsx')

with open('C:\code\python\projects\kbexport\kb.xlsx', 'rb') as f:
	print open_workbook(
		file_contents=mmap(f.fileno(), 0, access=ACCESS_READ))

aString = open('C:\code\python\projects\kbexport\kb.xlsx', 'rb').read()
print open_workbook(file_contents=aString)