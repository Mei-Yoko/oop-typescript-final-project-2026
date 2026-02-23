import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// เก็บโมดูล feature
import { PostsModule } from './modules/posts/posts.module';
import { TagsModule } from './modules/tags/tags.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // โหลด env ทั่วระบบ
    }),

    // ถ้าคุณใช้ DB จริง (แต่โจทย์ไฟล์-based หรือ in-memory ก็ได้)
    TypeOrmModule.forRoot({
      type: 'sqlite',        // หรือใช้ in-memory/ไฟล์ JSON ตามโจทย์
      database: ':memory:',
      autoLoadEntities: true,
      synchronize: true,
    }),

    PostsModule,
    TagsModule,
    CategoriesModule,
  ],
  controllers: [],   // AppController ถ้าไม่ต้องการรวมตัวกลาง
  providers: [],
})
export class AppModule {}