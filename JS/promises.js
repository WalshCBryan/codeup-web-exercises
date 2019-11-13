

// fetch("https://api.github.com/users", {headers: {'Authorization': 'token githubKey'}});


const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(() => console.log('resolved!'));
myPromise.catch(() => console.log('rejected!'));