class Formulario:

    def __init__(self, name: str, sender: str, msg: str):
        self.name = name
        self.sender = sender
        self.msg = msg

    def get_html_message(self) -> str:
        return f"""
        <h3>Caro Fellipe,</h3>
        <p>O(A) <b>{self.name}</b> te mandou a seguinte mensagem:</p>
        <p><i>"{self.msg}"</i></p>
        """
