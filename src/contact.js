

const contactPage = () => {
   let body = document.querySelector('.main-body')
   body.innerHTML = '';
   
   const contactsHeader = document.createElement('div');
   contactsHeader.className = 'contactsHeader';
   
   const contact1Container = document.createElement('div');
   const contact1Info = document.createElement('div');
   const contact1Name = document.createElement('div');
   const contact1Img = new Image();
   const contact1Desc = document.createElement('div');
   
   contact1Container.className = 'contact1Container';
   contact1Info.className = 'contact1Info';
   contact1Name.idName = 'contact1Name';
   contact1Img.setAttribute('id', 'contact1Img');
   contact1Desc.idName = 'contact1Desc';
   
   const contact2Container = document.createElement('div');
   const contact2Name = document.createElement('div');
   const contact2Info = document.createElement('div');
   const contact2Img = new Image();
   const contact2Desc = document.createElement('div');
   
   contact2Container.className = 'contact2Container';
   contact2Info.className = 'contact2Info';
   contact2Name.idName = 'contact2Name';
   contact2Img.setAttribute('id', 'contact2Img');
   contact2Desc.idName = 'contact2Desc';
   
   const contact3Container = document.createElement('div');
   const contact3Name = document.createElement('div');
   const contact3Info = document.createElement('div');
   const contact3Img = new Image();
   const contact3Desc = document.createElement('div');
   
   contact3Container.className = 'contact3Container';
   contact3Info.className = 'contact3Info';
   contact3Name.idName = 'contact3Name';
   contact3Img.setAttribute('id', 'contact3Img');
   contact3Desc.idName = 'contact3Desc';
}