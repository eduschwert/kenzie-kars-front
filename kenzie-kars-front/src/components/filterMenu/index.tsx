import { List, Box, Typography, Slider } from '@mui/material';
import { AdvertisingButton, CancelFilters, CancelFiltersNarrow, HomePageNav, stylesItems } from './style';
import { useContext, useEffect, useState } from 'react';
import { SelectList } from '../selectList';
import { iAdvertising } from './types';
import { StyledButton } from '../../styles/buttons';
import { StyledText } from '../../styles/tipography';
import { start } from '@popperjs/core';
import { fipeApi } from '../../services/fipeApi';
import { handleFilterConditions, handleFilterElements, handleFilterOptionsYearAndFuel, handleSelectedOption } from './functions';
import { ProductContext } from '../../contexts/productContext';

export const FilterMenu = ({ advertising, setAdvertising }: iAdvertising) => {
	const { filterConditions } = useContext(ProductContext);

    // States to get values for Nested List
	const [brands, setBrands] = useState([] as Array<string>);
	const [models, setModels] = useState([] as Array<string>);
	const [year, setYear] = useState([] as Array<string>);
	const [fuel, setFuel] = useState([] as Array<string>);

    const carColors = ['Amarelo', 'Azul', 'Branco', 'Cinza', 'Dourado', 'Prata', 'Preto', 'Rosa', 'Verde', 'Vermelho', 'Vinho'];

    // Getting Brands from Fipe API
	useEffect(() => {
		const fetchBrands = async () => {
			try {
				const response = await fipeApi.get('/cars');
				const brandsRes = Object.keys(response.data);
				const brands = brandsRes.map((str) => str.charAt(0).toUpperCase() + str.slice(1));
				setBrands(brands);
			} catch (error) {
				console.error('Error fetching car database', error);
			}
		};
		fetchBrands();
	}, []);

    // Getting Models from Fipe API
	useEffect(() => {
        const callbackHandleFilterElements = async () => {
            const filteredCars: Array<string> | void = await handleFilterElements(filterConditions);
			filteredCars && setModels(filteredCars.map((str: string) => str.charAt(0).toUpperCase() + str.slice(1)));
		};
		callbackHandleFilterElements();
	}, [filterConditions]);

    // Getting Year and Fuel from Fipe API
	useEffect(() => {
        const possibleCarFuel = ['Flex', 'Híbrido', 'Elétrico'];

        const callbackHandleFilterOptionsYearAndFuel = async () => {
            const yearAndFuel = await handleFilterOptionsYearAndFuel(filterConditions);
            console.log(yearAndFuel?.availableYears)
            if (yearAndFuel) {
                setYear(yearAndFuel.availableYears)
                const fuelNames = yearAndFuel.availableFuel.map((eachFuel: string) => possibleCarFuel[Number(eachFuel) - 1])
                setFuel(fuelNames)
            }
		};
		callbackHandleFilterOptionsYearAndFuel();
	}, [filterConditions])

    // Getting vehicles from backend
    useEffect(() => {
        handleFilterConditions(filterConditions);
    }, [filterConditions]);

    // Material UI Nested List States to handle Actions
	const [actionOverCarBrand, setActionOverCarBrand] = useState<boolean>(false);
	const [actionOverCarModel, setActionOverCarModel] = useState<boolean>(false);
	const [actionOverCarColor, setActionOverCarColor] = useState<boolean>(false);
	const [actionOverCarYear, setActionOverCarYear] = useState<boolean>(false);
	const [actionOverCarFuel, setActionOverCarFuel] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState<string>('');

	const [kmValue, setKmValue] = useState<number[]>([0, 100]);
	const [priceValue, setPriceValue] = useState<number[]>([10, 1000]);

	const maxPrice = 1000.0;
	const minPrice = 10.0;
	const minKm = 0;
	const maxKm = 100;

	const kmMarks = [
		{ value: minKm, label: `${minKm}` },
		{ value: maxKm, label: `${maxKm}` },
	];

	const priceMarks = [
		{ value: minPrice, label: `${minPrice}` },
		{ value: maxPrice, label: `${maxPrice}` },
	];

	const handleClickBrand = () => {
		setActionOverCarBrand((actionOverCarBrand) => !actionOverCarBrand);
		setSelectedOption('brand');
	};

	const handleClickModel = () => {
		setActionOverCarModel((actionOverCarModel) => !actionOverCarModel);
		setSelectedOption('model');
	};

	const handleClickColor = () => {
		setActionOverCarColor((actionOverCarColor) => !actionOverCarColor);
		setSelectedOption('color');
	};

	const handleClickYear = () => {
		setActionOverCarYear((actionOverCarYear) => !actionOverCarYear);
		setSelectedOption('year');
	};

	const handleClickFuel = () => {
		setActionOverCarFuel((actionOverCarFuel) => !actionOverCarFuel);
		setSelectedOption('fuel');
	};

	const handleSliderKmChange = (e: any, newKmValue: number[] | number) => {
		Array.isArray(newKmValue) && setKmValue(newKmValue);
	};

	const handleSliderPriceChange = (
		e: any,
		newPriceValue: number[] | number
	) => {
		Array.isArray(newPriceValue) && setPriceValue(newPriceValue);
	};

	useEffect(() => {
		handleSelectedOption({
			selectedOption,
			setActionOverCarBrand,
			setActionOverCarModel,
			setActionOverCarColor,
			setActionOverCarYear,
			setActionOverCarFuel,
		});
	}, [selectedOption]);

	return (
		<>
			<HomePageNav>
				<CancelFiltersNarrow>
					<StyledText tag="p" textStyle={'heading-7-500'}>
						{`Filtros`}
					</StyledText>
					<StyledButton buttonColor={'link'} buttonStyle='sm'>
						{`X`}
					</StyledButton>
				</CancelFiltersNarrow>
				<List
					component="ul"
					disablePadding
					className="NavNestedListTitle"
				>
					<SelectList
						open={actionOverCarBrand}
						setActionOverCarBrand={setActionOverCarBrand}
						setActionOverCarModel={setActionOverCarModel}
						setActionOverCarColor={setActionOverCarColor}
						setActionOverCarYear={setActionOverCarYear}
						setActionOverCarFuel={setActionOverCarFuel}
						arrayMap={brands}
						primary="Marca"
						onClickButton={handleClickBrand}
					/>
				</List>
				<List component="ul" disablePadding sx={stylesItems}>
					<SelectList
						open={actionOverCarModel}
						setActionOverCarBrand={setActionOverCarBrand}
						setActionOverCarModel={setActionOverCarModel}
						setActionOverCarColor={setActionOverCarColor}
						setActionOverCarYear={setActionOverCarYear}
						setActionOverCarFuel={setActionOverCarFuel}
						arrayMap={models}
						primary="Modelo"
						onClickButton={handleClickModel}
					/>
				</List>
				<List component="ul" disablePadding sx={stylesItems}>
					<SelectList
						open={actionOverCarColor}
						setActionOverCarBrand={setActionOverCarBrand}
						setActionOverCarModel={setActionOverCarModel}
						setActionOverCarColor={setActionOverCarColor}
						setActionOverCarYear={setActionOverCarYear}
						setActionOverCarFuel={setActionOverCarFuel}
						arrayMap={carColors}
						primary="Cor"
						onClickButton={handleClickColor}
					/>
				</List>
				<List component="ul" disablePadding sx={stylesItems}>
					<SelectList
						open={actionOverCarYear}
						setActionOverCarBrand={setActionOverCarBrand}
						setActionOverCarModel={setActionOverCarModel}
						setActionOverCarColor={setActionOverCarColor}
						setActionOverCarYear={setActionOverCarYear}
						setActionOverCarFuel={setActionOverCarFuel}
						arrayMap={year}
						primary="Ano"
						onClickButton={handleClickYear}
					/>
				</List>
				<List component="ul" disablePadding sx={stylesItems}>
					<SelectList
						open={actionOverCarFuel}
						setActionOverCarBrand={setActionOverCarBrand}
						setActionOverCarModel={setActionOverCarModel}
						setActionOverCarColor={setActionOverCarColor}
						setActionOverCarYear={setActionOverCarYear}
						setActionOverCarFuel={setActionOverCarFuel}
						arrayMap={fuel}
						primary="Combustível"
						onClickButton={handleClickFuel}
					/>
				</List>
				<Box width="100%" mx="auto" mt={3} ml={2}>
					<Typography textAlign={start} mb={3}>
						Km
					</Typography>
				</Box>
				<Box width="80%" mx="auto" mt={3} ml={4}>
					<Slider
						value={kmValue}
						onChange={handleSliderKmChange}
						valueLabelDisplay="on"
						color="secondary"
						marks={kmMarks}
						size="small"
						min={0}
						max={maxKm}
					/>
				</Box>
				<Box width="100%" mx="auto" mt={3} ml={2}>
					<Typography textAlign={start} mb={5}>
						Price
					</Typography>
				</Box>
				<Box width="80%" mx="auto" mt={3} ml={4}>
					<Slider
						value={priceValue}
						onChange={handleSliderPriceChange}
						valueLabelDisplay="on"
						color="secondary"
						marks={priceMarks}
						size="small"
						min={minPrice}
						max={maxPrice}
					/>
				</Box>
				<AdvertisingButton>
					{!advertising && (
						<StyledButton
							onClick={() =>
								setAdvertising((advertising) => !advertising)
							}
							// buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
							buttonStyle="sm"
							buttonColor="brand1"
						>{`Ver anúncio`}</StyledButton>
					)}
				</AdvertisingButton>
				<CancelFilters>
					{
						<StyledButton
							onClick={() =>
								setAdvertising((advertising) => !advertising)
							}
							buttonStyle={
								window.screen.width < 700 ? 'sm' : 'bg'
							}
							buttonColor="brand1"
						>{`Limpar Filtros`}</StyledButton>
					}
				</CancelFilters>
			</HomePageNav>
		</>
	);
};