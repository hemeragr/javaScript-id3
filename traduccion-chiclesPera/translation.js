const translationEs = {
    units: 'Unidades',
    deliveryCost: 'Castos de envio',
    total: 'Total',
    zipCode: 'Codigo zip',
    calculateDeliveryCost: 'Calcular Gastos de envío',
    zipCodeHelp: 'Introduce el código zip para calcular los gastos de envío',

}

const translationEn= {
    units: 'Units',
    deliveryCost: 'Delivery cost',
    total: 'Total',
    zipCode: 'Zip code',
    calculateDeliveryCost: 'Calculate delivery cost',
    zipCodeHelp: 'Introduce the zip code to calculate the delivery cost',

}

function translateElement(node, newLanguage){
    const i18nkey = node.getAttribute('data-i18nkey'); // cojo el valor que hay en data-i18.. del nodo que le paso como parametro
    const translationObject = newLanguage === 'es' ? translationEs : translationEn; // cojo el objeto deonde esta la tracuccion que necesito
    const newText = translationObject[i18nkey]; // cojo el texto traducido que esta en la propiedad e ojeto
    node.innerText = newText; //asigno el nuvo texto al nodo
}

function translateAll() {
    document.querySelectorAll('[data-i18nkey]').forEach( (node) => {
        translateElement(node, 'en');
    });
}

window.addEventListener('load', () => {
     document.querySelectorAll('[data-language]').forEach((node) => {
        node.addEventListener('click', (element) => {
            const elemenClicked= element.target;
            const language = elemenClicked.getAttribute('data-lenguage');
            translateAll(language);

        })
     })
})