import { IsNotEmpty} from "class-validator";
export class CreateCompanyDTO {
    @IsNotEmpty()
    name: string
}