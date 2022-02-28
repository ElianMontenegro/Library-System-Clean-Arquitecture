import { IRentalEntenty } from "src/domain/entities/rental";
export interface FindRentWithStatusStandarRepository {
    execute: () => Promise<IRentalEntenty[]>
}