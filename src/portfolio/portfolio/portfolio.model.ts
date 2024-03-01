import {Column, DataType, Model, Table} from "sequelize-typescript";

interface PortfolioCreationAttrs {
    name:string;
    startPrice:number;
    currPrice:number;
    userId:number;

}

@Table({tableName: 'portfolio'})
export class Portfolio extends Model<Portfolio, PortfolioCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    @Column({type: DataType.STRING, allowNull: false})
    name: string;
    @Column({type: DataType.FLOAT, allowNull: false})
    startPrice:number;
    @Column({type: DataType.FLOAT, allowNull: false})
    userId:number;
    @Column({type: DataType.FLOAT, allowNull: false})
    currPrice:number;
}
