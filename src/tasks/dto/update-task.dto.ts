import { TaskStatus } from '../task.model';
import { IsEnum, ValidationArguments } from 'class-validator';

export class UpdateTasStatuskDto {
  @IsEnum(TaskStatus, {
    message: (validationArguments: ValidationArguments) => {
      return `"${validationArguments.value}" is not a valid status`;
    },
  })
  status: TaskStatus;
}
