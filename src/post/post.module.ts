import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerMiddleware } from '../commons/middlewares';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [HttpModule],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('post');
  }
}
