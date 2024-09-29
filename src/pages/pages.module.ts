import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [HomeController],
  providers: [],
})
export class PagesModule {}
