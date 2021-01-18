import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { setAlert } from "../../store/actions/alert";
import "./styles.css";

const AlertComponent = () => {
  const dispatch = useDispatch();
  const { alert } = useSelector((state) => state.alert);
  useEffect(() => {
    if (alert && alert.status) {
      closeAlert();
    }
  });
  const closeAlert = (time = 5000) => {
    setTimeout(function () {
      dispatch(
        setAlert({
          status: false,
          message: null,
          code: null,
        })
      );
    }, time);
  };
  if (alert && alert.status) {
    return (
      <Alert
        variant={alert.code}
        onClose={() => closeAlert(0)}
        dismissible
        transition
      >
        <Alert.Heading>{alert.message.title}</Alert.Heading>
        <p>{alert.message.description}</p>
      </Alert>
    );
  }
  return "";
};
export default AlertComponent;
