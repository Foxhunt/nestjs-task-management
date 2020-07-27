import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { ApiTags, ApiSecurity, ApiHeader } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RequestBodyObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

@ApiTags('auth')
@ApiSecurity('Authorisation')
@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authservice.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authservice.signIn(authCredentialsDto);
  }

  @Post('/test')
  @ApiHeader({ name: 'Authorisation' })
  @UseGuards(AuthGuard())
  test(@Req() req: RequestBodyObject): void {
    console.log(req);
  }
}
