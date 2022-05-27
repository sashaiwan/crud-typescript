import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  age: number;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
})

const UserModel = model<IUser>('User', userSchema);

export { UserModel }