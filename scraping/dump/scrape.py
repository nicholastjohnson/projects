import os
import urllib
import urllib2
from bs4 import BeautifulSoup

url = "http://htmldemo.themico7.com/garbini/"
html = urllib2.urlopen(url)
soup = BeautifulSoup(html)

imgs = soup.findAll("img", "src")
print imgs
#for img in imgs:
#	print img.src.split("src=")[1]
#        imgUrl = img.a['href'].split("imgurl=")[1]
#        urllib.urlretrieve(imgUrl, os.path.basename(imgUrl))