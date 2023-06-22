import { iFilterConditions } from '../../contexts/productContext/types';
import { api } from '../../services/api';
import { fipeApi } from '../../services/fipeApi';
import { iHandleSelectedOptions } from './types';

export const handleSelectedOption = ({ selectedOption, setActionOverCarBrand, setActionOverCarModel, setActionOverCarColor, setActionOverCarYear, setActionOverCarFuel }: iHandleSelectedOptions) => {
	switch (selectedOption) {
		case 'brand': {
			setActionOverCarModel(false);
			setActionOverCarColor(false);
			setActionOverCarYear(false);
			setActionOverCarFuel(false);
			break;
		}
		case 'model': {
			setActionOverCarBrand(false);
			setActionOverCarColor(false);
			setActionOverCarYear(false);
			setActionOverCarFuel(false);
			break;
		}
		case 'color': {
			setActionOverCarBrand(false);
			setActionOverCarModel(false);
			setActionOverCarYear(false);
			setActionOverCarFuel(false);
			break;
		}
		case 'year': {
			setActionOverCarBrand(false);
			setActionOverCarModel(false);
			setActionOverCarColor(false);
			setActionOverCarFuel(false);
			break;
		}
		case 'fuel': {
			setActionOverCarBrand(false);
			setActionOverCarModel(false);
			setActionOverCarColor(false);
			setActionOverCarYear(false);
			break;
		}
	}
};

export const handleFilterConditions = async (filterConditions: iFilterConditions) => {
	try {
		const response = await api.get('/vehicles', { params: filterConditions });
		return response.data;
	} catch (error) {
		console.error('Error fetching car database', error);
	}
};

export const handleFilterElements = async (filterConditions: iFilterConditions) => {
	if (filterConditions.brand) {
		try {
			const response = await fipeApi.get(`/cars?brand=${filterConditions.brand.toLocaleLowerCase()}`);
            const cars = response.data.map((element: any) => element.name);
            const firstWordsArray: Array<string> = cars?.map((str: string) => str.split(' ')[0]);
			return [...new Set(firstWordsArray)]
		} catch (error) {
			console.error('Error fetching models', error);
		}
	} else {
        return
    }
};

export const handleFilterOptionsYearAndFuel = async (filterConditions: iFilterConditions) => {
    if (filterConditions.brand) {
		try {
			const { data } = await fipeApi.get(`/cars?brand=${filterConditions.brand.toLocaleLowerCase()}`);
            const availableYears: Array<string> = data.map((element: any) => element.year)
            const availableFuel: Array<string> = data.map((element: any) => element.fuel)

            return {'availableYears': [...new Set(availableYears)], 'availableFuel': [...new Set(availableFuel)]}
		} catch (error) {
			console.error('Error fetching models', error);
		}
	} else {
        return
    }
}