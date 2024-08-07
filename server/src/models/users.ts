import { Schema, model } from 'mongoose';

export type TUser = {
  name: string;
  role: 'user' | 'admin' | 'superuser';
  email: string;
  passport: string;
  password: string;
};

const UserSchema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passport: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default model<TUser>('user', UserSchema);
