import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsModule } from './modules/posts/posts.module';
import { CommentsModule } from './modules/comment/comment.module'; 

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'blog_database.sqlite', 
      autoLoadEntities: true,
      synchronize: true, 
    }),

    PostsModule,
    CommentsModule, 
    
    // TagsModule,       //  ถ้ายังไม่มีไฟล์จริงให้ Comment ไว้ก่อน
    // CategoriesModule, //  ถ้ายังไม่มีไฟล์จริงให้ Comment ไว้ก่อน
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//อันนี้เป็นไฟล์หลักของแอปพลิเคชัน NestJS ที่นำเข้ามอดูลต่าง ๆ เช่น PostsModule และ CommentsModule รวมถึงการตั้งค่าการเชื่อมต่อกับฐานข้อมูล SQLite ผ่าน TypeORM และการตั้งค่า ConfigModule ให้เป็น global เพื่อให้สามารถใช้งานได้ทั่วทั้งแอปพลิเคชัน
//สรุปคือเป็นแบบใช้ SQL