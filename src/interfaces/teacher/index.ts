import { StudentInterface } from 'interfaces/student';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  user?: UserInterface;
  _count?: {
    student?: number;
  };
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
