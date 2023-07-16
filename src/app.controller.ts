import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('pages/index.hbs')
  root() {
    return { message: "hello world!",
              people: [
                "Yehuda Katz",
                "Alan Johnson",
                "Charles Jolley",
              ],
              person: {
                firstname: "Yehuda",
                lastname: "Katz",
              },
              nav: [
                { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
                { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" }
              ]
        };
  }
  @Get('hello')
  xyz(){
    return this.appService.getHello();
  }
}
