class SessionController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * */
  async store (req, res) {
    const { email } = req.body

    console.log(req.body)
    console.log(email)

    return res.redirect('/')
  }

  // async destroy (req, res) {}
}

module.exports = new SessionController()
