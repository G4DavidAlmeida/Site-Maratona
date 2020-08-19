/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Request, Response } from 'express'

import mysql from 'mysql2'

class ProblemsController {
  async store (req: Request, res: Response):Promise<void> {}

  async index (req: Request, res: Response): Promise<void> {}

  async show (req: Request, res: Response): Promise<void> {}

  async update (req: Request, res: Response): Promise<void> {}

  async destroy (req: Request, res: Response): Promise<void> {}
}

export default new ProblemsController()
