import smtplib
import os
from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


load_dotenv()

host=os.getenv('HOST_EMAIL')
port=os.getenv('PORT_EMAIL')
login=os.getenv('LOGIN_EMAIL')
senha=os.getenv('SENHA_EMAIL')

server = smtplib.SMTP(host,port)

server.ehlo()
server.starttls()
server.login(login,senha)

server.close()

