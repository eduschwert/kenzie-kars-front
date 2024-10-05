import {
  iPaginationResult,
  iVehicleRequest,
  iVehicleResponseWithImages,
} from "../../interfaces";

export interface iVehicleUpdate extends iVehicleRequest {
  isActive: boolean;
}

export interface iSellerProviderProps {
  sellerVehicles: iPaginationResult<iVehicleResponseWithImages[]> | null;
  setSellerVehicles: React.Dispatch<
    React.SetStateAction<iPaginationResult<iVehicleResponseWithImages[]> | null>
  >;
  selectedVehicle: iVehicleResponseWithImages | null;
  setSelectedVehicle: React.Dispatch<
    React.SetStateAction<iVehicleResponseWithImages | null>
  >;
  createVehicle: (formData: iVehicleRequest) => void;
  loading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  getAllSellerVehicles: () => void;
  updateVehicle: (formData: iVehicleUpdate, vehicleId: string) => void;
  deleteVehicle: (vehicleId: string) => void;
}
