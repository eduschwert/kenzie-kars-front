import {
  iUserResponsePublic,
  iUserResponseWithColor,
} from "../contexts/userContext/interfaces";

export interface iPaginationResult<T> {
  totalPages: number;
  count: number;
  previousPage: string | null;
  nextPage: string | null;
  data: T;
}

export interface iVehicleRequest {
  brand: string;
  model: string;
  year: string;
  fuel: number;
  fipePrice: number;
  color: string;
  price: number;
  description?: string | null | undefined;
  coverImage: string;
  mileage: number;
  images?: Array<string | null | undefined>;
}

export interface iImageResponse {
  id: string;
  imageNumber: number;
  imageUrl: string;
  createdAt: Date;
}

export interface iVehicleResponse extends Omit<iVehicleRequest, "images"> {
  id: string;
  isGoodBuy: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface iVehicleResponseWithImages extends iVehicleResponse {
  images: iImageResponse[];
}

export interface iVehicleResponseWithUser extends iVehicleResponse {
  user: iUserResponsePublic;
}

export interface iVehicleResponseWithUserAndColor extends iVehicleResponse {
  user: iUserResponseWithColor;
}

export interface iVehicleResponseListWithOneUser {
  user: iUserResponsePublic;
  vehicles?: iVehicleResponse[];
}

export interface iCommentResponse {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: iUserResponsePublic;
}

interface iUserWithPhone extends iUserResponsePublic {
  phone?: string | undefined;
}

export interface iVehicleResponseWithUserAndImagesAndComments
  extends iVehicleResponseWithUser {
  user: iUserWithPhone;
  images: iImageResponse[];
  comments: iCommentResponse[];
}

export interface iVehicleResponseWithUserAndImagesAndCommentsPartial
  extends iVehicleResponseWithUser {
  user: iUserWithPhone;
  images?: iImageResponse[];
  comments?: iCommentResponse[];
}

export interface iFilters {
  brand: string;
  model: string;
  color: string;
  minYear: string;
  maxYear: string;
  isGoodBuy: boolean | undefined;
  fuel: number;
  minMileage: string;
  maxMileage: string;
  minPrice: string;
  maxPrice: string;
}

export interface iFilterInput {
  minMileage: string;
  maxMileage: string;
  minPrice: string;
  maxPrice: string;
  minYear: string;
  maxYear: string;
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
