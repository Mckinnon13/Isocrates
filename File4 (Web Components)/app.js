const template = document.createElement('template');
template.innerHTML = `
<style>
.user-card-container {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.user-card {
    font-family: 'Arial';
    background: #cb202d;
    text-align: center;
    width: 250px;
    margin-bottom: 20px;
    border-bottom: 2px solid black;
    overflow: hidden;
}

.user-card h3 {
    color: white; 
}

.user-card img {
    width: 100%;
    height: auto;
}

.info {
    display: none;
    color: white;
}

#toggle-info {
    background-color: #cb202d;
    border: none;
    color: #cb202d;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: block;
    font-size: 16px;
    margin: 10px auto;
    cursor: pointer;
    border-radius: 5px;
}
</style>
<div class="user-card-container">
    <div class="user-card">
        <h3></h3>
        <img />
        <button class="toggle-info">Toggle Info</button>
        <div class="info">
            <p><slot name="email"/></p> 
            <p><slot name="phone"/></p> 
        </div>
    </div>
</div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.showInfo = true;
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }
    
    toggleInfo() {
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector(".toggle-info");
        if (this.showInfo) {
            info.style.display = "block";
            toggleBtn.innerHTML = 'Hide Info';
        } else {
            info.style.display = "none";
            toggleBtn.innerHTML = 'Show Info';
        }
    }
    
    connectedCallback() {
        this.shadowRoot.querySelector('.toggle-info').addEventListener('click', () => {
            this.toggleInfo();
        });
    }
    
    disconnectedCallback() {
        this.shadowRoot.querySelector('.toggle-info').removeEventListener('click', this.toggleInfo);
    }
}

window.customElements.define('user-card', UserCard);