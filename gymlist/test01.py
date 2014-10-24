from bs4 import BeautifulSoup
import requests

url = 'http://usgyms.net/'

state = 'Georgia'

r = requests.get(url + state + ".htm")

data = r.content

soup = BeautifulSoup(data)

soup.find_all("td")