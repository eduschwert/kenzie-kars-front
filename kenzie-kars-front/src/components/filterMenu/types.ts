import { Dispatch, SetStateAction } from 'react';

export interface iAdvertising {
	advertising: boolean;
	setAdvertising: Dispatch<React.SetStateAction<boolean>>;
}

export interface iHandleSelectedOptions {
	selectedOption: string;
	setActionOverCarBrand: Dispatch<SetStateAction<boolean>>;
	setActionOverCarModel: Dispatch<SetStateAction<boolean>>;
	setActionOverCarColor: Dispatch<SetStateAction<boolean>>;
	setActionOverCarYear: Dispatch<SetStateAction<boolean>>;
	setActionOverCarFuel: Dispatch<SetStateAction<boolean>>;
}