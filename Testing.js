import styled from "styled-components";

const Testing = () => {
  return (
    <Wrapper className="section">
      <div>
        This div element is two times of its original width, and three times of
        its original height.
      </div>
      <h3>Translate property</h3>
      <p>
        Moves red box 50px right, 50px down, and 50px closer to point of view,
        which makes it look larger. Point of view is set to 200px above
        translated div element with perspective property on parent element DIV1.
      </p>
      <div id="DIV1">
        DIV1
        <div id="DIV2original">DIV2</div>
        <div id="DIV2">DIV2</div>
      </div>
    </Wrapper>
  );
};

export default Testing;

const Wrapper = styled.section`
  /* background-color: red; */
  padding: 15px;
  margin-top: 25px;

  * {
    padding: 0;
    margin: 0;
  }

  div {
    width: 200px;
    height: 100px;
    background-color: yellow;
    border: 1px solid black;
    transform: scale(2, 3);
    /* The scale() method increases or decreases the size of an element.  This div element is two times of its original width, and three times of its original height. */
  }

  #DIV1 {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin: auto;
    border: 1px solid black;
    perspective: 200px;
  }

  #DIV2 {
    height: 50px;
    width: 50px;
    border: 1px solid black;
    background-color: red;
    translate: 150px 150px 10px;
  }

  #DIV2original {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px dashed grey;
    background-color: lightgrey;
    opacity: 0.9;
  }
`;
