import {Column, DataType, Model, Table} from "sequelize-typescript";

interface PapersCreationAttrs {
    name:string;
    startPrice:number;
    currPrice:number;
    buyTIme:Date;
    portfolioId: number;
    amount:number;
}

@Table({tableName: 'papers'})
export class Papers extends Model<Papers, PapersCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    name: string;
    @Column({type: DataType.FLOAT, allowNull: false})
    startPrice:number;
    @Column({type: DataType.FLOAT, allowNull: false})
    currPrice:number;
    @Column({type: DataType.DATE, allowNull: false})
    buyTIme:Date;
    @Column({type: DataType.INTEGER, allowNull: false})
    portfolioId: number;
    @Column({type: DataType.INTEGER, allowNull: false})
    amount:number;
}
