import "./Homepage.scss";

function Homepage () {
    return (
        <>
        <section className="hero">
        <div className="hero__img"></div>
            <div className="hero__overlay"></div>
            <div className="hero__content">
            <h1 className="hero__title">Where's Your Next Big Adventure?</h1>
            <button className="hero__button">
                Create New Log
            </button>
            </div>
        </section>
        <section className="body">
            <p>Body</p>

        </section>
        </>
    )
}


export default Homepage