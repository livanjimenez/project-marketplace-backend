import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ListingsService {
  constructor(
    @InjectRepository(Listing)
    private listingsRepository: Repository<Listing>,
  ) {}

  create(createListingDto: CreateListingDto): Promise<Listing> {
    const newListing = this.listingsRepository.create(createListingDto);
    return this.listingsRepository.save(newListing);
  }

  async findAll(): Promise<Listing[]> {
    return this.listingsRepository.find();
  }

  async findOne(id: number): Promise<Listing> {
    const listing = await this.listingsRepository.findOne({ where: { id } });
    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
    return listing;
  }

  async update(
    id: number,
    updateListingDto: UpdateListingDto,
  ): Promise<Listing> {
    const listing = await this.findOne(id);
    const updatedListing = { ...listing, ...updateListingDto };
    return this.listingsRepository.save(updatedListing);
  }

  async remove(id: number): Promise<void> {
    const result = await this.listingsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }
  }
}
