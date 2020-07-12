import { TaskStatus } from "../task.model";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetTasksFilterDto {
    @ApiPropertyOptional()
    status: TaskStatus
    @ApiPropertyOptional()
    search: string
}