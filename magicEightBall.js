function getUserName(){
    var userName = prompt('What\'s your name?');
    userName = userName.toLowerCase();

    if(userName === 'chai'){
    console.log('Hello Mr.' + userName);
    }else{
    console.log(alert('It seems you get lost, 牛B'))};
};
   

function getUserQuestions(){
    var userQuestions = prompt('Ask me whatever you want. But don\'t expect there will be an answer');
    userQuestions = userQuestions.toString();
    console.log(userQuestions);
}

console.log(getUserName(), getUserQuestions());
