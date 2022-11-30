import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 20vh;
<<<<<<< HEAD

  width: 100%;

  display: flex;

  justify-content: center;

=======
  width: 100%;
  display: flex;
  justify-content: center;
>>>>>>> 481988a4ddf3dde3d5fbbf7e1d5590286cc9f111
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
<<<<<<< HEAD

  width: 40px;

  height: 40px;

  border: 3px solid rgba(195, 195, 195, 0.6);

  border-radius: 50%;

  border-top-color: #636767;

  animation: spin 1s ease-in-out infinite;

  -webkit-animation: spin 1s ease-in-out infinite;

=======
  width: 40px;
  height: 40px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
>>>>>>> 481988a4ddf3dde3d5fbbf7e1d5590286cc9f111
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 481988a4ddf3dde3d5fbbf7e1d5590286cc9f111
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
