import './Unsubscribe.css';
import Heading from '../Heading/Heading';
import Button from '../ButtonGroup/Button/button';
const Unsubscribe = () => {
   return (
        <>
          <div className="nav-contaniner"/>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" style={{margin:'10px 0px'}}>
                        <Heading title="Unsubscribe"/>
                        <p>
                        We hate goodbyes-but if you have a change of heart, we'll always be here with great ideas to share.
                        please enter your mail address below to unsubscribe..
                    </p>
                    <Button text="Unsubscribe Now" classNames="allbtn-primary glow-on-hover text-light"></Button>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
export default Unsubscribe;