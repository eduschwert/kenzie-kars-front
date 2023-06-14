export interface iModalAddCarProps {
  toggleModal: () => void;
  // setTasks: Dispatch<SetStateAction<Task[]>>
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}
