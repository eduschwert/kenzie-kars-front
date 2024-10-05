import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import xmark from "../../assets/xmark.svg";
import bars from "../../assets/bars.svg";
import { StyledHeader, StyledButtonMenu } from "./style";
import { useModal, useUser } from "../../hooks/useContexts";
import { ClipLoader } from "react-spinners";
import { ModalEditUser } from "../modalEditUser";
import { ModalDeleteUser } from "../modalDeleteUser";
import { UserNav } from "../userNav";
import { GuestNav } from "../guestNav";
import { ModalEditUserAddress } from "../modalEditUserAddress";
import { ModalEditUserPassword } from "../modalEditUserPassword";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user, globalLoading } = useUser();

  const { isOpenModal, modalType } = useModal();

  return (
    <>
      {isOpenModal && (
        <>
          {(() => {
            switch (modalType) {
              case "editUser":
                return <ModalEditUser />;
              case "editUserAddress":
                return <ModalEditUserAddress />;
              case "editUserPassword":
                return <ModalEditUserPassword />;
              case "deleteUser":
                return <ModalDeleteUser />;
            }
          })()}
        </>
      )}
      <StyledHeader>
        <div>
          <Link to="/">
            <img className="headerLogo" src={logo} alt="Logo Motor Shop" />
          </Link>
          {globalLoading ? (
            <ClipLoader color="#212529" size={"3rem"} />
          ) : (
            <>
              <StyledButtonMenu onClick={() => setMenu(!menu)}>
                <img src={menu ? xmark : bars} alt="Alternar menu" />
              </StyledButtonMenu>
              {user ? (
                <UserNav menu={menu} setMenu={setMenu} />
              ) : (
                <GuestNav menu={menu} setMenu={setMenu} />
              )}
            </>
          )}
        </div>
      </StyledHeader>
    </>
  );
};
