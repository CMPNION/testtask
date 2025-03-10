import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status?: boolean;
}