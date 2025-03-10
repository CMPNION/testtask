import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { v4 as uuidv4 } from 'uuid';

export class TodoDto {
    @IsString()
    @IsOptional()
    uuid: string = uuidv4();

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    status: boolean = false;
}