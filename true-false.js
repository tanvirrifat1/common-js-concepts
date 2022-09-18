/*
Truthy:
1. ture
2. any number (+ve, -ve) will be truthy
3. any string other then empty string
4. '0' 'false'
5. {}
6. []

Falsy
1. false
2. 0
3. ''(empty string)
4. undefined
5. null
*/
const x = [];
if (x) {
    console.log('value of x is truthy')
}
else {
    console.log('value of x is falsy')
}

// optional
// cheak falsy
const y = null;
if (!y) {
    console.log('value is falsy')
}

// cheak true
const z = { class: 9 };
if (!!x) {
    console.log('value is truthy')
}