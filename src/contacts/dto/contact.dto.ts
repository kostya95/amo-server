import { IsNotEmpty } from "class-validator";
export class CreateContactDTO {
    @IsNotEmpty()
    name: string;
    first_name: string | null;
    last_name: string | null;
}