from flask import Flask, request,jsonify
from funcoes.email import enviar_email

enviar_email("<h1>Ola!</h1>")