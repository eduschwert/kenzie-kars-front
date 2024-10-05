import { StyledButtonPagination, StyledDivPagination } from "./style";

export const Pagination = ({
  page,
  setPage,
  totalPages,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}) => {
  return (
    <StyledDivPagination>
      {page > 1 && totalPages > 0 && (
        <StyledButtonPagination
          onClick={() => setPage((previousPage) => --previousPage)}
        >
          {"< Voltar"}
        </StyledButtonPagination>
      )}
      <strong>
        <span>{page} </span>
        <span>de {totalPages}</span>
      </strong>
      <StyledButtonPagination
        disabled={totalPages === page || totalPages === 0}
        onClick={() => setPage((previousPage) => ++previousPage)}
      >
        {"Seguinte >"}
      </StyledButtonPagination>
    </StyledDivPagination>
  );
};
