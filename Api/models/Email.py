class Email:

    def __init__(self, name: str, sender: str, msg: str):
        self.name = name
        self.sender = sender
        self.msg = msg

    def get_html_message(self) -> str:
        return f"""
        <header>
            <b>De:</b> <i>{self.sender}</i>
        </header>
        <hr>
        <h3>Caro Fellipe,</h3>
        <p>O(A) <b>{self.name}</b> te mandou a seguinte mensagem:</p>
        <p><i>"{self.msg}"</i></p>
        """
    