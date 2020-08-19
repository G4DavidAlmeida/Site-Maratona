/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express'

class SessionController {
  async store (req: Request, res: Response) {
    // Acessa o Banco de Dados (Data Base)
    const { email, password } = req.body

    //  Aqui vai o código verificação do usuário e senha

    return res.redirect('/dashboard')
  }

  // async destroy (req: Request, res: Response): Promise<void> {}
}

export default new SessionController()
