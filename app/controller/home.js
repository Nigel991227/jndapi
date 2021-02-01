'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const  ctx  = this.ctx;
    const result=await ctx.curl('http://api.28yc.cn/api.php?t=jnd28');
    ctx.status=result.status;
    ctx.set(result.headers);
    ctx.body = result.data;
  }
}

module.exports = HomeController;
