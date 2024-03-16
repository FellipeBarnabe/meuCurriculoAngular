class Email:

    def __init__(self, name: str, email: str, msg: str):
        self.name = name
        self.sender = email
        self.msg = msg

    def get_html_message(self) -> str:
        html = f"<header><b>De: </b><i>{self.sender}</i></header><hr>"
        html += f"<h3>Caro, Fellipe</h3><p>O(a) <b>{self.name}</b> te mandou a seguinte mensagem:</p>"
        html += f"<p><i>\"{self.msg}\"</i></p>"

        return html
