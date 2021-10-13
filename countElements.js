const count = array => array.reduce((acc,e) => {acc[e]? acc[e]++ : acc[e] = 1;return acc},{})
