import m1 from './images/1.png'
import m2 from './images/2.png'
import m3 from './images/3.png'
import m4 from './images/4.png'
import m5 from './images/5.png'
import dani from './images/daniel-216-asset.jpg'
import horoscope from './images/horoscope.png'

const Home = () => {


    return (
        <div className="title">
            <div class="TitresDuJour">
                <div class="row">
                    <div class="col-6 col-md-4">
                        <img src={m1} alt="img" width={600}></img>
                    </div>
                    <div class="col-6 col-md-4">
                        <img src={m2} alt="img" width={600}></img>
                    </div>
                    <div class="col-6 col-md-4">
                        <img src={m3} alt="img" width={600}></img>
                    </div>
                </div>

                <div class="row">

                    <div class="col-12 col-md-8">
                        <img src={m4} alt="img" width={600}></img>
                    </div>
                    <div class="col-6 col-md-4">
                        <img src={m5} alt="img" width={600}></img>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <img src={dani} alt="img" width={300}></img>
                    </div>
                    <div class="col">
                        <img src={horoscope} alt="img" width={500}></img>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Home;