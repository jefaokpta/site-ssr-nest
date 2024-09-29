import { Module } from '@nestjs/common';
import { PagesModule } from './pages/pages.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PagesModule, UserModule],
  providers: [],
})
export class AppModule {}
