const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    })
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

//
// let dateOfLAstcommit = username => {
//     let url = `https://api.github.com/users/${username}/events`;
//     let event = {headers: {'Authorization': githubKey}};
//     return fetch(url, event)
//         .then(response => response.json())
// console.log(data[0])
//     .then(data => data[0].created_at);
//
// };
//
// console.log(dateOfLAstcommit('walshcbryan').then(lastCommitDate => console.log(lastCommitDate)));

const lastCommit = (username) => {
    fetch(`https//api.github.com/users/${username}/events`,
        {headers: {"Authorization": `token ${githubKey}`}})
        .then(resp => resp.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then (event => event.created_at)
        .then (date => console.log(date));
};


console.log(lastCommit('walshcbryan'));


// var trivia = $.ajax("https://opentdb.com/api.php?amount=10", {
//     type: "GET",
// });
//
//
// trivia.done(function(data){
//     console.log(data.results[0]);
// });