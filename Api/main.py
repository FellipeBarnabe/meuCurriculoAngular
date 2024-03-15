from flask import Flask, request, jsonify
from funcoes.email import enviar_email, monta_html
from http import HTTPStatus

# enviar_email("<h1>Ola!</h1>")

app = Flask(__name__)


@app.route("/processaFormulario", methods=["POST"])
def processa_formulario():
    data = request.get_json()

    if not data:
        return jsonify({"erro": "body não informado."}), HTTPStatus.BAD_REQUEST

    erros = []

    if not "nome" in data:
        erros.append('O atributo [nome] não foi informado.')

    if not "email" in data:
        erros.append('O atributo [email] não foi informado.')

    if not "message" in data:
        erros.append('O atributo [message] não foi informado.')

    if erros:
        return jsonify({"erros": erros}), HTTPStatus.UNPROCESSABLE_ENTITY

    enviar_email(monta_html(data=data))

    return jsonify({"success": True, "message": "Sua mensagem foi enviada."}), HTTPStatus.OK


app.run(debug=True)
