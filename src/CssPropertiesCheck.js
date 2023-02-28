import React from "react";
import styled from "styled-components";

const CssPropertiesCheck = () => {
  return (
    <Wrapper className="section">
      Search: <input type="text" name="search" />
      <div></div>
      <h2>transform: rotate(20deg):</h2>
<div class="a">Hello World!</div>
<br />

<h2>transform: skewY(20deg):</h2>
<div class="b">Hello World!</div>
<br />

<h2>transform: scaleY(1.5):</h2>
<div class="c">Hello World!</div>
<p id="div1">
  <p id="div2">HELLO</p>
</p>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
  } 

  input[type="text"] {
    width: 100px;
    -webkit-transition: width 0.35s ease-in-out;
    transition: width 0.35s ease-in-out;
  }
  input[type="text"]:focus {
    width: 250px;
  }
  div {		
width: 100px;		
height: 100px;		
background: red;		
transition: width 2s, height 2s, transform 2s;		
}		
		
div:hover {		
width: 300px;		
height: 300px;		
transform: rotate(360deg);		
}		

div.a {
  width: 150px;
  height: 80px;
  background-color: yellow;
  -ms-transform: rotate(20deg); /* IE 9 */
  transform: rotate(20deg);
}

div.b {
  width: 150px;
  height: 80px;
  background-color: yellow;
  -ms-transform: skewY(40deg); /* IE 9 */
  transform: skewY(40deg);
}

div.c {
  width: 150px;
  height: 80px;
  background-color: yellow;
  -ms-transform: scaleY(1.5); /* IE 9 */
  transform: scaleY(1.5);
}

#div1 {
  position: relative;
  height: 200px;
  width: 200px;
  margin: 100px;
  padding: 10px;
  border: 1px solid black;
}

#div2 {
  padding: 50px;
  position: absolute;
  border: 1px solid black;
  background-color: red;
  -ms-transform: rotate(45deg); /* IE 9 */
  -ms-transform-origin: 20% 40%; /* IE 9 */
  transform: rotate(45deg);
  transform-origin: 20% 40%;
}

`;

export default CssPropertiesCheck;
