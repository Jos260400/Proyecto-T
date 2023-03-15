import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { setAvatarRoute } from "../utils/APIRoutes";
export default function SetAvatar() {
    const api = `https://api.multiavatar.com/4645646`;
    const navigate = useNavigate();

    return (
        <>
    
  <Container>
    
    
  <div className="title-container">
  <h1>Pick an avatar as a profile picture</h1>
  </div>
    
    
    </Container>

  <ToastContainer />


</>
);
}

const Container = styled.div``;