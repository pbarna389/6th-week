
const headerContent = () => {
    return `
    <header>
        <nav>
            <div> 
                <img src="">
            </div>
            <div>
                <p>
                    <span>cruise color splash</span>
                </p>
                <div class="dropdown-1">
                    <span>shoes</span>
                    <div class="dropdown-content-1">
                        <ul>
                            <li>boots</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li>loafers</li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li>mules</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li>sandals</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <ul>
                            <li>pumps</li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <figure>dollar</figure>
                <figure>prof</figure>
                <figure>search</figure>
                <figure>hearth</figure>
                <figure>shopcart</figure>
            </div>
        </nav>
    </header>
    `
};

const mainContent = () => {
    return `
    <article>
        <div></div>
    </article>  
    `
};

const pictureContent = () => {
    return `
    <img src="">
    `
};

const footerContent = () => {
    return `
    <footer></footer>
    `
};

const loadEvent = () => {
    const rootEl = document.querySelector('#root');

    // rootEl.insertAdjacentHTML('beforeend', headerContent())
}

window.addEventListener('load', loadEvent);