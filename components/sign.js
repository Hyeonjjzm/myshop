import styles from "./sign.module.css";
import { TextField, Fade } from "@mui/material";
import { useState } from "react";

export default function Sign() {
  // TextField의 입력 값을 처리하는 state
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [pwCheckValue, setPwCheckValue] = useState("")
  const [showPwField, setShowPwField] = useState(false);
  const [showPwCheckField, setShowPwCheckField] = useState(false);

  // TextField의 helpText를 처리하는 State
  const [helpText, setHelpText] = useState("6-12자 이내 영문, 숫자 사용가능");
  const [pwHelpText, setPwHelpText] = useState("");
  const [pwCheckHelpText, setPwCheckHelpText] = useState("");

  // TextField의 Error를 처리하는 State
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pwCheckError,setPwCheckError] = useState(false);

  // ID Field의 값이 변경될때 처리
  const handleIdChange = (event) => {
    const value = event.target.value;
    setIdValue(value);

    const regexId = /^[a-zA-Z0-9]{6,12}$/;
    if (regexId.test(value)) {
      console.log("유효한 ID입니다");
      setHelpText("사용 가능한 ID 입니다");
      setIdError(false);
      setShowPwField(true);
    } else {
      console.log("유효하지 않습니다.");
      setHelpText("유효하지 않은 ID입니다. 6-12자 이내 영문, 숫자 사용가능 ");
      setIdError(true);
      setShowPwField(false);
    }
  };
  //PW 필드의 값이 변경될 때 처리
  const handlePwChange = (event) => {
    const value = event.target.value;
    setPwValue(value);
    const regexPw = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    
    if (regexPw.test(value)) {
      setShowPwCheckField(true);
      setPwError(false);
      setPwHelpText("사용 가능한 PW 입니다.")
    } else {
      setShowPwCheckField(false);
      setPwError(true);
      setPwHelpText("비밀번호는 8~16자 이내 영문,숫자,특수문자를 포함해야 합니다.")
    }
  };

  const handlePwCheckChange = (event) => {
    // 목표 : PwTextField에 있는 값을 가져와서 똑같은지 검사
    const value = event.target.value;
    setPwCheckValue(value);
    
    if (pwValue == value) {
      setPwCheckError(false)
      setPwCheckHelpText("비밀번호가 일치합니다.")
    } else {
      setPwCheckError(true)
      setPwCheckHelpText("비밀번호가 일치하지 않습니다.")
    }
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h2 className={styles.head}>회원가입</h2>
        <div className={styles.form}>
          <TextField
            error={idError}
            id="id-required"
            label="ID"
            placeholder="ID"
            helperText={helpText}
            value={idValue}
            onChange={handleIdChange}
            fullWidth
          ></TextField>
          {showPwField && (
            <Fade in={showPwField} timeout={500}>
              <TextField
                error={pwError}
                id="password-required"
                label="Password"
                type="password"
                placeholder="Password"
                helperText={pwHelpText}
                value={pwValue}
                onChange={handlePwChange}
                fullWidth
              ></TextField>
            </Fade>
          )}
          {showPwCheckField && (
            <Fade in={showPwCheckField} timeout={500}>
              <TextField
                error={pwCheckError}
                id="password-match"
                label="Password 재확인"
                type="password"
                placeholder="Password 다시 입력"
                helperText={pwCheckHelpText}
                value={pwCheckValue}
                onChange={handlePwCheckChange}
                fullWidth
              ></TextField>
            </Fade>
          )}
        </div>
      </div>
    </>
  );
}
