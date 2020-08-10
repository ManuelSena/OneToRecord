import * as React from "react";
//<section style={{ color: "#fff" }} className="page-section" id="services">
//    <div className="container">
//        <div className="row">
//            <div className="col-md-8 mb-5">
//                <h2>What We Do</h2>
//                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
//                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
//                <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
//            </div>
//        </div>
//    </div>
//</section>
export const Home: React.StatelessComponent<{}> = () => {

    return (
        <div className="fahome">
            <div className="home hero-image">
                <img className="onetorecordimage" src="https://s3-us-west-1.amazonaws.com/elicit.us/OneToRecordWhiteRed.png" alt="onetorecord"/>
                  
}

        </div>
            <div className="masthead">
                <h4>Humble Productions</h4>
                <h1 style={{ color: "white" }}>Contact</h1>
                <h3 style={{ textAlign: "center" }}>Anthony</h3>
                <ul>

                  <li><a className="contactusemail" href="mailto:Anthony@OnetoRecord.com?subject=Contact">Anthony@OnetoRecord.com</a></li>
                   <li> <a className="contactusphone" href="tel:5622122754">Phone: (562) 212-2754</a></li>
                    </ul>
            </div>

            <section style={{ color: "#fff" }} className="page-section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h1 className="card-title">Audio Recording Lesson</h1>
                                    <br />
                                    <h3 className="card-text">$12 /hour</h3>
                                </div>
                                <div className="card-footer">
                                    <a className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h1 className="card-title">Rehearsal / Space Rental</h1>
                                    <h2 className="card-text">Production Space - </h2>
                                    <br />
                                    <h4>$15 per hour</h4>
                                    <br/>
                                    <h2 className="card-text">Recorded Band Rehearsals - </h2>
                                        <br />
                                        <h4>$18 per hour</h4>
                                </div>
                                <div className="card-footer">
                                    <a className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h1 className="card-title">Recording with Engineer</h1>
                                    <h2 className="card-text">VOCALS -  </h2>
                                    <br />
                                    <h4>$20 per hour</h4>
                                    <h2 className="card-text">BAND - </h2>
                                    <br />
                                    <h4>$25 per hour</h4>
                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Find Out More!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Elicit 2020</p>
                </div>
            </footer>
            <div>
                <img className="construction" src="https://s3-us-west-1.amazonaws.com/elicit.us/OneToRecord/underconstuction.jpg" alt="under constuction"/>
            </div>
        </div>

    );
}