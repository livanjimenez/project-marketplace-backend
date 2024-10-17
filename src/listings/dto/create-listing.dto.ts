import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsNotEmpty,
} from 'class-validator';

export class CreateListingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;
}
