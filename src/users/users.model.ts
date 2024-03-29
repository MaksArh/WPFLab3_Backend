import {Column, DataType, Table, Model} from "sequelize-typescript";

interface UserCreationAttrs {
    name: string;
    mail: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    name: string;
    @Column({type: DataType.STRING, allowNull: false, unique:true})
    mail: string;
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
}
