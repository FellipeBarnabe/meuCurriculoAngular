from flask import Flask, request, jsonify
from funcoes.email import enviar_email
from http import HTTPStatus
from models.Formulario import Formulario


app = Flask(__name__)
# Configuração do CORS
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:4200')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
   #response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route("/processaFormulario", methods=["POST"])
def processa_formulario():
    data = request.get_json()

    if not data:
        return jsonify({"erro": "body não informado."}), HTTPStatus.BAD_REQUEST

    erros = []

    if not "name" in data:
        erros.append("O atributo [name] não foi informado.")

    if not "email" in data:
        erros.append("O atributo [email] não foi informado.")

    if not "message" in data:
        erros.append("O atributo [message] não foi informado.")

    if erros:
        return (
            jsonify({"success": False, "erros": erros}),
            HTTPStatus.UNPROCESSABLE_ENTITY,
        )

    enviar_email(form=Formulario(data["name"], data["email"], data["message"]))

    return (
        jsonify({"success": True, "message": "Sua mensagem foi enviada."}),
        HTTPStatus.OK,
    )


app.run()
