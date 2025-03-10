import { Column, Model, Table, PrimaryKey, Default } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

@Table
export class Todo extends Model {
    @PrimaryKey
    @Default(uuidv4)
    @Column
    uuid: string;

    @Column
    name: string;

    @Column
    description: string;

    @Column
    status: boolean;
}