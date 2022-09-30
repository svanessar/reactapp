import './Features.css';

function  Features(){
    return(
        <section id="features">
        <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
        <div class="features-description">

            <div className="feature feature-blue">
                <cardfuature
                background={true}
                texto="Lorem ipsum dolor"
                icono="fa-solid fa-bell-concierge"/>
            
            </div>

            <div class="feature feature-black">
            <cardfuature
             background={false}
                icono="fa-solid fa-bad"
                texto="Lorem ipsum dolor"
               />
            </div>

            <div class="feature feature-blue">
            <cardfuature
             background={true}
                icono="fa-solid fa-wifi"
                texto='Lorem ipsum dolor'
                />
            </div>

            <div class="feature feature-black">
            <cardfuature
             background={false}
                icono="fa-solid fa-dumbbell"
                texto='Lorem ipsum dolor'
               />
            </div>
        </div>
</section>
)};
export default Features;