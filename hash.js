const urlParams = new URLSearchParams(window.location.search);
let hash = urlParams.get('hash') || '00000000000000000000000000000000'
//hash = getRandomHash()