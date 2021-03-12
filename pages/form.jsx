import React, {useState} from "react";
import styled from "@emotion/styled";
import {Layout} from "antd";

const {Content} = Layout;

const Test = () => {
  const [state, setState] = useState({
    isLoading: false,

    formData: {
      img: "",
    },
  });
  // This converts a blob type image to base64 encoded string
  const getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(file);
  };
  const fileTransform = (e) => {
    getBase64(e.target.files[0], (base64String) => {
      state.formData.img = base64String;
      console.log(state.formData.img);
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/upload`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            ...state.formData,
          }),
        }
      );

      const responseData = await response.json();
      if (responseData.success) {
        console.log(responseData);
      } else {
        console.log(responseData);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <form onSubmit={submit}>
      <input type="file" name="img" onChange={fileTransform} id="img" />
      <button type="submit">Submit</button>
    </form>
  );
};

const PageStyled = styled(Layout)``;

export default Test;
