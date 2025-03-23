const logoContainer = document.querySelector('.clients-logos');
for(i = 1; i<24; i++){
    const img = document.createElement('div');
    img.classList.add('client-logo');
    const logo = document.createElement('img');
    img.appendChild(logo)
    logo.setAttribute('src', `./images/clients/client${i}.png`);
    logoContainer.append(img);
}