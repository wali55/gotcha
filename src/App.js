import Button from './components/Button';
import { AiFillCaretRight, AiOutlineArrowRight, AiOutlineRetweet, AiOutlineMinusCircle, AiFillRest } from "react-icons/ai";

const handleClick = () => {
  console.log('primary button clicked');
}

function App() {
  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          Sign Up
          <AiFillCaretRight className="text-lg ml-1.5" />
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Learn More
          <AiOutlineArrowRight className="ml-1.5" />
        </Button>
      </div>
      <div>
        <Button className="my-4" success>
          Updated
          <AiOutlineRetweet className="text-lg ml-1.5" />
        </Button>
      </div>
      <div>
        <Button warning rounded>
          Remove
          <AiOutlineMinusCircle className="text-lg ml-1.5" />
        </Button>
      </div>
      <div>
        <Button className="mt-4" danger rounded outline>
          Delete
          <AiFillRest className="text-lg ml-1.5" />
        </Button>
      </div>
    </div>
  );
}

export default App;
