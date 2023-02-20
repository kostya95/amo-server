import { Min, IsNotEmpty, IsOptional } from "class-validator";

export class CreateLeadDto {
    @IsNotEmpty({
        message: "Укажите название"
    })
    name: string | null;
    @IsOptional()
    @Min(0,{
        message: "Должно быть больше 0",
    })
    price: number | null;
}