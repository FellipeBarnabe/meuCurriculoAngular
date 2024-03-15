import smtplib
import os

from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def enviar_email(corpo:str):

    load_dotenv()

    host=os.getenv('HOST_EMAIL')
    port=os.getenv('PORT_EMAIL')
    login=os.getenv('LOGIN_EMAIL')
    senha=os.getenv('SENHA_EMAIL')
    email_msg= MIMEMultipart()
    email_msg['Subject'] = 'Formulário de contato do meu currículo'
    email_msg.attach(MIMEText(corpo,'html','utf-8'))
    server = smtplib.SMTP(host,port)

    server.ehlo()
    server.starttls()
    server.login(login,senha)
    server.sendmail(login,'fellipebarnabe.stack@gmail.com',email_msg.as_string())
    server.close()

def monta_html(data):
    return f"<h3>Oi, Fellipe.</h3><p>O(a) {data['nome']} ({data['email']}), te mandou a seuinte mensagem:</p><p>\"{data['message']}\"</p>"
