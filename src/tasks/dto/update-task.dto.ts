import { TaskStatus } from '../task.entity';
import { IsEnum, ValidationArguments } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: (validationArguments: ValidationArguments) => {
      return `"${validationArguments.value}" is not a valid status`;
    },
  })
  status: TaskStatus;
}
