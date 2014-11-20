import requests


#Sends a text to any US phone
def send_text(numstring, message):
    message = {"number":numstring, "message":message}
    r = requests.post("http://textbelt.com/text", data=message)
    return r.status_code, r.text