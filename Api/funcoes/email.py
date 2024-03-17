import smtplib
import os

from dotenv import load_dotenv
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from models.Formulario import Formulario


def enviar_email(form: Formulario):
    load_dotenv()
    email_msg = MIMEMultipart()
    email_msg["To"] = f"{form.name} <{form.sender}>"
    email_msg["From"] = f"SMTP Meu Curriculo <{os.getenv("RECEIVER_EMAIL")}>"
    email_msg["Subject"] = "Formulário de contato: meu currículo."
    email_msg.attach(MIMEText(form.get_html_message(), "html", "utf-8"))

    server = smtplib.SMTP(os.getenv("HOST_EMAIL"), os.getenv("PORT_EMAIL"))
    server.ehlo()
    server.starttls()
    server.login(os.getenv("LOGIN_EMAIL"), os.getenv("SENHA_EMAIL"))
    server.sendmail(email_msg["To"], email_msg["From"], email_msg.as_string())
    server.close()