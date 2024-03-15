import json
from jsonschema import validate
from flask import Flask, request,jsonify
from funcoes.email import enviar_email
from http import HTTPStatus

#enviar_email("<h1>Ola!</h1>")

app = Flask(__name__)


@app.route("/processaFormulario", methods = ['POST'])
def xxx():
    data = request.get_json()

    if not data: 
        return jsonify({"erro": "body não informado."}), HTTPStatus.BAD_REQUEST
    
    if hasattr(data, "nome"):
        if hasattr(data, "email"):
            if hasattr(data, "message"):
                return jsonify({"nome":"Fellipe","idade": 34})
                
            return jsonify({"erro": "O atributo \"message\" não foi informado."}), HTTPStatus.UNPROCESSABLE_ENTITY
        
        return jsonify({"erro": "O atributo \"email\" não foi informado."}), HTTPStatus.UNPROCESSABLE_ENTITY
    
    return jsonify({"erro": "O atributo \"nome\" não foi informado."}), HTTPStatus.UNPROCESSABLE_ENTITY

    
    
    


app.run(debug=True)
