import type { CountryDto } from "../dto/directoryDto";
import type { CountryEntry } from "../types";

export const toCountry = (dto: CountryDto): CountryEntry => ({
  country: dto.country,
  region: dto.region,
  routes: dto.routes,
  funding: dto.funding,
  supervisor: dto.supervisor,
  fee: dto.fee
});

export const toCountryDto = (entry: CountryEntry): CountryDto => ({
  country: entry.country,
  region: entry.region,
  routes: entry.routes,
  funding: entry.funding,
  supervisor: entry.supervisor,
  fee: entry.fee
});
