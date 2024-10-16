import { PartialType } from '@nestjs/mapped-types';
import { CreateListingDto } from './create-listing.dto';

export class UpdateListingDto extends PartialType(CreateListingDto) {
  title: string;
  description: string;
  price: number;
  image: string;
  status: string;
  userId: number;
}
