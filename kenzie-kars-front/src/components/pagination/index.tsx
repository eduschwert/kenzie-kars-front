import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useProduct } from "../../hooks/useProduct";
import { useLocation } from "react-router-dom";

export const CustomIconsPagination = ({
  getVehiclesPaginationProfileAdm,
  getVehiclesPaginationProfile,
  totalPagesOtherPage,
}: {
  getVehiclesPaginationProfileAdm?: (perPage: number, page: number) => void;
  getVehiclesPaginationProfile?: (perPage: number, page: number) => void;
  totalPagesOtherPage?: number;
}) => {
  const [page, setPage] = useState(1);
  const { totalPages, getProductsPagination } = useProduct();
  const location = useLocation();
  const perPage = 10;
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      getProductsPagination(perPage, page);
    }

    if (
      location.pathname === "/profileviewadmin" &&
      getVehiclesPaginationProfileAdm
    ) {
      getVehiclesPaginationProfileAdm(perPage, page);
    }

    if (location.pathname === "/profileview" && getVehiclesPaginationProfile) {
      getVehiclesPaginationProfile(perPage, page);
    }
  }, [page, location.pathname]);

  if (location.pathname === "/") {
    return (
      <Stack spacing={2} alignItems="center">
        <Pagination count={totalPages} page={page} onChange={handleChange} />
      </Stack>
    );
  }
  if (location.pathname === "/profileviewadmin") {
    return (
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPagesOtherPage}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    );
  }
  if (location.pathname === "/profileview") {
    return (
      <Stack spacing={2} alignItems="center">
        <Pagination
          count={totalPagesOtherPage}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    );
  }

  return null;
};
