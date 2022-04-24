import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HellosController {
  public async hello({ inertia }: HttpContextContract) {
    return inertia.render('Hello', { message: 'Hello world' })
  }

  public async about({ inertia }: HttpContextContract) {
    return inertia.render('About/About', { message: 'about' })
  }
}
