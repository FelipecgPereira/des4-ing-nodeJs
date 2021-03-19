import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

      if(!email|| !name){
        throw new Error("User Exists!");
      }
      
      const userExist = this.usersRepository.findByEmail(email);
      if(userExist){
        throw new Error("User Exists!");
      }

      return this.usersRepository.create({email,name});
  }
}

export { CreateUserUseCase };
