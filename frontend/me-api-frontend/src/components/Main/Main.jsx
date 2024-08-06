import './Main.css';
import TryApp from '../TryApp/TryApp';

function Main ({language}) {
    function Description() {
        const {
            description,
            titles,
         } = language
        const {
            paragraphs,
            paragraphsTry,
        } = description;
        
        return (
            <>
            <h2 className='section__title'>{titles.description}</h2>
            {paragraphs.map((el, i) => {
                return (
                    <p key={i++}>{el}</p>
                )
            })}
            <h3 className='section__subtitle'>{titles.try_it}</h3>
            {paragraphsTry.map((el, i) => {
                return (
                    <p key={i++}>{el}</p>
                )
            })}
            </>
        )
    }

    function Specification() {
        const {
            titles,
            endpoints
         } = language

        const endpointsContent = () => {
            return (
            endpoints.map((article, i) => {
                const {
                    heading,
                    endpoint,
                    paragraphs,
                    code,
                    errors
                } = article;
                return (
                    <li className='spec-list__item' key={i++}>
                        <h4 className='spec-list__item-title'>{heading}{endpoint ? <span className='span-url'>{` | ${endpoint}`}</span> : ''}</h4>
                        {paragraphs.map((el, i) => {
                            return (
                                <p key={i++} className='spec-list__item-description'>{el}</p>
                            )
                        })}
                        {code ? <pre key={i++} className='code' dangerouslySetInnerHTML={code} /> : ''}
                        {errors ? <p className='spec-list__item-description'>{errors.text} <a href={errors.link} className='span-error'>{errors.title}</a></p> : ''}
                    </li>
                )
            }))
        }

        return (
            <>
                <h2 className='section__title'>{titles.specification}</h2>
                <article>
                    <h3 className='spec-list__title'>{titles.requests_endpoints}</h3>
                    <ul className='spec-list'>
                        {endpointsContent()}
                    </ul>
                </article>
            </>
        )
    }
    return (
        <main className="main">
            <section  id="about" className='section'>
                <Description />
                <TryApp
                    language = {language}
                />
            </section>
            <section id="spec" className="section">
                <Specification />
            </section>
      </main>
    )
}

export default Main;