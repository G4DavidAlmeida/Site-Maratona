class SessionController {
  async store (req, res) {
    // Acessa o Banco de Dados (Data Base)
    const { email, password } = req.body

    //  Aqui vai o código verificação do usuário e senha

    return res.redirect('/dashboard')
  }

  // async destroy (req, res) {}
}

module.exports = new SessionController()
