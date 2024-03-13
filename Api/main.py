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
email_msg= MIMEMultipart()
corpo='<h1>FUNCIONOU!</h1>'
server = smtplib.SMTP(host,port)
email_msg['Subject'] = 'teste, teste, teste'
email_msg.attach(MIMEText(corpo,'html'))

server.ehlo()
server.starttls()
server.login(login,senha)
server.sendmail(login,'fellipebarnabe.stack@gmail.com',email_msg.as_string())
server.close()
