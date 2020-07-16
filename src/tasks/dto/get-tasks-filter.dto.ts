import { TaskStatus } from '../task.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsEnum,
  ValidationArguments,
  IsNotEmpty,
} from 'class-validator';

export class GetTasksFilterDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: (validationArguments: ValidationArguments) => {
      return `"${validationArguments.value}" is not a valid status`;
    },
  })
  status: TaskStatus;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
