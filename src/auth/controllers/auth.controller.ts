
import { Post, Body, Req, Controller } from '@nestjs/common'
import { AuthService } from '../services/auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/signin')
  async signin(@Body() body, @Req() request) {
    const { username, password } = body
    return await this.authService.auth(username, password)
  }
}