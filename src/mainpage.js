import Burger from './burger.png';

const mainPage = () => {
     
    // Main Parent divs.
    const mainContainer = document.createElement('div')
    mainContainer.className = 'main-container';
    const header = document.createElement('div');
    header.className = 'main-header';
    const tabs = document.createElement('div');
    tabs.className = 'tabs';
    const mainBody = document.createElement('div');
    mainBody.className = 'main-body'
    
    // children
    const burgerPic = new Image();
    burgerPic.src = Burger; 
    burgerPic.setAttribute('id', 'header-logo');
    const headerTitle = document.createElement('div');
    headerTitle.setAttribute('id', 'header-title');
    headerTitle.textContent = "Matz's Burgers"
    
    const homeTab = document.createElement('a');
    const menuTab = document.createElement('a');
    const contactTab = document.createElement('a');
    homeTab.setAttribute('id', 'home-tab');
    menuTab.setAttribute('id', 'menu-tab');
    contactTab.setAttribute('id', 'contact-tab');
    homeTab.setAttribute('href', '#')
    menuTab.setAttribute('href', '#')
    contactTab.setAttribute('href', '#')
    
    homeTab.textContent = "Home";
    menuTab.textContent = "Menu";
    contactTab.textContent = "Contact";
    
    // Appends.
    mainContainer.appendChild(header);
    mainContainer.appendChild(tabs);
    mainContainer.appendChild(mainBody);
    
    header.appendChild(burgerPic);
    header.appendChild(headerTitle);
    
    tabs.appendChild(homeTab)
    tabs.appendChild(menuTab)
    tabs.appendChild(contactTab)

    document.body.appendChild(mainContainer)
}

export { mainPage }