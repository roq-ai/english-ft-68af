import { UserInterface } from 'interfaces/user';
import { TeacherInterface } from 'interfaces/teacher';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  user_id?: string;
  teacher_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  teacher?: TeacherInterface;
  _count?: {};
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  teacher_id?: string;
}
