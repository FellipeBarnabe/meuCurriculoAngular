import smtplib
import os

from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from models.Email import Email


def enviar_email(email: Email):

    load_dotenv()

    host = os.getenv("HOST_EMAIL")
    port = os.getenv("PORT_EMAIL")
    login = os.getenv("LOGIN_EMAIL")
    senha = os.getenv("SENHA_EMAIL")
    email_msg = MIMEMultipart()
    email_msg["Subject"] = "Formulário de contato: meu currículo."
    email_msg.attach(MIMEText(email.get_html_message(), "html", "utf-8"))
    server = smtplib.SMTP(host, port)

    print(email.sender)

    server.ehlo()
    server.starttls()
    server.login(login, senha)
    server.sendmail(email.sender, "marconemendonca@gmail.com", email_msg.as_string())
    server.close()
