import { Typography, Row, Col, Card } from "antd";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { mdiLogout, mdiAccountOutline, mdiHome, mdiAccount, mdiAccountGroupOutline, mdiAccountGroup } from '@mdi/js';
import Icon from "@mdi/react";
const { Meta } = Card;
const User = () => {
  const { Title } = Typography
  const [cambio, setCambio] = useState()
  const [cambio2, setCambio2] = useState()
  const { ref, inView, entry } = useInView()
  setTimeout(function () {
    setCambio('mb-96 opacity-0')
  }, 2000)
  setTimeout(function () {
    setCambio2('mb-1 opacity-1')
  }, 4000)
  const cuerpo = () => {
    return (
      <div ref={ref} className="user">
        <div className={`transition-all duration-1000 ${cambio} `}>
          <h1 className={`text-3xl transition-all text-slate-800 text-center mb-52 `}
          >Bienvenido
            <br />
            a
            <br />
            <span className="text-9xl">
              Ciudad Salud
            </span>
          </h1>
        </div>
      </div>
    )
  }
  return (
    <>

      {cuerpo()}
    </>
  )

    ;
};

export default User;