import Restpic from './restpic.png'
import ownerPicture from './owner.png'

const homeBody = () => {
    // Main Body.
    let body = document.querySelector('.main-body');
    
    // Child elements.
    const header = document.createElement('div')
    header.className = 'home-header';
    const restrIntro = document.createElement('div');
    restrIntro.className = 'restr-intro'
    restrIntro.textContent = 
    `"Matz's burgers is Ut tristique et egestas quis ipsum suspendisse. Eget aliquet nibh praesent tristique magna sit amet purus. Quite the finest burger I have ever had." -  Gordon Ramsey`
     const restrIcon = new Image()
    restrIcon.src = Restpic;
    restrIcon.setAttribute('id', 'restr-icon')
    
    const ownerSect = document.createElement('div');
    const ownerHeader = document.createElement('div')
    const ownerPic = new Image();
    const ownerDescription = document.createElement('div');
    
    ownerHeader.textContent = 'About The Owner';
    ownerPic.src = ownerPicture;
    ownerPic.setAttribute('id', 'owner-img')
    ownerDescription.textContent = "Our owner, Eugene Krabs, is a condimentum vitae sapien pellentesque habitant morbi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie. "
    
    ownerSect.className = 'owner-section'
    ownerHeader.className = 'owner-header';
    ownerDescription.className = 'owner-description'

    // Appends.
    header.appendChild(restrIcon)
    header.appendChild(restrIntro)
    body.append(header)
    
    ownerSect.appendChild(ownerDescription)
    ownerSect.appendChild(ownerPic)
    
    body.append(ownerHeader)
    body.append(ownerSect)
    
    console.log('hello')
}

export { homeBody };