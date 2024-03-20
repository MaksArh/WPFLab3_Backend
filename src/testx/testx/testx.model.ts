import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TestxCreationAttrs {
    participantId: number;
    participantName: string;
    results: string;
}

@Table({tableName: 'testx'})
export class Testx extends Model<Testx, TestxCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.INTEGER, allowNull: false})
    participantId: number;
    @Column({type: DataType.STRING, allowNull: true})
    participantName: string;
    @Column({type: DataType.STRING, allowNull: false})
    results: string;

}