import { IMailProvider, IMessage } from '../data/protocols/email/mailer-provider'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { config as dotenv } from 'dotenv'
import hbs, { NodemailerExpressHandlebarsOptions } from 'nodemailer-express-handlebars'
import path from 'path'
dotenv()

export class MailProvider implements IMailProvider {
  private readonly transporter: Mail
  constructor () {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_SERVER_USER, // generated ethereal user
        pass: process.env.MAIL_SERVER_PASS, // generated ethereal password
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: true
      },
    },
    {
      from: process.env.MAIL_SERVER_USER,
    })
  }

  async execute (message: IMessage): Promise<void> {
    this.configHandlebarOptions(message.template)
    let info =  {
      to: {
        name: message.to.name,
        address: message.to.email
      },
      subject: message.subject,
      template : message.template,
      context: message.context
    }
    await this.transporter.sendMail(info)
  }

  
  configHandlebarOptions = (template: string) => {
    const handlebarOptions : NodemailerExpressHandlebarsOptions = {
      viewEngine: {
        partialsDir: './src/email-templates/',
        layoutsDir: './src/email-templates/',
        defaultLayout : template
      },
      viewPath: path.resolve('./src/email-templates/'),
    }; 
    this.transporter.use('compile', hbs(handlebarOptions))
  }
}