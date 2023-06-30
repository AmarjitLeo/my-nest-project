import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from './schema/student.schema';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://amarjeetsingh:hl70HFIFMEhPwgJl@cluster0.tjqtwkl.mongodb.net/?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
