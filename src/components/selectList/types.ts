import { Dispatch, SetStateAction } from 'react';

export interface ISelectProps {
	open: boolean;
	setActionOverCarBrand: Dispatch<SetStateAction<boolean>>;
	setActionOverCarModel: Dispatch<SetStateAction<boolean>>;
	setActionOverCarColor: Dispatch<SetStateAction<boolean>>;
	setActionOverCarYear: Dispatch<SetStateAction<boolean>>;
	setActionOverCarFuel: Dispatch<SetStateAction<boolean>>;
	arrayMap: Array<string>;
	primary: string;
	onClickButton: () => void;
}